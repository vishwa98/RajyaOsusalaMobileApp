import React, { useEffect, useState } from "react";
import {
  IonAvatar,
  IonModal,
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
  IonFooter,
  IonToast,
} from "@ionic/react";
import { arrowBackOutline, trashBin } from "ionicons/icons";
import "../MR/Chatt.page.scss";
import ChatForm from "./ChatForm";
import Message from "./Message";
import Sidebar from "../../pages/vishwa/Sidebar";
import { MessageInt, Messages } from "../../Database";

const Chatt: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState(Messages);

  const [showToast1, setShowToast1] = useState(false);

  useEffect(() => {
    setMessages(Messages);
  });



  const submitForm = (message:MessageInt) => {
    Messages.unshift({
        time: `${new Date().toLocaleString('default', { month: 'short' })}  ${(new Date()).getDate()}`,
        msgs: message.msgs,
    });
    setMessages([...Messages,{
      time: `${new Date().toLocaleString('default', { month: 'short' })}  ${(new Date()).getDate()}`,
      msgs: message.msgs,
  }]);

  };

  return (
    <div className="chattt-page">
      <IonHeader className="ion-no-border">
        <IonItem lines="none">
          <IonAvatar slot="end">
            <img src="img/profile.jpg" />
          </IonAvatar>

            <IonButton fill="clear" color="light" href="/homenew">
              <IonIcon icon={arrowBackOutline} />
            </IonButton>

        </IonItem>
        <IonItem lines="none">
          <div className="ion-padding-start ion-padding-bottom">
            <IonLabel>
              <h2>Chat</h2>
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
                  <IonIcon icon={trashBin} />
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
        </IonItem>
        <Sidebar />
      </IonHeader>

      <IonContent fullscreen={true}>

      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Chat Cleared"
        duration={1000}
      />
      <IonModal isOpen={showModal} cssClass="my-modal">
          <div
            style={{
              top: "1px",
              color: "white",

              backgroundColor: "#316dd0",
              width: "100%",
            }}
          >
            <h2
              style={{
                marginLeft: "20px",
              }}
            >
              Clear chat?
            </h2>
          </div>

          <div
          >

            <IonItem>
          <IonLabel>
              <IonButton onClick={() => setShowToast1(true)}>
            Yes
            </IonButton>
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>
              <IonButton onClick={() => setShowModal(false)}>
            No
            </IonButton>
          </IonLabel>
        </IonItem>

          </div>
          <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
        </IonModal>
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



      </IonContent>

      <IonFooter>
        <ChatForm  submitForm={submitForm}/>

        </IonFooter>
    </div>
  );
};

export default Chatt;
