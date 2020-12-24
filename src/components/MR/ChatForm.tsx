import {triangle } from 'ionicons/icons';
import React, { useState } from 'react';
import { MessageInt } from "../../Database";
import './ChatForm.css';
export interface Props {
  submitForm:(message:MessageInt)=>void;
}

const ChatForm: React.FC<Props> = ({submitForm}) => {
    const [msgs, setMsgs] = useState<string>("");

   /* const submitForm = () => {
        Messages.push({
            time: String(Date.now()),
            msgs: msgs,
        });

      };*/
    return (
        <div id="chat-form">
            <input type="text"
             placeholder="type a message"
             value={msgs}
             onChange={(e) => setMsgs(e.target.value)}/>
            <img src={triangle} className="img" alt="Send Message" onClick={()=>{
              submitForm({
            time: String(Date.now()),
            msgs: msgs,
        })}} />
        </div>
    );
  };

export default ChatForm;
