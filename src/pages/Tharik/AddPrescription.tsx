import React, { useState } from "react";
import { camera } from "ionicons/icons";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonItemDivider,
  IonAvatar,
  IonButton,
  IonAlert,
  IonCard,
} from "@ionic/react";

import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import {arrowBackOutline } from "ionicons/icons";

import { prescriptions } from "../../Database";
import { useHistory } from "react-router";
import "../Tharik/Pendingpre.pages.scss";
import "../Tharik/AddPrescription.page.scss";
import "../Tharik/Backgroundcolor.page.scss";
export interface AddPrescriptionProps {}

const AddPrescription: React.FC = (props) => {
  const { photos, takePhoto } = usePhotoGallery();
  const [time, setTime] = useState<string>("");
  const [alert, setAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [orderType, setOrderType] = useState<string>("Pick Up");
  const history = useHistory();
  const submitForm = () => {
    prescriptions.push({
      id: 12457 + prescriptions.length,
      orderType: orderType,
      time: time,
      cost: "Rs 5210.00",
      quoted: false,
      deliveryStatus: true,
      photo: photos[0],
      path: "s",
    });

    setSuccessAlert(true);
  };
  return (
    <div className="bg-color">
      <IonPage>
        <div className="addpres-page">
          <IonHeader className="ion-no-border">
            <IonItem lines="none">
              <IonAvatar slot="end">
                <img src="img/profile.jpg" />
              </IonAvatar>
              <IonButton fill="clear" color="light" href="/prescriptions">
                <IonIcon icon={arrowBackOutline} />
              </IonButton>
            </IonItem>
            <IonItem lines="none">
              <div className="ion-padding-start ion-padding-bottom">
                <IonLabel>
                  <h2>Add prescriptions</h2>
                </IonLabel>

                <IonRow className="ion-align-items-center">
                  <IonCol size="10"></IonCol>
                </IonRow>
              </div>
            </IonItem>
          </IonHeader>
        </div>
        <IonContent fullscreen>
          <IonAlert
            isOpen={alert}
            onDidDismiss={() => setAlert(false)}
            cssClass="my-custom-class"
            header={`Rajya Osusala`}
            subHeader={"Form Submission"}
            message={"Please Complete All details"}
            buttons={["OK"]}
          />
          <IonAlert
            isOpen={successAlert}
            onDidDismiss={() => setSuccessAlert(false)}
            cssClass="my-custom-class"
            header={`Rajya Osusala`}
            subHeader={"Form Submission"}
            message={"Successfully added"}
            buttons={[
              {
                text: "Okay",
                handler: () => {
                  setTime("");
                  setOrderType("");
                  history.push("/prescriptions");
                },
              },
            ]}
          />
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              {photos.map((photo, index) => (
                <IonCol size="6" key={index}>
                  <IonImg
                    style={{ height: "300px", width: "100%" }}
                    src={photo.webviewPath}
                  />
                </IonCol>
              ))}
            </IonRow>
            <IonRow className="ion-justify-content-center">
              <IonCol size="12" className="ion-float-right">
                <IonFab>
                  <IonFabButton onClick={() => takePhoto()}>
                    <IonIcon icon={camera}></IonIcon>
                  </IonFabButton>
                </IonFab>
              </IonCol>
            </IonRow>
            <div className="pendingpre-page">
              <IonCard>
                <IonRow className="ion-justify-content-center">
                  <IonItem>
                    <IonLabel>Prescription For</IonLabel>
                    <IonSelect
                      value={time}
                      placeholder="Select One"
                      onIonChange={(e) => setTime(e.detail.value)}
                    >
                      <IonSelectOption value="Per Week">
                        Per Week
                      </IonSelectOption>
                      <IonSelectOption value="Per Month">
                        Per Month
                      </IonSelectOption>
                      <IonSelectOption value="As Prescribed">
                        As Prescribed
                      </IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                  <IonItem>
                    <IonLabel>Order Type</IonLabel>
                    <IonSelect
                      value={orderType}
                      okText="Okay"
                      cancelText="Dismiss"
                      onIonChange={(e) => setOrderType(e.detail.value)}
                    >
                      <IonSelectOption value="Delivery">
                        Delivery
                      </IonSelectOption>
                      <IonSelectOption value="Pick UP">Pick Up</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonRow>
              </IonCard>
            </div>

            <br />

            <div className="pendingpre-page">
              <IonCard>
                <IonItemDivider>Your Selections</IonItemDivider>
                <IonRow className="ion-justify-content-center">
                  <IonItem>Time: {time ?? "(none selected)"}</IonItem>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                  <IonItem>Order Type: {orderType}</IonItem>
                </IonRow>

                <IonRow className="ion-justify-content-center">
                  <IonItem>
                    <IonButton
                      color="primary"
                      onClick={() => {
                        if (
                          time == "" ||
                          orderType == "" ||
                          photos.length == 0
                        ) {
                          setAlert(true);
                        } else {
                          submitForm();
                        }
                      }}
                    >
                      Save
                    </IonButton>
                  </IonItem>
                </IonRow>
              </IonCard>
            </div>
          </IonGrid>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default AddPrescription;
