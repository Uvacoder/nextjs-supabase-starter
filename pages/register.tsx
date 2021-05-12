import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Text, Input, Button, Divider, Spacer } from '@geist-ui/react';

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up – Ultimo Pase</title>
      </Head>
      <div className="flex flex-row min-h-screen">
        <div className="canvas w-98 md:w-40 sm:hidden" />
        <section className="w-98 p-12 box-border flex-shrink-0 sm:w-screen">
          <header>
            <Text h3>Ultimo Pase</Text>
            <Text type="success" span b>
              A safe vault for all your secrets.
            </Text>
          </header>
          <Spacer y={2} />
          <form className="grid gap-3">
            <Text h4>Create your account</Text>
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
            <Input.Password width="100%">
              <Text small b>
                Confirm Password
              </Text>
            </Input.Password>
            <Button shadow type="success">
              Sign Up
            </Button>
            <Divider y={2}>
              <Text small b>
                OR
              </Text>
            </Divider>
            <Button shadow type="secondary">
              Sign Up With Google
            </Button>
          </form>
          <Spacer y={2} />
          <Text>
            Already have an account?{' '}
            <Link href="/login">
              <a className="whitespace-nowrap">Log In</a>
            </Link>
          </Text>
        </section>
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

export default Register;
