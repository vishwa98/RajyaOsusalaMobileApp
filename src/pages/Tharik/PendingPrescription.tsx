import { IonAlert, IonFab, IonFabButton } from "@ionic/react";
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
} from "@ionic/react";
import { add, menu } from "ionicons/icons";
import React, { useState } from "react";
import { menuController } from "@ionic/core";
import PrescriptionContent from "../../components/Tharik/PrescriptionContent";
import PrescriptionHeader from "../../components/Tharik/PrescriptionHeader";
import Sidebar from "../vishwa/Sidebar";
import "../Tharik/Pending.page.scss";
import "../Tharik/Backgroundcolor.page.scss";
import { Prescription, prescriptions } from "../../Database";

const PendingPrescription: React.FC = () => {
  const [alert, setAlert] = useState(false);

  const [id, setId] = useState(1);

  const [pendingPrescription, setPendingPrescription] = useState<
    Prescription[]
  >(prescriptions.filter((x) => !x.quoted));
  const deletePrescription = (id: number) => {
    setId(id);
    setAlert(true);
  };


  const handleclick = () => {
    menuController.open();
  };
  return (
    <div className="bg-color">
      <div className="pending-page">
        <IonHeader className="ion-no-border">
          <IonItem lines="none">
            <IonAvatar slot="end">
              <img src="img/profile.jpg" />
            </IonAvatar>
            <IonButton fill="clear" color="light" onClick={() => handleclick()}>
              <IonIcon icon={menu} />
            </IonButton>
          </IonItem>
          <IonItem lines="none">
            <div className="ion-padding-start ion-padding-bottom">
              <IonLabel>
                <h2>Pending prescriptions</h2>
              </IonLabel>

              <IonRow className="ion-align-items-center">
                <IonCol size="10"></IonCol>
              </IonRow>
            </div>
          </IonItem>
        </IonHeader>
        <Sidebar />
      </div>

      <IonContent fullscreen={true}>
        <IonAlert
          isOpen={alert}
          onDidDismiss={() => setAlert(false)}
          cssClass="my-custom-class"
          header={`Rajya Osusala`}
          subHeader={"Confirm Delete"}
          message={"Are you sure to delete ?"}
          buttons={[
            {
              text: "Okay",
              handler: () => {
                setPendingPrescription(
                  pendingPrescription.filter((x) => x.id !== id)
                );
              },
            },
            {
              text: "Cancel",
            },
          ]}
        />
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12">
              <PrescriptionHeader />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <PrescriptionContent
              pendingPrescriptionsProp={pendingPrescription}
              deletePrescription={deletePrescription}
            />
          </IonRow>
          <IonRow>
            <IonFab vertical="bottom" horizontal="center">
              <IonFabButton href="/prescriptions/add">
                <IonIcon icon={add}></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonRow>
        </IonGrid>
      </IonContent>
    </div>
  );
};

export default PendingPrescription;
