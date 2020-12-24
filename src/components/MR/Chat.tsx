import React, { useEffect, useState } from "react";
import {
  IonAvatar,
  IonLabel,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import { options, arrowBackOutline } from "ionicons/icons";
import "../MR/Chatt.page.scss";
import { Link } from "react-router-dom";
import ChatForm from "./ChatForm";
import Message from "./Message";
import { MessageInt, Messages } from "../../Database";

const Chatt: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState(Messages);

  useEffect(() => {
    setMessages(Messages);
  });

  const submitForm = (message:MessageInt) => {
    Messages.push({
        time: String(Date.now()),
        msgs: message.msgs,
    });
    setMessages(Messages);

  };

  return (
    <div className="offer-page">
      <IonHeader className="ion-no-border">
        <IonItem lines="none">
          <IonAvatar slot="end">
            <img src="img/profile.jpg" />
          </IonAvatar>
          <Link
            to="/offers"
            style={{
              textDecoration: "none",
            }}
          >
            <IonButton fill="clear" color="light">
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
          </Link>
        </IonItem>
        <IonItem lines="none">
          <div className="ion-padding-start ion-padding-bottom">
            <IonLabel>
              <h2>Offers</h2>
            </IonLabel>

            <IonRow className="ion-align-items-center">
              <IonCol size="10">
                <IonSearchbar
                  placeholder="Search for category"
                  searchIcon="location-outline"
                ></IonSearchbar>
              </IonCol>
              <IonCol size="2">
                <IonButton
                  color="light"
                  fill="clear"
                  onClick={() => setShowModal(true)}
                >
                  <IonIcon icon={options} />
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
        </IonItem>
      </IonHeader>

      <IonContent fullscreen={true}>
        <div className="ion-padding-horizontal wrapper">
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-align-items-baseline">
              <IonCol size="6">
                <h4 className="title">Chat</h4>
              </IonCol>
              <IonCol size="6"></IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <Message  messages={messages}/>

        <ChatForm  submitForm={submitForm}/>
      </IonContent>
    </div>
  );
};

export default Chatt;
