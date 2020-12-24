import React, {useState} from 'react';
import { IonAvatar, IonModal,IonLabel, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon,  IonItem, IonRow, IonSearchbar, IonSlide, IonSlides } from '@ionic/react';
import { search, arrowBackOutline } from 'ionicons/icons';
import "../vishwa/Offers.page.scss";
import { Link } from "react-router-dom";



const Allcat: React.FC = () => {


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

    <IonButton fill="clear" color="light" href="/category">
     <IonIcon icon={arrowBackOutline} />
    </IonButton>

  </IonItem>
  <IonItem lines="none">
    <div className="ion-padding-start ion-padding-bottom">
      <IonLabel>
        <h2>Categories</h2>
      </IonLabel>

      <IonRow className="ion-align-items-center">
        <IonCol size="10">
          <IonSearchbar placeholder="Search for category" searchIcon="location-outline"></IonSearchbar>
        </IonCol>
        <IonCol size="2">
        <Link to="/ayu">
          <IonButton color="light" fill="clear" href="/ayu">
          <IonIcon icon={search} />
          </IonButton>
          </Link>
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
  }}>Filter Offers  By</h2></div>

<div style={{
    marginTop: "1px",
    textAlign: "center",
    fontSize: "20px",
  }}>
    <IonButton color= "secondary" href="/offers">Reset offers</IonButton>

  </div>
      <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
    </IonModal>


  <div className="ion-padding-horizontal wrapper">

    <IonGrid className="ion-no-padding">
      <IonRow className="ion-align-items-baseline">
        <IonCol size="6">
          <h4 className="title">
            All categories
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

              <IonCard className="category" color="danger" href="/products">
              <Link to="/pro"  style={{
            textDecoration: "none",
            color: '#FFF'
          }} >
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/ayurvedic.svg"></IonIcon>
                  <IonCardTitle>Ayurvedic</IonCardTitle>
                  <IonCardSubtitle>Category</IonCardSubtitle>
                </IonCardHeader>
                </Link>
              </IonCard>

            </IonSlide>

            <IonSlide>
              <IonCard className="category" color="primary" href="/pro">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/skin-care.svg"></IonIcon>
                  <IonCardTitle>Skin</IonCardTitle>
                  <IonCardSubtitle>Care</IonCardSubtitle>
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
              <IonCard className="category" color="success" href="/pro">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/supplement.svg"></IonIcon>
                  <IonCardTitle>Vitamins</IonCardTitle>
                  <IonCardSubtitle>Supplements</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>


            <IonSlide>
              <IonCard className="category" color="warning" href="/pro">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/diabetes.svg"></IonIcon>
                  <IonCardTitle>Diabetes</IonCardTitle>
                  <IonCardSubtitle>Care</IonCardSubtitle>
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

export default Allcat;