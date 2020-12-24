import {IonIcon, IonImg} from "@ionic/react";
import {logIn} from "ionicons/icons";
import MainPurpleCircle from "../res/purple-circle.svg";
import React from "react";

const mainCircleStyle = {
    position: "relative",
    right: "18%",
    bottom: "35%",
    height: "110%",
    width: "115%",
};

export const topHeaderBubble = <div
    style={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "50%",
        marginBottom: "-80px",
        color: "#000000",
        position: "relative",
    }}
>
    <div
        style={{
            position: "absolute",
            top: "20%",
            color: "#FFFFFF",
            margin: "auto",
            width: "100%",
            zIndex: 100,
        }}
    >
        <IonIcon
            icon={logIn}
            style={{
                color: "#FFFFFF",
                zIndex: 100,
                height: "50px",
                width: "100%",
                margin: "auto",
            }}
        />
        <h5 style={{margin: "auto", width: "120px", textAlign: "center"}}>
            Log in to your account
        </h5>
    </div>

    <IonImg
        src={MainPurpleCircle}
        style={mainCircleStyle}
    />
</div>;