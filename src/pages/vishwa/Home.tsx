import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IonAvatar,
  IonLabel,
  IonButton,
  IonCard,
  IonCardContent,
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
import { menu } from "ionicons/icons";
import { menuController } from "@ionic/core";
import "../vishwa/Home.page.scss";
import "../vishwa/Homee.page.scss";
import "../vishwa/Offers.page.scss";
import "../vishwa/Homecolor.page.scss";
import Sidebar from "../vishwa/Sidebar";

const Maps = (props: any) => {
  const optioons = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  const handleclick = () => {
    menuController.open();
  };

  // check if the user has logged in
  useEffect(() => {
    if (!props.isLoggedIn) {
      props.history.push("/login");
    }
  }, [props.isLoggedIn]);

  return (
    <div className="home-color">
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
                <h2>Home</h2>
              </IonLabel>

              <IonRow className="ion-align-items-center">
                <IonCol size="10">
                  <IonSearchbar
                    placeholder="Search for service"
                    searchIcon="location-outline"
                  ></IonSearchbar>
                </IonCol>
                <IonCol size="2"></IonCol>
              </IonRow>
            </div>
          </IonItem>
        </IonHeader>
        <Sidebar />
      </div>

      <IonContent fullscreen={true}>
        <div className="homee-page">
          <IonGrid className="ion-no-padding">
            <IonRow>
              <IonCol size="12">
                <IonSlides options={optioons}>
                  <IonSlide>
                    <IonCard className="card">
                      <IonCardContent className="ion-text-left">
                        <div className="img-wrapper">
                          <IonImg src="img/banner.jpg"></IonImg>
                        </div>
                      </IonCardContent>
                    </IonCard>
                  </IonSlide>

                  <IonSlide>
                    <IonCard className="card">
                      <IonCardContent className="ion-text-left">
                        <div className="img-wrapper">
                          <IonImg src="img/offer1.png"></IonImg>
                        </div>
                      </IonCardContent>
                    </IonCard>
                  </IonSlide>
                </IonSlides>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div className="">
          <IonGrid className="">
            <IonRow className="ion-align-items-baseline">
              <IonCol size="6">
                <h4 className="title">Our Services</h4>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div className="home-page">
          <div className="ion-padding">
            <IonRow>
              <IonCard>
              <Link to="/prescriptions"  style={{
            textDecoration: "none",
          }} >
                <IonCardContent>
                  <div className="img-wrapper">
                    <IonImg src="img/pres.png"></IonImg>
                  </div>

                  <IonRow>

                    <IonCol size="">

                      <IonCardTitle>Upload</IonCardTitle>
                      <IonCardSubtitle>Prescription</IonCardSubtitle>

                    </IonCol>

                  </IonRow>
                </IonCardContent>
                </Link>
              </IonCard>

              <IonCard>
              <Link to="/maps"  style={{
            textDecoration: "none",
          }} >
                <IonCardContent>
                  <IonImg src="img/locationn.svg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>Location</IonCardTitle>
                      <IonCardSubtitle>Service</IonCardSubtitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
                </Link>
              </IonCard>
            </IonRow>

            <IonRow>
              <IonCard href="/category">
                <IonCardContent>
                  <IonImg src="img/pro4.jpg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>Products</IonCardTitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>

              <IonCard href="/offers">
                <IonCardContent>
                  <IonImg src="img/offerr.svg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>Offers</IonCardTitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonRow>

            <IonRow>
              <IonCard>
              <Link to="/message"  style={{
            textDecoration: "none",
          }} >
                <IonCardContent>
                  <IonImg src="img/chat.svg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>Chat</IonCardTitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
                </Link>
              </IonCard>

              <IonCard>
              <Link to="/profileEdit"  style={{
            textDecoration: "none",
          }} >
                <IonCardContent>
                  <IonImg src="img/profile.jpg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>Profile</IonCardTitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
                </Link>
              </IonCard>
            </IonRow>
          </div>
        </div>
      </IonContent>
    </div>
  );
};

export default Maps;
