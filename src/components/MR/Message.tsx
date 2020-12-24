import React, {useState} from 'react';
import './Message.css';
import { MessageInt } from "../../Database";

interface Props{
    messages:MessageInt[];

}

const Message: React.FC<Props> = ({messages}) => {
const [Messages, setMessages] = useState(messages);



    console.log(Messages);

    return (
        <div id="chat-message-list">
            { Messages.map( (M,index) =>
            <div className="message-row you-message" key={index}>
                <div className="message-content">
                    <div className="message-text">
                        {M.msgs}
                    </div>
                    <div className="message-time">
                        {M.time}
                    </div>
                </div>
            </div>
            )}
        </div>

    );
  };

export default Message;
