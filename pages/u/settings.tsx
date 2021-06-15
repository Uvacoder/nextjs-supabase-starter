import { useEffect, useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { Fieldset, Button, useToasts, Input, Loading } from '@geist-ui/react';
import { MetaHead } from '@/libs/components/.';
import { Page } from '@/components/.';
import { definitions, supabase } from '@/supabase/.';

const Settings: NextPage = () => {
  const [profile, setProfile] = useState<definitions['profile'] | null>(null);
  const [, setToast] = useToasts();

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from<definitions['profile']>('profile').select();
      if (error) return setToast({ text: error.message, type: 'error' });
      if (data) setProfile(data[0]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MetaHead title="Settings" />
      <Page className="grid three-one gap-5">
        {profile ? (
          <div>
            <Fieldset>
              <Fieldset.Title>Account Name</Fieldset.Title>
              <Fieldset.Subtitle>
                Please enter your full name, or a display name you are comfortable with.
              </Fieldset.Subtitle>
              <div className="max-w-sm sm:max-w-full">
                <Input width="100%" initialValue={profile.full_name} />
              </div>
              <Fieldset.Footer>
                <Fieldset.Footer.Status>
                  Please use 32 characters at maximum.
                </Fieldset.Footer.Status>
                <Fieldset.Footer.Actions>
                  <Button auto size="small" type="secondary">
                    Update
                  </Button>
                </Fieldset.Footer.Actions>
              </Fieldset.Footer>
            </Fieldset>
          </div>
        ) : (
          <div className="h-20">
            <Loading className="h-20" />
          </div>
        )}
      </Page>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req);

  if (!user) return { props: {}, redirect: { destination: '/login', permanent: false } };

  return { props: { user } };
};

export default Settings;
