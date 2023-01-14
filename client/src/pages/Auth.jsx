import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../hooks/useAuth';
import { useLocation, Link } from 'react-router-dom';

const schema = yup
  .object({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(5).required('Required'),
  })
  .required();

function Auth() {
  const location = useLocation();
  const authType = location.pathname.slice(1).toUpperCase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { authWithEmaiAndPassword, isLoading, isError } = useAuth();
  const linkPath = authType === 'LOGIN' ? '/registration' : '/login';
  const linkTitle =
    authType === 'LOGIN'
      ? 'Do not have an account? Sign up'
      : 'Do you have already the account? Log in';

  const onSubmit = (credentials) => authWithEmaiAndPassword(authType, credentials);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>{authType}</h2>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
        <input {...register('password')} type="password" />
        <p>{errors.password?.message}</p>
        {isError ? <p>{isError}</p> : null}
        <Link to={linkPath}>
          <p>{linkTitle}</p>
        </Link>
        {isLoading ? <p>{'Loading...'}</p> : <input type="submit" />}
      </form>
    </div>
  );
}

export default Auth;
