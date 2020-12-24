import React, {useState} from 'react';
import { IonAvatar, IonModal, IonLabel, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonRow, IonSearchbar, IonSlide, IonSlides } from '@ionic/react';
import { options, arrowBackOutline, search } from 'ionicons/icons';
import "../vishwa/Offers.page.scss";
import { Link } from "react-router-dom";



const Discountend: React.FC = () => {

    const [showModal, setShowModal] = useState(false);


    const categories = {
        slidesPerView: 2,
      }

    return (

        <div className="offer-page">
 <IonHeader className="ion-no-border">
  <IonItem lines="none">
    <IonAvatar slot="end">
      <img src="img/profile.jpg" />
    </IonAvatar>
    <IonButton fill="clear" color="light" href="/offers">
     <IonIcon icon={arrowBackOutline} />
    </IonButton>
  </IonItem>
  <IonItem lines="none">
    <div className="ion-padding-start ion-padding-bottom">
      <IonLabel>
        <h2>Offers</h2>
      </IonLabel>

      <IonRow className="ion-align-items-center">
        <IonCol size="8">
          <IonSearchbar placeholder="Search" searchIcon="location-outline"></IonSearchbar>
        </IonCol>
        <IonCol size="2">
        <Link to="/offersearch"  style={{
            textDecoration: "none",
          }} >
          <IonButton color="light" fill="clear">
          <IonIcon icon={search} />
          </IonButton>
          </Link>
        </IonCol>
        <IonCol size="2">
          <IonButton color="light" fill="clear" onClick={() => setShowModal(true)}>
          <IonIcon icon={options} />
          </IonButton>
        </IonCol>
      </IonRow>

    </div>
  </IonItem>
</IonHeader>

        <IonContent fullscreen={true}>


        <IonModal isOpen={showModal} cssClass='my-modal'>


<div style={{

    top: "1px",
    color: "white",

    backgroundColor: "#316dd0",
    width: "100%",

  }}><h2 style={{
      marginLeft: "20px"
  }}>Filter Offers</h2></div>

<div style={{
    marginTop: "1px",
    textAlign: "center",
    fontSize: "20px",
  }}>
    <Link to="/dise"  style={{
            textDecoration: "none",
          }} >
          <IonItem>
          <IonLabel>
          Discount End Date
          </IonLabel>
        </IonItem>
        </Link>

        <Link to="/dis"  style={{
            textDecoration: "none",
          }} >
          <IonItem>
          <IonLabel>
          Discount
          </IonLabel>
        </IonItem>
        </Link>
  </div>
      <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
    </IonModal>


  <div className="ion-padding-horizontal wrapper">

    <IonGrid className="ion-no-padding">
      <IonRow className="ion-align-items-baseline">
        <IonCol size="6">
          <h4 className="title">
            Limited Offers
          </h4>
        </IonCol>
        <IonCol size="6">
      </IonCol>
      </IonRow>
    </IonGrid>

    </div>

    <IonGrid className="ion-no-padding">
      <IonRow>
        <IonCol size="12">
          <IonSlides options={categories}>

          <IonSlide>
              <IonCard className="category" color="primary">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/free.svg"></IonIcon>
                  <IonCardTitle>Buy 2 Get 1 Free</IonCardTitle>
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




          </IonSlides>
        </IonCol>
      </IonRow>
    </IonGrid>


    <IonGrid className="ion-no-padding">
      <IonRow>
        <IonCol size="12">
          <IonSlides options={categories}>



          <IonSlide>
              <IonCard className="category" color="tertiary">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/discount.svg"></IonIcon>
                  <IonCardTitle>30% discount</IonCardTitle>
                  <IonCardSubtitle>Ends 5th Oct</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard className="category" color="danger" href="/category">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/man.svg"></IonIcon>
                  <IonCardTitle>Senior Discount</IonCardTitle>
                  <IonCardSubtitle>Ends 1st Nov</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>




          </IonSlides>
        </IonCol>
      </IonRow>
    </IonGrid>


  </IonContent>

  </div>

     );
}

export default Discountend;