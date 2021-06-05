import type { NextPage, GetServerSideProps } from 'next';
import { MetaHead } from '@/libs/components/.';
import { supabase } from '@/supabase/.';

const Home: NextPage = () => {
  return (
    <>
      <MetaHead title="Safe Vault for Secrets" />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req);

  if (user) return { props: {}, redirect: { destination: '/u/overview', permanent: false } };

  return { props: {} };
};

export default Home;
