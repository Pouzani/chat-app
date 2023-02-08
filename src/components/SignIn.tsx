import React from 'react'
import { Auth, getAuth } from 'firebase/auth'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

interface prop {
  auth:Auth
}


export const SignIn = (props : prop) => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(props.auth);

  return (
    <div>
        <button className='p-4 px-6 border-2 font-bold hover:bg-white hover:text-black border-white text-white rounded-xl transition-all ease-linear' onClick={() => signInWithGoogle()}>Sign in</button>
    </div>
  )
}
