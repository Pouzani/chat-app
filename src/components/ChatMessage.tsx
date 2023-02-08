import { Auth, User } from "firebase/auth";
import React from "react";

interface prop {
  auth: Auth;
  message: any;
}

const ChatMessage = (props: prop) => {
  const { text, uid, name, createdAt, photoURL } = props.message;
  let time: string = "";
  const messageClass =
    uid === props.auth.currentUser?.uid ? "sent" : "recieved";

  return (
    <div
      className={`messages ${messageClass} font-bold w-full m-0 p-0 px-3 dark:text-white text-black flex`}
    >
      <div className='flex message gap-1'>
        <img src={photoURL} className='rounded-full w-12 h-12'></img>
        <div>
          <div className='text-right px-3'>{name}</div>
          <div className='textmsg'>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
