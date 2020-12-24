
import React, { useState } from "react";
import {
  IonAvatar,
  IonLabel,
  IonModal,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import { menu, options } from "ionicons/icons";

import "../Tharik/Pendingpre.pages.scss";

const Pendingpre: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="pendingpre-page">
      <IonHeader className="ion-no-border">
        <IonItem lines="none">
          <IonAvatar slot="end">
            <img src="img/profile.jpg" />
          </IonAvatar>
          <IonButton fill="clear" color="light">
            <IonIcon icon={menu} />
          </IonButton>
        </IonItem>
        <IonItem lines="none">
          <div className="ion-padding-start ion-padding-bottom">
            <IonLabel>
              <h2>Products</h2>
            </IonLabel>

            <IonRow className="ion-align-items-center">
              <IonCol size="10">
                <IonSearchbar
                  placeholder="Search for products"
                  searchIcon="location-outline"
                ></IonSearchbar>
              </IonCol>
              <IonCol size="2">
                <IonButton
                  color="light"
                  fill="clear"
                  onClick={() => setShowModal(true)}
                >
                  <IonIcon icon={options} />
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
        </IonItem>
      </IonHeader>

      <IonContent fullscreen={true}>
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
              Filter Products
            </h2>
          </div>

          <div
            style={{
              marginTop: "1px",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            <IonButton color="secondary" href="/limitedoffers">
              Discount
            </IonButton>
            <br />
            <br />

            <IonButton color="secondary" href="/productoffers">
              Price
            </IonButton>
          </div>
          <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
        </IonModal>

        <div className="ion-padding">
          <IonRow className="ion-align-items-center ion-padding-horizontal">
            <IonCol size="6">
              <h5></h5>
            </IonCol>
            <IonCol size="6" className="ion-text-right">
              <IonButton fill="clear" color="dark">
                <IonIcon
                  slot="icon-only"
                  className="ellipsis-horizontal"
                ></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCard>
              <IonCardContent>
                <IonImg src="img/pro1.jpeg"></IonImg>

                <IonRow>
                  <IonCol size="">
                    <IonCardTitle>Pro1</IonCardTitle>
                    <IonCardSubtitle>Rs 150</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardContent>
                <IonImg src="img/pro2.jpg"></IonImg>

                <IonRow>
                  <IonCol size="">
                    <IonCardTitle>Pro2</IonCardTitle>
                    <IonCardSubtitle>Rs 150</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </IonRow>

          <IonRow>
            <IonCard>
              <IonCardContent>
                <IonImg src="img/pro3.jpg"></IonImg>

                <IonRow>
                  <IonCol size="">
                    <IonCardTitle>Pro3</IonCardTitle>
                    <IonCardSubtitle>Rs 150</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardContent>
                <IonImg src="img/pro4.jpg"></IonImg>

                <IonRow>
                  <IonCol size="">
                    <IonCardTitle>Pro4</IonCardTitle>
                    <IonCardSubtitle>Rs 150</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </IonRow>
        </div>
      </IonContent>
    </div>
  );
};

export default Pendingpre;
