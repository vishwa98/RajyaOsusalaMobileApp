import React from "react";
import MainPurpleCircle from "../res/purple-circle.svg";
import SideMiddleCircle from "../res/side-middle-ciricle.svg";
import BottomRightCircle from "../res/bottom-right-circle.svg";

import {logIn, person} from "ionicons/icons";
import {Link} from "react-router-dom";

import {IonIcon, IonImg} from "@ionic/react";

const PURPLE_COLOR = "#316DD0";

export default function ForgotPassword(props: any) {
    const onSubmitForm = async (e: any) => {
        e.preventDefault();
        await props.setLoggedInStatus(true);
        props.history.push("/");
    };

    return (
        <div
            style={{
                backgroundColor: "#FFFFFF",
                height: "100%",
                width: "100%",
                color: "#000000",
            }}
        >
            <div
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
                        top: "100px",
                        color: "#FFFFFF",
                        margin: "auto",
                        width: "100%",
                        zIndex: 100,
                    }}
                >
                    <IonIcon icon={logIn} style={styles.mainBubbleIconText}/>
                    <h5 style={{margin: "auto", width: "120px", textAlign: "center"}}>
                        Forgot Password
                    </h5>
                </div>

                <IonImg src={MainPurpleCircle} style={styles.topLeftBubble}/>
            </div>

            <form
                action="/login"
                method="post"
                onSubmit={onSubmitForm}
                style={{
                    width: "90%",
                    display: "flex",
                    margin: "auto",
                    position: "relative",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <br/>

                <div>
                    <IonIcon
                        icon={person}
                        style={{
                            color: "#000000",
                            zIndex: 100,
                            height: "20px",
                            width: "20px",
                            top: "23px",
                            left: "6px",
                            position: "absolute",
                        }}
                    />
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username or email"
                        style={{
                            borderWidth: "1px",
                            borderRadius: "20px",
                            margin: "auto",
                            width: "100%",
                            fontSize: "25px",
                            paddingLeft: "35px",
                        }}
                    />
                </div>
                <br/>
                <br/>
                <input
                    type="submit"
                    value="Recover Password"
                    style={styles.buttonStyle}
                />
                <br/>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        textAlign: "center",
                        fontSize: "20px",
                    }}
                >
                    <Link to="/login">Login</Link>
                    <br/>
                    <Link to="/register">Create an account</Link>
                </div>
            </form>

            <div
                style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    height: "50%",
                    marginBottom: "-80px",
                    color: "#000000",
                    position: "relative",
                }}
            >
                <IonImg src={SideMiddleCircle} style={styles.rightMiddleBubble}/>
            </div>

            <div
                style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    height: "50%",
                    marginBottom: "-80px",
                    color: "#000000",
                    position: "relative",
                }}
            >
                <IonImg src={BottomRightCircle} style={styles.rightBottomBubble}/>
            </div>
        </div>
    );
}

const styles = {
    buttonStyle: {
        color: "#FFFFFF",
        backgroundColor: PURPLE_COLOR,
        padding: "2%",
        borderBlockColor: PURPLE_COLOR,
        borderWidth: "1px",
        borderRadius: "20px",
        margin: "auto",
        width: "200px",
    },
    mainBubbleIconTextWrapper: {
        position: "absolute",
        top: "100px",
        color: "#FFFFFF",
        margin: "auto",
        width: "100%",
        zIndex: 100,
    },
    mainBubbleIconText: {
        color: "#FFFFFF",
        zIndex: 100,
        height: "50px",
        width: "100%",
        margin: "auto",
    },
    topLeftBubble: {
        position: "relative",
        right: "18%",
        bottom: "35%",
        height: "110%",
        width: "115%",
    },
    rightMiddleBubble: {
        position: "relative",
        right: "-65%",
        bottom: "50%",
        height: "55%",
        width: "100%",
    },
    rightBottomBubble: {
        position: "relative",
        right: "-50%",
        bottom: "50%",
        height: "55%",
        width: "100%",
    },
};
