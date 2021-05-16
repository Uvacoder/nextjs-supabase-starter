import type { NextPage } from 'next';
import type { SignUpTypes } from '@/libs/form-data';
import Link from 'next/link';
import { Text, Input, Button, Divider, Spacer } from '@geist-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MetaHead } from '@/libs/components/.';

const Register: NextPage = () => {
  const { register, handleSubmit, formState, setError, clearErrors } = useForm<SignUpTypes>();

  const onChange = (): void => clearErrors(['password', 'confirm']);

  const onSubmit: SubmitHandler<SignUpTypes> = ({ email, password, confirm }: SignUpTypes) => {
    if (password !== confirm) {
      return (
        [
          { type: 'conflict', name: 'password' },
          { type: 'conflict', name: 'confirm' },
        ] as const
      ).forEach(({ name, type }) => {
        setError(name, { type });
      });
    }
    return { email, password };
  };

  return (
    <>
      <MetaHead title="Sign Up" />
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
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
            <Text h4>Create your account</Text>
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
              {...register('password', { required: true })}
              onChange={onChange}
            >
              <Text small b>
                Password
              </Text>
            </Input.Password>
            <Input.Password
              width="100%"
              status={formState.errors.confirm && 'error'}
              {...register('confirm', { required: true })}
              onChange={onChange}
            >
              <Text small b>
                Confirm Password
              </Text>
            </Input.Password>
            <Button htmlType="submit" shadow type="success">
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
    </>
  );
};

export default Register;
