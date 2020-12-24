import React, { useState } from "react";
import {
  IonAvatar,
  IonModal,
  IonLabel,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonRow,
  IonSearchbar,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import {
  menu,
  options,
} from "ionicons/icons";
import { menuController } from "@ionic/core";
import "../vishwa/Offers.page.scss";
import "../vishwa/modell.page.scss";
import { Link } from "react-router-dom";
import Sidebar from "../vishwa/Sidebar";

const Offer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const handleclick = () => {
    menuController.open();
  };



  const optioons = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  const categories = {
    slidesPerView: 2.5,
  };

  return (
    <div className="offer-page">
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
              <h2>Offers</h2>
            </IonLabel>

            <IonRow className="ion-align-items-center">
              <IonCol size="10">
                <IonSearchbar
                  placeholder="Search for offers"
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

      <Sidebar />

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
              Filter Offers
            </h2>
          </div>

          <div
            style={{

            }}
          >
              <Link to="/limitedoffers"  style={{
            textDecoration: "none",
          }} >
            <IonItem>
          <IonLabel>
            Limited Offers
          </IonLabel>
        </IonItem>
        </Link>
        <IonItem href="/productoffers">
          <IonLabel>
           Product Offers
          </IonLabel>
        </IonItem>

          </div>
          <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
        </IonModal>

        <div className="ion-padding wrapper">
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-align-items-baseline">
              <IonCol size="6">
                <h4 className="title">Popular Offers</h4>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <IonSlides options={optioons}>
                <IonSlide>
                  <IonCard className="card">
                    <IonCardContent className="ion-text-left">
                      <div className="img-wrapper">
                        <IonImg src="img/offer.jpeg"></IonImg>
                      </div>

                      <IonCardTitle className="title">
                        Awesome Offer
                      </IonCardTitle>
                      <IonCardSubtitle>Some description here</IonCardSubtitle>
                      <IonCardSubtitle>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star-outline"></IonIcon>
                      </IonCardSubtitle>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard className="card">
                    <IonCardContent className="ion-text-left">
                      <div className="img-wrapper">
                        <IonImg src="img/offer1.png"></IonImg>
                      </div>

                      <IonCardTitle className="title">
                        Awesome offer 2
                      </IonCardTitle>
                      <IonCardSubtitle>Some description here</IonCardSubtitle>
                      <IonCardSubtitle>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star"></IonIcon>
                        <IonIcon name="star-half"></IonIcon>
                      </IonCardSubtitle>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>
              </IonSlides>
            </IonCol>
          </IonRow>
        </IonGrid>

        <div className="ion-padding-horizontal wrapper">
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-align-items-baseline">
              <IonCol size="6">
                <h4 className="title">Limited Offers</h4>
              </IonCol>
              <IonCol size="6">
                <h4 className="more ion-text-end">View All</h4>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <IonSlides options={categories}>
                <IonSlide>
                  <IonCard className="category" color="danger" href="/category">
                    <IonCardHeader className="ion-text-center">
                      <IonIcon src="img/man.svg"></IonIcon>
                      <IonCardTitle>Senior Discount</IonCardTitle>
                      <IonCardSubtitle>Something here</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard className="category" color="primary">
                    <IonCardHeader className="ion-text-center">
                      <IonIcon src="img/free.svg"></IonIcon>
                      <IonCardTitle>Buy 2 One free</IonCardTitle>
                      <IonCardSubtitle>Ends 20th Sept</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard className="category" color="success">
                    <IonCardHeader className="ion-text-center">
                      <IonIcon src="img/discount.svg"></IonIcon>
                      <IonCardTitle>20% discount</IonCardTitle>
                      <IonCardSubtitle>Ends 1st Oct</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard className="category" color="tertiary">
                    <IonCardHeader className="ion-text-center">
                      <IonIcon src="img/discount.svg"></IonIcon>
                      <IonCardTitle>30% discount</IonCardTitle>
                      <IonCardSubtitle>Ends 5th Oct</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonSlide>
              </IonSlides>
            </IonCol>
          </IonRow>
        </IonGrid>

        <div className="ion-padding-horizontal wrapper">
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-align-items-baseline">
              <IonCol size="6">
                <h4 className="title">Product Offers</h4>
              </IonCol>
              <IonCol size="6">
                <h4 className="more ion-text-end">View All</h4>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <IonGrid class="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <IonSlides options={optioons}>
                <IonSlide>
                  <IonCard className="card">
                    <IonCardContent className="ion-text-left">
                      <div className="img-wrapper">
                        <IonImg src="img/ayuu.jpg"></IonImg>
                      </div>

                      <IonCardTitle className="title">
                        Ayurveda 20% Discount
                      </IonCardTitle>
                      <IonCardSubtitle>Ends 10th Oct</IonCardSubtitle>
                      <IonCardSubtitle>
                      </IonCardSubtitle>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard className="card">
                    <IonCardContent className="ion-text-left">
                      <div className="img-wrapper">
                        <IonImg src="img/ayu2.jpg"></IonImg>
                      </div>

                      <IonCardTitle className="title">
                        Ayurveda 50% Discount
                      </IonCardTitle>
                      <IonCardSubtitle>Ends 20th Oct</IonCardSubtitle>
                      <IonCardSubtitle></IonCardSubtitle>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>
              </IonSlides>
            </IonCol>
          </IonRow>
        </IonGrid>

        <br />


        <IonGrid class="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <IonSlides options={optioons}>
                <IonSlide>
                  <IonCard className="card">
                    <IonCardContent className="ion-text-left">
                      <div className="img-wrapper">
                        <IonImg src="img/fruit.jpg"></IonImg>
                      </div>

                      <IonCardTitle className="title">
                        Fruits 20% Discount
                      </IonCardTitle>
                      <IonCardSubtitle>Ends 25th Oct</IonCardSubtitle>
                      <IonCardSubtitle>
                      </IonCardSubtitle>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard className="card">
                    <IonCardContent className="ion-text-left">
                      <div className="img-wrapper">
                        <IonImg src="img/health.jpg"></IonImg>
                      </div>

                      <IonCardTitle className="title">
                        Health Drink 40% Discount
                      </IonCardTitle>
                      <IonCardSubtitle>Ends 30th Oct</IonCardSubtitle>
                      <IonCardSubtitle></IonCardSubtitle>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>
              </IonSlides>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </div>
  );
};

export default Offer;
