import React from 'react';
import { IonContent, IonApp, IonMenu } from '@ionic/react';
import "../vishwa/Productsnew.page.scss";



const Maps: React.FC = () => {

    return (

        <IonApp>
            <IonMenu menuId="main-menu" contentId="main">
                <IonContent>
                    <h1>Main</h1>
                </IonContent>
            </IonMenu>
        </IonApp>
     );
}

export default Maps;