import {
  IonContent,
  IonPage,
  IonButton,
  IonButtons,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { ellipse, square, triangle } from "ionicons/icons";
import React from "react";
export interface HomePage {}

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonButtons>
              <IonCol size="12" className="ion-align-self-center">
                <IonCol size="3">
                  <IonButton href="/">
                    <IonLabel>Home Page</IonLabel>
                  </IonButton>
                </IonCol>
                <IonCol size="3">
                  <IonButton href="/prescriptions">
                    <IonLabel>Prescriptions</IonLabel>
                  </IonButton>
                </IonCol>
                <IonCol size="3">
                  <IonButton href="/products">
                    <IonLabel>Products</IonLabel>
                  </IonButton>
                </IonCol>
                <IonCol size="3">
                  <IonButton href="/chat">
                    <IonLabel>Chat</IonLabel>
                  </IonButton>
                </IonCol>
              </IonCol>
            </IonButtons>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
