import type { NextPage } from 'next';
import type { LogInTypes } from '@/libs/form-data';
import Link from 'next/link';
import { Text, Input, Button, Divider, Spacer } from '@geist-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MetaHead } from '@/libs/components/.';

const Login: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<LogInTypes>();

  const onSubmit: SubmitHandler<LogInTypes> = ({ email, password }: LogInTypes) => {
    return { email, password };
  };

  return (
    <>
      <MetaHead title="Log In" />
      <div className="flex flex-row min-h-screen">
        <section className="w-98 p-12 box-border flex-shrink-0 sm:w-screen">
          <header>
            <Text h3>Ultimo Pase</Text>
            <Text type="success" span b>
              A safe vault for all your secrets.
            </Text>
          </header>
          <Spacer y={2} />
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
            <Text h4>Log in to your vault</Text>
            <Input
              type="email"
              width="100%"
              status={formState.errors.email && 'error'}
              {...register('email', { required: true })}
            >
              <Text small b>
                Email Address
              </Text>
            </Input>
            <Input.Password
              width="100%"
              status={formState.errors.password && 'error'}
              {...register('password', { required: true, min: 6 })}
            >
              <Text small b>
                Password
              </Text>
            </Input.Password>
            <Button htmlType="submit" shadow type="success">
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
    </>
  );
};

export default Login;
