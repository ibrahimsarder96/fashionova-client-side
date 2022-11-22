import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if(user){
    console.log(user)
  }
  return (
<div className="card  h-screen justify-center items-center">
  <div className='card w-100 bg-slate-200 shadow-2xl'>
  <div className="card-body">
  <h2 className="text-center text-accent text-2xl font-bold">Login</h2>
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