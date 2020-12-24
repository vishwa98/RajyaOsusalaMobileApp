import React from "react";

import {
  IonButton,
  IonButtons,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";

const PrescriptionHeader: React.FC = () => {
  return (
    <IonGrid>
      <IonRow className="ion-justify-content-center">
        <IonCol size="3">
          <IonButtons>
            <IonButton href="/prescriptions">
              <IonLabel>Pending</IonLabel>
            </IonButton>
          </IonButtons>
        </IonCol>
        <IonCol size="3">
          <IonButtons>
            <IonButton href="/prescriptions/quoted">
              <IonLabel>Quoted</IonLabel>
            </IonButton>
          </IonButtons>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default PrescriptionHeader;
