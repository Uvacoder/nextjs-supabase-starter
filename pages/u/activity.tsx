import type { NextPage, GetServerSideProps } from 'next';
import { MetaHead } from '@/libs/components/.';
import { supabase } from '@/supabase/.';

const Activity: NextPage = () => {
  return (
    <>
      <MetaHead title="Activity" />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req);

  if (!user) return { props: {}, redirect: { destination: '/login', permanent: false } };

  return { props: { user } };
};

export default Activity;
