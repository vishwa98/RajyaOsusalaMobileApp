import React, { useState } from "react";
import {
  IonAvatar,
  IonLabel,
  IonButton,
  IonCol,
  IonHeader,
  IonIcon,
  IonItem,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import { menu } from "ionicons/icons";
import { menuController } from "@ionic/core";
import "../Pages/Maps.page.scss";
import Sidebar from "../../vishwa/Sidebar";

const Maps: React.FC = () => {
  const [searchKeyWords, setSearchKeyWords] = useState<string>(
    "Pharmacy+Colombo+Sri+Lanka"
  );
  const [searchText, setSearchText] = useState<string>("");
  const onUpdateInput = (e: any) => {
    setSearchText(e.detail.value!);
  };
  const onSubmitSearchRequest = (e: any) => {
    e.preventDefault();
    const text = searchText.replace(" ", "+") + "+Pharmacy";
    setSearchKeyWords(text);
  };
  const handleclick = () => {
    menuController.open();
  };
  return (
    <div
      className="map-page"
      style={{ width: "100%", backgroundColor: "#FFFFFF" }}
    >
      <IonHeader className="ion-no-border">
        <IonItem lines="none">
          <IonAvatar slot="end">
            <img src="img/profile.jpg" alt="User" />
          </IonAvatar>
          <IonButton fill="clear" color="light" onClick={() => handleclick()}>
            <IonIcon icon={menu} />
          </IonButton>
        </IonItem>
        <IonItem lines="none" style={{ width: "100%" }}>
          <div
            className="ion-padding-start ion-padding-bottom"
            style={{ width: "100%" }}
          >
            <IonLabel>
              <h2>Maps</h2>
            </IonLabel>

            <IonRow className="ion-align-items-center">
              <IonCol size="10">
                <form onSubmit={onSubmitSearchRequest}>
                  <IonSearchbar
                    style={{ width: "100%" }}
                    placeholder="Search for location"
                    searchIcon="location-outline"
                    value={searchText}
                    onIonChange={onUpdateInput}
                  ></IonSearchbar>
                </form>
              </IonCol>
              <IonCol size="2"></IonCol>
            </IonRow>
          </div>
        </IonItem>
      </IonHeader>

      <Sidebar />

      <br />
      <iframe
        title="Map"
        style={{ border: 0, width: 600, height: 450 }}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAtZLIswLhYgUCEo7Nu-ux1u95DAboKITU&q=${searchKeyWords}`}
      ></iframe>
      <br />
    </div>
  );
};

export default Maps;
