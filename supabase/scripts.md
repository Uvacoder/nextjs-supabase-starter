### Profile

Add users to `profile` table when email is confirmed. This is checked with the `confirmed_at` column value for a specific user. When using `google` auth, the email is directly confirmed. In the case of `email` based auth, we need to check if the `confirmed_at` value is `NULL`. We create a `plpgsql` procedure to to add values from `auth.users` table to `public.profile`.

<details>
<summary>Create Profile</summary>

```sql
CREATE TABLE public.profile (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT NOT NULL,
  provider TEXT NOT NULL,
  full_name TEXT,
  avatar_type TEXT NOT NULL DEFAULT 'marble',
  pin TEXT,
  confirmed_at TIMESTAMP WITH TIME ZONE DEFAULT Timezone('utc'::text, Now()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT Timezone('utc'::text, Now()) NOT NULL
);

CREATE OR REPLACE FUNCTION public.create_new_profile()
returns TRIGGER AS $$
BEGIN
INSERT INTO public.profile
(
  id,
  email,
  provider,
  full_name,
  confirmed_at,
  created_at
)
VALUES
(
  new.id,
  new.email,
  new.raw_app_meta_data->>'provider',
  new.raw_user_meta_data->>'full_name',
  new.confirmed_at,
  new.created_at
);
return new;
end;$$ language plpgsql security definer;

CREATE TRIGGER on_google_auth AFTER
INSERT ON auth.users FOR EACH ROW WHEN (
new.confirmed_at IS NOT NULL
) EXECUTE PROCEDURE public.create_new_profile();

CREATE TRIGGER on_email_auth AFTER
UPDATE OF confirmed_at ON auth.users FOR EACH ROW
EXECUTE PROCEDURE public.create_new_profile();
```

</details>

<details>
<summary>Configure RLS Policy</summary>

```sql
ALTER TABLE public.profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable select for profile based on id"
ON public.profile FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Enable update for profile based on id"
ON public.profile FOR UPDATE
USING (auth.uid() = id) WITH CHECK (auth.email() = email);
```

</details>

### Timeline

Create a registry of user actions to map out a timeline. Actions such as `SIGN_IN` are accounted for the log. Each action has an `event`, `description`, and `timestamp` which is tied to an `id`. The `SIGN_IN` event provides the authentication method used.

<details>
<summary>Create Timeline</summary>

```sql
CREATE TABLE timeline (
  task SERIAL NOT NULL PRIMARY KEY,
  id UUID NOT NULL,
  event TEXT NOT NULL,
  description TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT Timezone('utc'::text, Now()) NOT NULL
);

CREATE OR REPLACE FUNCTION public.add_sign_in()
returns TRIGGER AS $$
BEGIN
INSERT INTO public.timeline
(
  id,
  event,
  description,
  timestamp
)
VALUES
(
  new.id,
  'SIGN_IN',
  new.raw_app_meta_data->>'provider',
  new.last_sign_in_at
);
return new;
end;$$ language plpgsql security definer;

CREATE TRIGGER on_sign_in AFTER INSERT OR UPDATE
OF last_sign_in_at ON auth.users FOR EACH ROW WHEN (
  new.last_sign_in_at IS NOT NULL
) EXECUTE PROCEDURE public.add_sign_in();

CREATE OR REPLACE FUNCTION public.add_name_change()
returns TRIGGER AS $$
BEGIN
INSERT INTO public.timeline
(
  id,
  event,
  description,
  timestamp
)
VALUES
(
  new.id,
  'NAME_CHANGE',
  new.full_name,
  current_timestamp
);
return new;
end;$$ language plpgsql security definer;

CREATE TRIGGER on_name_change AFTER UPDATE
OF full_name ON public.profile FOR EACH ROW
EXECUTE PROCEDURE public.add_name_change();

CREATE OR REPLACE FUNCTION public.add_avatar_change()
returns TRIGGER AS $$
BEGIN
INSERT INTO public.timeline
(
  id,
  event,
  description,
  timestamp
)
VALUES
(
  new.id,
  'AVATAR_CHANGE',
  new.avatar_type,
  current_timestamp
);
return new;
end;$$ language plpgsql security definer;

CREATE TRIGGER on_avatar_change AFTER UPDATE
OF avatar_type ON public.profile FOR EACH ROW
EXECUTE PROCEDURE public.add_avatar_change();
```

</details>

<details>
<summary>Configure RLS Policy</summary>

```sql
ALTER TABLE public.timeline ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable select for timeline based on id"
ON public.timeline FOR SELECT
USING (auth.uid() = id);
```

</details>
