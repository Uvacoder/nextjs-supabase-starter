import { useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import type { User as UserTypes } from '@supabase/gotrue-js';
import { useRouter } from 'next/router';
import { MetaHead } from '@/libs/components/.';
import { Button, Input, Text, Textarea } from '@geist-ui/react';
import { RefreshCcw, AtSign, ArrowLeft } from '@geist-ui/react-icons';
import { supabase } from '@/supabase/.';

interface Props {
  user: UserTypes;
}

const New: NextPage<Props> = ({ user }: Props) => {
  const router = useRouter();
  const [password, setPassword] = useState<string>('');
  const [hideUser, setHideUser] = useState<boolean>(true);

  return (
    <>
      <MetaHead title="New Secret" />
      <section className="min-h-screen flex justify-center items-center">
        <div className="z-10 bg-white px-8 py-10 rounded-md">
          <form className="grid gap-3">
            <div className="flex items-center justify-between gap-5 mb-2">
              <h4 className="m-0">Create New Secret</h4>
              <Button icon={<ArrowLeft />} auto size="small" onClick={() => router.back()} />
            </div>
            <Input width="100%" placeholder="Acme Inc.">
              <Text small b>
                Organisation
              </Text>
            </Input>
            <Textarea placeholder="a short description ... (optional)" />
            <div className="flex items-end gap-3">
              <Input clearable width="100%" initialValue={user.email}>
                <Text small b>
                  Email Address
                </Text>
              </Input>
              <Button icon={<AtSign />} auto size="small" onClick={() => setHideUser(!hideUser)} />
            </div>
            {!hideUser && (
              <Input width="100%">
                <Text small b>
                  Username
                </Text>
              </Input>
            )}
            <div className="flex items-end gap-3">
              <Input.Password
                width="100%"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
                <Text small b>
                  Password
                </Text>
              </Input.Password>
              <Button
                icon={<RefreshCcw />}
                auto
                size="small"
                onClick={() =>
                  setPassword(
                    Math.random().toString(36).slice(8) +
                      '@' +
                      Math.random().toString(36).slice(8).toUpperCase()
                  )
                }
              />
            </div>
            <Input.Password width="100%">
              <Text small b>
                Confirm Password
              </Text>
            </Input.Password>
            <Button type="success-light" className="mt-3">
              Save To Vault
            </Button>
          </form>
        </div>
      </section>
      <style jsx>{`
        section {
          background-color: #000;
          background-image: url('/assets/focus.webp');
          background-position: center;
        }
        section :global(.btn) {
          height: 2.3rem;
          padding: 0 0.7rem;
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req);

  if (!user) return { props: {}, redirect: { destination: '/login', permanent: false } };

  return { props: { user } };
};

export default New;
