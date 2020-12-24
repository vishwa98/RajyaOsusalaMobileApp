import React from 'react';
import './ChatTitle.css';
import { IonIcon} from '@ionic/react';
import { trash } from 'ionicons/icons';
import { Messages } from '../../Database';


  const ChatTitle: React.FC = () => {
    const clear = () => {
      Messages.filter( (v) => {
          v.msgs="b";
          v.time="c";
      });
    };
    return (
        <div id="chat-title">
        <span>Chat</span>
        <IonIcon src={trash} onClick={clear}></IonIcon>
        </div>
    );
  };

export default ChatTitle;
