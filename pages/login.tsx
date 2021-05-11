import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Text, Input, Button, Divider, Spacer } from '@geist-ui/react';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Log In – Ultimo Pase</title>
      </Head>
      <div className="flex flex-row min-h-screen">
        <section className="w-98 p-12 box-border flex-shrink-0 sm:w-screen">
          <header>
            <Text h3>Ultimo Pase</Text>
            <Text type="success" span b>
              A safe vault for all your secrets.
            </Text>
          </header>
          <Spacer y={2} />
          <form className="grid gap-3">
            <Text h4>Log in to your vault</Text>
            <Input type="email" width="100%">
              <Text small b>
                Email Address
              </Text>
            </Input>
            <Input.Password width="100%">
              <Text small b>
                Password
              </Text>
            </Input.Password>
            <Button shadow type="success">
              Log In
            </Button>
            <Divider y={2}>
              <Text small b>
                OR
              </Text>
            </Divider>
            <Button shadow type="secondary">
              Log In With Google
            </Button>
          </form>
          <Spacer y={2} />
          <Text>
            Don&apos;t have an account?{' '}
            <Link href="/register">
              <a className="whitespace-nowrap">Sign Up</a>
            </Link>
          </Text>
        </section>
        <div className="canvas w-full flex-grow sm:hidden" />
      </div>
      <style jsx>{`
        .canvas {
          background-color: #ff4800;
          background-image: radial-gradient(#e3e3e3 1px, transparent 0),
            radial-gradient(#e3e3e3 1px, transparent 0);
          background-position: 0 0, 25px 25px;
          background-size: 50px 50px;
        }
      `}</style>
    </>
  );
};

export default Login;