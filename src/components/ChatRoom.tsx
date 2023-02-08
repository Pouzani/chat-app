import React from 'react';
import { collection, CollectionReference, query, Query, Firestore, orderBy, limitToLast } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore'; 
import ChatMessage from './ChatMessage';
import { Auth } from 'firebase/auth';
import { MessageInput } from './MessageInput';

interface prop{
  firestore : Firestore
  auth : Auth
}

export const ChatRoom = (props : prop) => {

  const messageRef : CollectionReference = collection(props.firestore, "messages");
  const q : Query = query(messageRef, orderBy("createdAt","desc"), limitToLast(25));
  const [messages] = useCollectionData(q);
  return (
    <>
      <div className='bg-black w-full md:w-3/5 h-full flex flex-col flex-col-reverse overflow-auto overflow-x-hidden rounded-3xl'>
        <MessageInput auth={props.auth} messageRef = {messageRef}  />
        {messages && messages.map( (msg,id) => <ChatMessage key={id} message = {msg} auth={props.auth}  /> )}
      </div>
    </>
  )
}
