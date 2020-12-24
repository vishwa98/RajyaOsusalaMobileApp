import React from "react";
import {
  IonMenu,
  IonLabel,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonToolbar,
  IonTitle,
  IonList,
  IonButtons,
} from "@ionic/react";
import {
  paperPlane,
  home,
  arrowUpCircle,
  map,
  person,
  chatbox,
  powerOutline,
  heart,
} from "ionicons/icons";
import "../vishwa/Sidebar.page.scss";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="side-page">
      <IonMenu side="start" content-id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen={true}>
          <IonList>

              <IonItem href="/homenew">
                <IonIcon icon={home} slot="start"></IonIcon>
                <IonLabel>Home</IonLabel>
              </IonItem>

            <Link
              to="/prescriptions"
              style={{
                textDecoration: "none",
              }}
            >
              <IonItem>
                <IonIcon icon={arrowUpCircle} slot="start"></IonIcon>
                <IonLabel>Prescriptions</IonLabel>
              </IonItem>
            </Link>

            <IonItem href="/category">
              <IonIcon icon={heart} slot="start"></IonIcon>
              <IonLabel>Products</IonLabel>
            </IonItem>

            <IonItem href="/offers">
              <IonIcon icon={paperPlane} slot="start"></IonIcon>
              <IonLabel>Offers</IonLabel>
            </IonItem>

            <Link
              to="/maps"
              style={{
                textDecoration: "none",
              }}
            >
              <IonItem>
                <IonIcon icon={map} slot="start"></IonIcon>
                <IonLabel>Locations</IonLabel>
              </IonItem>
            </Link>
            <Link
              to="/message"
              style={{
                textDecoration: "none",
              }}
            >
              <IonItem>
                <IonIcon icon={chatbox} slot="start"></IonIcon>
                <IonLabel>Chat</IonLabel>
              </IonItem>
            </Link>
            <Link
              to="/profileEdit"
              style={{
                textDecoration: "none",
              }}
            >
              <IonItem>
                <IonIcon icon={person} slot="start"></IonIcon>
                <IonLabel>Profile</IonLabel>
              </IonItem>
            </Link>
            <IonItem href="/logout">
              <IonIcon icon={powerOutline} slot="start"></IonIcon>
              <IonLabel>Logout</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <div className="ion-page" id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      </div>
    </div>
  );
};

export default Sidebar;
