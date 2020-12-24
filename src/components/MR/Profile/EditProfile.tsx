import {
    IonButton,
    IonCol,
    IonGrid,
    IonLabel,
    IonPage,
    IonRow,
    IonRadio,
    IonItem,
  } from "@ionic/react";
import React from "react";
import "./EditProfile.css"
export interface EditProfile {}
const isBackgroundRed = true;

  const EditProfile: React.FC = () => {
    return (
      <IonPage >
          <IonGrid fixed className={isBackgroundRed ? 'background-blue' : 'background-white'}>

                <IonRow className={'background-white'}>
                  <IonCol size='5'>
                    <IonLabel>Title</IonLabel>
                  </IonCol>
                  <IonCol size='6'>
                    <input type='text' placeholder='Title'></input>
                  </IonCol>
                </IonRow>
                <br></br>
                <IonRow className={'background-white'}>
                  <IonCol size='5' >
                    <IonLabel>Name</IonLabel>
                  </IonCol>
                  <IonCol size='6'>
                    <input type='text' placeholder='Name'></input>
                  </IonCol>
                </IonRow>
                <br></br>
                <IonRow className={'background-white'}>
                  <IonCol size='5' >
                    <IonLabel>NIC</IonLabel>
                  </IonCol>
                  <IonCol size='6'>
                    <input type='text' placeholder='NIC'></input>
                  </IonCol>
                </IonRow>
                <br></br>
                <IonRow className={'background-white'}>
                  <IonCol size='5' >
                    <IonLabel>Birthday</IonLabel>
                  </IonCol>
                  <IonCol size='6'>
                    <input type='text' placeholder='Birthday'></input>
                  </IonCol>
                </IonRow>
                <br></br>
                <IonRow className={'background-white'}>
                  <IonCol size='5' >
                    <IonLabel>Mobile</IonLabel>
                  </IonCol>
                  <IonCol size='6'>
                    <input type='text' placeholder='Mobile No'></input>
                  </IonCol>
                </IonRow>
                <br></br>
                <IonRow className={'background-white'}>
                  <IonCol size='5' >
                    <IonLabel>Telephone<br/>(Home)</IonLabel>
                  </IonCol>
                  <IonCol size='6'>
                    <input type='text' placeholder='Home'></input>
                  </IonCol>
                </IonRow>
                <br></br>
                <IonRow className={'background-white'}>
                  <IonCol size='5' >
                    <IonLabel>Telephone<br/>(Office)</IonLabel>
                  </IonCol>
                  <IonCol size='6'>
                    <input type='text' placeholder='Office'></input>
                  </IonCol>
                </IonRow>
                <br></br>
                <IonRow radio-group='gender' className={'background-white'}>
                  <IonCol size='5'>
                      Gender
                  </IonCol>
                  <IonCol size='2'>
                    <IonItem>
                    <IonLabel> Male </IonLabel>
                    <IonRadio name='gender' value="Male"/>
                    </IonItem>
                  </IonCol>
                  <IonCol size='2'>
                    <IonItem>
                    <IonLabel> Female </IonLabel>
                    <IonRadio name='gender' value="Female"/>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <br/>
                <IonRow radio-group='status' className={'background-white'}>
                  <IonCol size='5'>
                    <IonItem>
                      Marital Status
                    </IonItem>
                  </IonCol>
                  <IonCol size='2'>
                    <IonItem>
                    <IonLabel> Single </IonLabel>
                    <IonRadio name='status' value="Single"/>
                    </IonItem>
                  </IonCol>
                  <IonCol size='2'>
                    <IonItem>
                    <IonLabel> Married </IonLabel>
                    <IonRadio name='status' value="Married"/>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <br></br>
                <IonRow className={'background-white'}>
                  <IonCol size='5' >
                    <IonLabel>SPC Location</IonLabel>
                  </IonCol>
                  <IonCol size='6'>
                    <input type='text' placeholder='Location'></input>
                  </IonCol>
                </IonRow>
                <br></br>
                <IonRow className={'background-white'}>
                  <IonCol size='5' >
                    <IonLabel>Address</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonItem>
                      <input type='text' placeholder='No'></input>
                    </IonItem>
                    <IonItem>
                      <input type='text' placeholder='Street'></input>
                    </IonItem>
                    <IonItem>
                      <input type='text' placeholder='Area'></input>
                    </IonItem>
                    <IonItem>
                      <input type='text' placeholder='City'></input>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <br></br>
                <IonRow className={'background-white'}>
                  <IonCol size='5' >
                    <IonLabel>Fax</IonLabel>
                  </IonCol>
                  <IonCol size='6'>
                    <input type='text' placeholder='Fax'></input>
                  </IonCol>
                </IonRow>
                <br></br>
                <IonRow className={'background-white'}>
                  <IonCol size='5' >
                    <IonLabel>Email</IonLabel>
                  </IonCol>
                  <IonCol size='6'>
                    <input type='text' placeholder='Email'></input>
                  </IonCol>
                </IonRow>
                <br/>
                <IonRow className={'background-white'}>
                  <IonCol size=''>
                    <IonButton>Remove</IonButton>
                  </IonCol>
                </IonRow>


          </IonGrid>
      </IonPage>
    );
  };

export default EditProfile;
