import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Prescription } from "../../Database";
import { trashBin, pencil } from "ionicons/icons";
import "../Tharik/PrescriptionContent.page.scss";
import { useHistory } from "react-router";

interface Props {
  pendingPrescriptionsProp: Prescription[];
  deletePrescription: (id: number) => void;
}

const PrescriptionContent: React.FC<Props> = ({
  pendingPrescriptionsProp,
  deletePrescription,
}) => {
  const [pendingPrescription, setPendingPrescription] = useState<
    Prescription[]
  >(pendingPrescriptionsProp);
  useEffect(() => {
    setPendingPrescription(pendingPrescriptionsProp);
  });

  const history = useHistory();
  return (
    <div className="precontent-page">
      <IonCard>
        <IonList>
          {pendingPrescription.map((pres, index) => {
            let realPath =
              pres.photo.webviewPath === undefined
                ? `assets/${pres.path}`
                : pres.photo.webviewPath;

            return (
              <IonItem key={index}>
                <IonAvatar slot="start">

                  <IonImg src={realPath} />
                </IonAvatar>
                <IonRow>
                  <IonCol>
                    <IonLabel>
                      <h2>#{pres.id}</h2>
                      <p>{pres.orderType}</p>
                      <h3>{pres.time}</h3>
                    </IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonButtons>
                      <IonButton onClick={() => deletePrescription(pres.id)}>
                        <IonIcon
                          style={{ size: "small", color: "red" }}
                          icon={trashBin}
                        ></IonIcon>
                      </IonButton>
                      <IonButton
                        onClick={() =>
                          history.push(`/prescriptions/edit/${pres.id}`)
                        }
                      >
                        <IonIcon
                          style={{ size: "small", color: "blue" }}
                          icon={pencil}
                        ></IonIcon>
                      </IonButton>
                    </IonButtons>
                  </IonCol>
                </IonRow>
              </IonItem>
            );
          })}
        </IonList>
      </IonCard>
    </div>
  );
};

export default PrescriptionContent;
