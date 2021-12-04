import type { NextPage } from 'next';
import { MetaHead } from '@/libs/components/.';

const Custom404: NextPage = () => {
  return (
    <>
      <MetaHead title="404" />
      <header className="h-screen w-screen flex justify-center items-center">
        <div className="flex justify-center items-center">
          <h1 className="m-0 text-2xl font-medium">404</h1>
          <p className="m-0 text-sm font-normal">This page could not be found.</p>
        </div>
      </header>
      <style jsx>{`
        header {
          background: #ff0000;
          color: #fff;
        }
        h1 {
          padding: 10px 23px 10px 0;
          margin-right: 20px;
          border-right: 1px solid #fff;
        }
      `}</style>
    </>
  );
};

export default Custom404;
