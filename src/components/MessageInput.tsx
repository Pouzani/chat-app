import React, { FormEvent, useState } from "react";
import {
  addDoc,
  CollectionReference,
  serverTimestamp,
} from "firebase/firestore";
import { Auth, User } from "firebase/auth";
import { IoMdSend } from "react-icons/io";

interface prop {
  auth: Auth;
  messageRef: CollectionReference;
}

export const MessageInput = (props: prop) => {
  const [getFormValue, setFormValue] = useState("");

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    const user: User | null = props.auth.currentUser;
    await addDoc(props.messageRef, {
      name: user?.displayName,
      text: getFormValue,
      createdAt: serverTimestamp(),
      uid: user?.uid,
      photoURL: user?.photoURL,
    });
    setFormValue("");
  };
  return (
    <form onSubmit={sendMessage} className='w-full flex justify-center'>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'></div>
        <input
          type='search'
          id='search'
          className='block w-full p-4 pl-10 focus:outline-none dark:text-white text-black border border-gray-600 rounded-full dark:bg-black bg-white'
          placeholder='Search'
          value={getFormValue}
          onChange={(e) => setFormValue(e.target.value)}
          required
        />
        <button
          type='submit'
          className='dark:text-white text-black absolute right-2.5 bottom-2.5 text-xl  focus:outline-none rounded-lg px-4 py-2'
        >
          <IoMdSend />
        </button>
      </div>
    </form>
  );
};
