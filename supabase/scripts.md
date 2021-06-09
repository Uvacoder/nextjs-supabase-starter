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
