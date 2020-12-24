import React, { useState, useEffect } from "react";
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
  IonButton,
  IonAlert,
  IonCard,
  IonAvatar,
} from "@ionic/react";

import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import { Photo, Prescription, prescriptions } from "../../Database";
import { useParams } from "react-router";
import { arrowBackOutline } from "ionicons/icons";
import "../Tharik/Pendingpre.pages.scss";
import "../Tharik/AddPrescription.page.scss";
import "../Tharik/Backgroundcolor.page.scss";

export interface IUserPublicProfileRouteParams {
  id: string;
}
const EditPrescription: React.FC = () => {
  const { id } = useParams<IUserPublicProfileRouteParams>();
  const [alert, setAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const { photos, takePhoto } = usePhotoGallery();
  const [time, setTime] = useState<string>(
    prescriptions.filter((x) => x.id === +id)[0].time
  );
  const [photo, setPhoto] = useState<Photo>(
    prescriptions.filter((x) => x.id === +id)[0].photo
  );
  const [orderType, setOrderType] = useState<string>(
    prescriptions.filter((x) => x.id === +id)[0].orderType
  );

  const [prescription, setPrescription] = useState<Prescription>(
    prescriptions.filter((x) => x.id === +id)[0]
  );

  useEffect(() => {
    setPrescription(prescriptions.filter((x) => x.id === +id)[0]);
  }, [prescription]);
  useEffect(() => {
    setPrescription({
      ...prescription,
      photo: photo,
      time: time,
      orderType: orderType,
    });
  }, [photo, time, orderType]);

  const tookPhoto = () => {
    setPhoto(photos[0]);
  };
  const submitForm = () => {
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
                  <h2>Edit prescription</h2>
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
            isOpen={successAlert}
            onDidDismiss={() => setSuccessAlert(false)}
            cssClass="my-custom-class"
            header={`Rajya Osusala`}
            subHeader={"Form Submission"}
            message={"Edited Successfuly"}
            buttons={["OK"]}
          />
          <IonAlert
            isOpen={alert}
            onDidDismiss={() => setAlert(false)}
            cssClass="my-custom-class"
            header={`Rajya Osusala`}
            subHeader={"Form Submission"}
            message={"Edit not success"}
            buttons={["OK"]}
          />

          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="6">
                <IonImg
                  style={{ height: "300px", width: "100%" }}
                  src={
                    prescription.photo !== undefined
                      ? prescription.photo.hasOwnProperty("webviewPath")
                        ? prescription.photo.webviewPath
                        : `assets/${prescription.path}`
                      : ""
                  }
                />
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
              <IonCol size="12" className="ion-float-right">
                <IonFab>
                  <IonFabButton
                    onClick={() => {
                      takePhoto();

                      tookPhoto();
                    }}
                  >
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

export default EditPrescription;
