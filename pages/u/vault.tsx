import type { NextPage, GetServerSideProps } from 'next';
import { MetaHead } from '@/libs/components/.';
import { supabase } from '@/supabase/.';
import { Button, Card, Input } from '@geist-ui/react';
import { Search } from '@geist-ui/react-icons';
import { Page } from '@/components/.';

const Vault: NextPage = () => {
  return (
    <>
      <MetaHead title="Vault" />
      <Page className="grid gap-5">
        <div className="flex gap-5 items-center">
          <Input placeholder="Search" icon={<Search color="#888" />} size="large" width="100%" />
          <Button auto type="secondary">
            New Secret
          </Button>
        </div>
        <Card style={{ background: '#fafafa' }}>
          <div className="flex justify-center py-28">
            <small style={{ color: '#9b9b9b' }}>NO SECRETS TO SHOW</small>
          </div>
        </Card>
      </Page>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req);

  if (!user) return { props: {}, redirect: { destination: '/login', permanent: false } };

  return { props: { user } };
};

export default Vault;
