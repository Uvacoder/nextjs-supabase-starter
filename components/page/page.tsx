import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Page = ({ className, children }: Props): React.ReactNode => {
  return <div className={`max-w-xl mx-auto p-5 ${className}`}>{children}</div>;
};

export default Page;
