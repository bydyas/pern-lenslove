import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../hooks/useAuth';

const schema = yup
  .object({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(5).required('Required'),
  })
  .required();

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { authWithEmaiAndPassword, isLoading, isError } = useAuth();
  const onSubmit = (credentials) => authWithEmaiAndPassword('SIGN_IN', credentials);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>REGISTRATION</h2>
      <input {...register('email')} />
      <p>{errors.email?.message}</p>
      <input {...register('password')} type="password" />
      <p>{errors.password?.message}</p>
      {isError ? <p>{isError}</p> : null}
      {isLoading ? <p>{'Loading...'}</p> : <input type="submit" />}
    </form>
  );
}

export default Form;
