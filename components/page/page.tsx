import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Page = ({ className, children }: Props): React.ReactElement => {
  return (
    <>
      <div className={`max-w-xl mx-auto p-5 ${className}`}>{children}</div>
      <style jsx>{`
        .three-one {
          grid-template-columns: 3fr 1fr;
        }
        @media screen and (max-width: 1024px) {
          .three-one {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Page;
