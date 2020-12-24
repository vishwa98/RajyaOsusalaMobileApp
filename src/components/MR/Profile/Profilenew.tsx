import React, {useState} from 'react';
import { IonAvatar, IonLabel, IonModal, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonToast } from '@ionic/react';
import { menu, logOutOutline } from 'ionicons/icons';
import { menuController } from "@ionic/core";
import Sidebar from "../../../pages/vishwa/Sidebar";
import "../../Tharik/PrescriptionContent.page.scss";
import "../Profile/Profilenew.page.scss";



const Maps: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    const [showToast1, setShowToast1] = useState(false);
    const handleclick = () => {
        menuController.open();
      };
    return (

    <div>
    <div className='pronew-page'>

<IonHeader className="ion-no-border">
  <IonItem lines="none">
    <IonAvatar slot="end">
    <IonButton fill="clear" color="light" href="/logout">
     <IonIcon icon={logOutOutline} />
    </IonButton>
    </IonAvatar>
    <IonButton fill="clear" color="light" onClick={() => handleclick()}>
     <IonIcon icon={menu} />
    </IonButton>
  </IonItem>
  <IonItem lines="none">
    <div className="ion-padding-start ion-padding-bottom">
      <IonLabel>
        <h2>Edit Profile</h2>
      </IonLabel>
    </div>
  </IonItem>
</IonHeader>
<Sidebar />
</div>

<div className="profile-pagenew">
<IonContent fullscreen={true}>
  <h1>Profile</h1>

  <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Profile Details Edited"
        duration={800}
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
              Are you Sure?
            </h2>
          </div>

          <div
          >

            <IonItem>
          <IonLabel>
              <IonButton href="/logout">
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

  <form id="form">
    <input placeholder="Your Name" style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}></input>
            <br />
            <br />

    <input placeholder="Email" style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}></input>
            <br />
            <br />
    <input placeholder="Birthday" style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}></input>
            <br />
            <br />
            <input type="Number" placeholder="Telephone" style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}></input>
            <br />
            <br />
            <textarea placeholder="Your Address" style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}></textarea>
            <br />
            <br />
    <IonButton expand="block" shape="round" onClick={() => setShowToast1(true)}>Edit</IonButton>
    <IonButton expand="block" shape="round"  onClick={() => setShowModal(true)}>Delete Profile</IonButton>
  </form>

  <p>By pressing 'Delete Profile' your profile <br />will be permanently deleted</p>
</IonContent>

</div>

    </div>

    );
}

export default Maps;