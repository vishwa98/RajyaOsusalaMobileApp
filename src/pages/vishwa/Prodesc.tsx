import React, { useState } from "react";
import {
  IonAvatar,
  IonApp,
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
import { menuController } from "@ionic/core";
import { menu, options, search } from "ionicons/icons";
import "../vishwa/Prodesc.page.scss";
import "../vishwa/Side";
import Sidebar from "../vishwa/Sidebar";
import { Link } from "react-router-dom"

const Prodesc: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const handleclick = () => {
    menuController.open();
  };
  return (
      <IonApp>
    <div className="prodesc-page">
      <div className="prodesc-page">
        <IonHeader className="ion-no-border">
          <IonItem lines="none">
            <IonAvatar slot="end">
              <img src="img/profile.jpg" />
            </IonAvatar>
            <IonButton fill="clear" color="light" onClick={() => handleclick()}>
              <IonIcon icon={menu}></IonIcon>
            </IonButton>
          </IonItem>
          <IonItem lines="none">
            <div className="ion-padding-start ion-padding-bottom">
              <IonLabel>
                <h2>Products</h2>
              </IonLabel>

              <IonRow className="ion-align-items-center">
                <IonCol size="8">
                  <IonSearchbar
                    placeholder="Search"
                    searchIcon="location-outline"
                  ></IonSearchbar>
                </IonCol>
                <IonCol size="2">
                  <IonButton
                    color="light"
                    fill="clear"
                    href = "/prosearch"
                  >
                    <IonIcon icon={search} />
                  </IonButton>
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

        <Sidebar />

        </div>

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
                <Link to="/pro"  style={{
            textDecoration: "none",
          }} >
              <IonItem>
                  <IonLabel>
                Ascending Order
                </IonLabel>
                </IonItem>

              </Link>
              <IonItem>
                  <IonLabel>
                Descending Order
                </IonLabel>
                </IonItem>

              <Link to="/pro"  style={{
            textDecoration: "none",
          }} >
              <IonItem>
                  <IonLabel>
                Price: Low to High
                </IonLabel>
                </IonItem>
              </Link>


              <IonItem href="/prodesc">
                  <IonLabel>
                Price: High to Low
                </IonLabel>
                </IonItem>
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
            <div className="pronew-page">
            <IonRow>
            <IonCard>
                <IonCardContent>
                  <IonImg src="img/fruuit.jpg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>FProduct</IonCardTitle>
                      <IonCardSubtitle>Rs 400</IonCardSubtitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent>
                  <IonImg src="img/last.png"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>EProduct</IonCardTitle>
                      <IonCardSubtitle>Rs 350</IonCardSubtitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>

            </IonRow>

            <IonRow>


              <IonCard>
                <IonCardContent>
                  <IonImg src="img/healthFruit.jpeg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>DProduct</IonCardTitle>
                      <IonCardSubtitle>Rs 300</IonCardSubtitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>

              <IonCard>
                <IonCardContent>
                  <IonImg src="img/healthDrink.jpg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>CProduct</IonCardTitle>
                      <IonCardSubtitle>Rs 250</IonCardSubtitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonRow>

            <IonRow>

            <IonCard>
                <IonCardContent>
                  <IonImg src="img/pro2.jpg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>BProduct</IonCardTitle>
                      <IonCardSubtitle>Rs 200</IonCardSubtitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>

            <IonCard>
                <IonCardContent>
                  <IonImg src="img/pro1.jpeg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>Product</IonCardTitle>
                      <IonCardSubtitle>Rs 150</IonCardSubtitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>



            </IonRow>
          </div>
          </div>
        </IonContent>

    </div>
    </IonApp>
  );
};

export default Prodesc;
