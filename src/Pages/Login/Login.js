import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../assest/social/google.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
  const navigate = useNavigate();

  if(gUser){
    navigate('/home');
  }
  if(loading || gLoading){
    return <Loading></Loading>
  }
  let signInError;
  if(error || gError){
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
  }
  const onSubmit = data =>{
    console.log(data)
    signInWithEmailAndPassword(data.email, data.password);
    navigate('/home');
  };

  //***The function has not finished the work*******
  // const resetPassword = async(data)=> {
  //   console.log(data)
  //   const email = data.email;
  //   console.log(email)
  //   if(email){
  //     await sendPasswordResetEmail(email);
  //     toast('sent email');
  //   }
  // }
  
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
      {signInError}
        <input className='btn hover:bg-slate-600 bg-orange-400 w-full max-w-xs uppercase orange-400 text-white font-extrabold' type='submit' value='Login'/>
    </form>
    <p className='text-accent'>New Fashionova? <Link to="/signup" className='text-blue-400'>Create New Account</Link></p>
    <p className='text-accent'>Forget Password? <button className='text-blue-400'>Reset Password</button></p>
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
    <ToastContainer />
  </div>
  </div>
</div>
  );
};

export default Login;