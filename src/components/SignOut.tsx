import React from 'react'
import { Auth, getAuth } from 'firebase/auth'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

interface prop {
  auth:Auth
}


export const SignOut = (props : prop) => {


  return props.auth.currentUser && (
    <div className='mt-10'>
        <button className="p-4 px-6 border-2 font-bold hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black border-black dark:border-white text-black dark:text-white rounded-xl transition-all ease-linear" onClick={() => props.auth.signOut()}>Sign Out</button>
    </div>
  )
}
