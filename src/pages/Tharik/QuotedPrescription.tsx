import {

  IonAlert,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonItem,
  IonButton,
  IonAvatar,
  IonLabel,
} from "@ionic/react";
import { trashBin, menu } from "ionicons/icons";
import React, { useState } from "react";
import PrescriptionHeader from "../../components/Tharik/PrescriptionHeader";
import { menuController } from "@ionic/core";
import Sidebar from "../vishwa/Sidebar";
import QuotedPrescriptionContent from "../../components/Tharik/QuotedPrescriptionContent";
import "../Tharik/Pending.page.scss";
import "../Tharik/Backgroundcolor.page.scss";
import { Prescription, prescriptions } from "../../Database";

const QuotedPrescription: React.FC = () => {
  const [alert, setAlert] = useState(false);
  const [alertAD, setAlertAD] = useState(false);
  const [alertD, setDAlert] = useState(false);
  const [id, setId] = useState(1);
  const [color, setColor] = useState("red");
  const [idD, setDId] = useState(1);
  const [quotedPrescription, setQuotedPrescription] = useState<Prescription[]>(
    prescriptions.filter((x) => x.quoted)
  );
  const deletePrescription = (id: number) => {
    setId(id);
    setAlert(true);
  };
  const delivery = (id: number) => {
    setDId(id);
    setDAlert(true);
  };
  const deleteAllPrescription = () => {
    setAlertAD(true);
  };
  const handleclick = () => {
    menuController.open();
  };
  return (
    <div className="bg-color">
      <IonPage>
        <div className="pending-page">
          <IonHeader className="ion-no-border">
            <IonItem lines="none">
              <IonAvatar slot="end">
                <img src="img/profile.jpg" />
              </IonAvatar>
              <IonButton
                fill="clear"
                color="light"
                onClick={() => handleclick()}
              >
                <IonIcon icon={menu} />
              </IonButton>
            </IonItem>
            <IonItem lines="none">
              <div className="ion-padding-start ion-padding-bottom">
                <IonLabel>
                  <h2>Quoted prescriptions</h2>
                </IonLabel>

                <IonRow className="ion-align-items-center">
                  <IonCol size="10"></IonCol>
                </IonRow>
              </div>
            </IonItem>
          </IonHeader>
          <Sidebar />
        </div>
        <IonContent fullscreen>
          <IonAlert
            isOpen={alert}
            onDidDismiss={() => setAlert(false)}
            cssClass="my-custom-class"
            header={`Rajya Osusala`}
            subHeader={"Confirm Clear"}
            message={"Are you sure to clear prescription ?"}
            buttons={[
              {
                text: "Okay",
                handler: () => {
                  setQuotedPrescription(
                    quotedPrescription.filter((x) => x.id !== id)
                  );
                },
              },
              {
                text: "Cancel",
              },
            ]}
          />
          <IonAlert
            isOpen={alertD}
            onDidDismiss={() => setDAlert(false)}
            cssClass="my-custom-class"
            header={`Rajya Osusala`}
            subHeader={"Confirm Delivery"}
            message={"Do you want to deliver?"}
            buttons={[
              {
                text: "Okay",
                handler: () => {
                  setColor("green");
                  setQuotedPrescription(
                    quotedPrescription.map((x) => {
                      if (x.id === idD) {
                        x.deliveryStatus = true;
                      }
                      return x;
                    })
                  );
                },
              },
              {
                text: "Cancel",
              },
            ]}
          />
          <IonAlert
            isOpen={alertAD}
            onDidDismiss={() => setAlertAD(false)}
            cssClass="my-custom-class"
            header={`Rajya Osusala`}
            subHeader={"Form Submission"}
            message={"Are you sure to Clear All"}
            buttons={[
              {
                text: "Okay",
                handler: () => {
                  let filteredPrescriptions = quotedPrescription.filter(
                    (x) => x.id === 58
                  );
                  setQuotedPrescription(filteredPrescriptions);
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
              <QuotedPrescriptionContent
                quotedPrescriptionsProp={quotedPrescription}
                deletePrescription={deletePrescription}
                delivery={delivery}
                color={color}
              />
            </IonRow>
            <IonRow>
              <IonFab vertical="bottom" horizontal="center">
                <IonFabButton
                  onClick={() => {
                    deleteAllPrescription();
                  }}
                >
                  <IonIcon
                    style={{ size: "large", color: "red" }}
                    icon={trashBin}
                  ></IonIcon>
                </IonFabButton>
              </IonFab>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default QuotedPrescription;
