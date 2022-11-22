import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";


const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  if(user){
    console.log(user)
  }

  const onSubmit = data =>{
    console.log(data)
  };


  return (
<div className="card h-screen justify-center items-center">
  <div className='card w-100 bg-slate-200 shadow-2xl'>
  <div className="card-body w-96">
  <h2 className="text-center text-accent text-2xl font-bold">Login</h2>
  <form onSubmit={handleSubmit(onSubmit)}>
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
            message: 'Email is "Required'
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
   
    </form>
  <div className="divider">OR</div>
  <button 
   onClick={() => signInWithGoogle()}
  className="btn btn-outline bg-black text-white"
  >Continue With Google</button>
  </div>
  </div>
</div>
  );
};

export default Login;