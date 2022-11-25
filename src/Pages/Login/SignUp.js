import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../assest/social/google.png'
import { async } from '@firebase/util';

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updError] = useUpdateProfile(auth);
  const [agree, setAgree] = useState(false);
  
  const navigate = useNavigate();

  if(user || gUser){
    console.log(user)
  }
  if(loading || gLoading || updating){
    return <Loading></Loading>
  }
  let signInError;
  if(error || gError || updError){
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>

  }

  const onSubmit = async(data) =>{
    console.log(data)
    createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name});
    if(agree){
      console.log('update done')
      navigate('/home')
    }
   
  };

 

  return (
    <div className="card h-screen justify-center items-center">
    <div className='card w-100 bg-slate-200 shadow-2xl'>
    <div className="card-body w-96">
    <h2 className="text-center text-accent text-2xl font-bold">Sign UP</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input 
          type="text" 
          placeholder="write your name" 
          className="input input-bordered bg-white shadow-2xl w-full max-w-xs"
          {...register("name",{
            required: {
              value: true,
              message: 'Name is Required'
            }
          })}
          />
          <label className="label">
          {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
          </label>
        </div>
          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          type="email" 
          placeholder="write your email" 
          className="input input-bordered bg-white shadow-2xl w-full max-w-xs"
          {...register("email",{
            required: {
              value: true,
              message: 'Email is Required'
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: 'Provide a valid Email' 
            }
          })}
          />
          <label className="label">
          {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
          </label>
        </div>
          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type="password" 
          placeholder="write your password" 
          className="input input-bordered bg-white shadow-2xl w-full max-w-xs"
          {...register("password",{
            required: {
              value: true,
              message: 'Password is Required'
            },
            minLength: {
              value: 6,
              message: 'Must be 6 character or longer' 
            }
          })}
          />
         
          <label className="label">
          {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
          </label>
        </div>
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        <label className={`pl-2 ${agree ? ' ' : 'text-red-500'}`} htmlFor="terms">Accept Fashionova terms and Condition</label>
        {signInError}
          <input
          disabled={!agree} 

          className='disabled:bg-slate-500 btn hover:bg-orange-400 bg-orange-400 w-full max-w-xs uppercase orange-400 text-white font-extrabold mt-2' 
          type='submit' 
          value='Sign UP'/>
      </form>
      <p className='text-accent'>New Fashionova? <Link to="/login" className='text-blue-400'>Please Login</Link></p>
     
      <div className="flex items-center justify-center ">
        <div className="h-1 bg-gray-300 w-28 rounded-md"></div>
        <div className="divider">OR</div>
        <div className="h-1 bg-gray-300 w-28 rounded-md"></div>
      </div>
    <button 
     onClick={() => signInWithGoogle()}
    className="btn btn-outline bg-lime-500 text-white font-extrabold">
    <img style={{width: '30px'}} src={google} alt="" />
        <span className='px-2'>Continue With Google</span>
    </button>
    </div>
    </div>
  </div>
  );
};

export default SignUp;