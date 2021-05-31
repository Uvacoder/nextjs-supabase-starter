import React from 'react';
import { Code, Link, Page, Text } from '@geist-ui/react';
import { MetaHead } from '@/libs/components/.';

interface Props {
  email: string;
}

const Verify = ({ email }: Props): React.ReactElement => {
  return (
    <>
      <MetaHead title="Awaiting Confirmation" />
      <Page dotBackdrop size="mini" className="flex flex-col items-center justify-center">
        <header>
          <Text h3>Awaiting Confirmation</Text>
        </header>
        <main>
          <Text p>
            We just sent an email to <Code>{email}</Code>. Click verify and confirm your
            registration. You can now safely close this browser tab.
          </Text>
          <Text p>
            Not your email?{' '}
            <Link color href="/register">
              Undo
            </Link>
          </Text>
        </main>
      </Page>
    </>
  );
};

export default Verify;
