import React, { FormEvent, useState } from "react";
import SideMiddleCircle from "../res/side-middle-ciricle.svg";
import BottomRightCircle from "../res/bottom-right-circle.svg";

import { lockOpen, person } from "ionicons/icons";
import { Link } from "react-router-dom";

import { IonIcon, IonImg } from "@ionic/react";
import { topHeaderBubble } from "../components/LoginPageTopBubble";

const PURPLE_COLOR = "#316DD0";

export default function LoginPage(props: any) {
  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitForm = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (username.length === 0) {
      setUsernameError("Username cannot be empty!");
      return;
    }
    if (password.length === 0) {
      setPasswordError("Password cannot be empty!");
      return;
    }
    console.log("Logged In!", props);
    await props.setLoggedInStatus(true);
    props.history.push("/");
  };

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
    if (e.target.value.length > 0) {
      setUsernameError("");
    }
  };
  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
    if (e.target.value.length > 0) {
      setPasswordError("");
    }
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
      {topHeaderBubble}

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
          zIndex: 2,
        }}
      >
        <br />

        <div style={{ position: "relative" }}>
          <IonIcon
            icon={person}
            style={{
              color: "#000000",
              zIndex: 100,
              height: "20px",
              width: "20px",
              left: "2%",
              top: "15%",
              position: "absolute",
            }}
          />
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={onUsernameChange}
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
          {usernameError.length > 0 && (
            <span style={styles.errorStyle}>{usernameError}</span>
          )}
        </div>
        <br />
        <div style={{ position: "relative" }}>
          <IonIcon
            icon={lockOpen}
            slot="start"
            style={{
              color: "#000000",
              zIndex: 100,
              height: "20px",
              width: "20px",
              left: "2%",
              top: "15%",
              position: "absolute",
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
            style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}
          />

          {passwordError.length > 0 && (
            <span style={styles.errorStyle}>{passwordError}</span>
          )}
        </div>

        <br />
        <input
          type="submit"
          value="Login"
          style={{
            color: "#FFFFFF",
            backgroundColor: PURPLE_COLOR,
            padding: "2%",
            borderBlockColor: PURPLE_COLOR,
            borderWidth: "1px",
            borderRadius: "20px",
            margin: "auto",
            width: "100px",
          }}
        />
        <br />
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
          <Link to="/forgot">Forgot Password?</Link>
          <br />
          <Link to="/register">Create an account</Link>
        </div>
      </form>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "50%",
          marginBottom: "-10%",
          color: "#000000",
          position: "relative",
        }}
      >
        <IonImg
          src={SideMiddleCircle}
          style={{
            position: "relative",
            right: "-65%",
            bottom: "50%",
            height: "55%",
            width: "100%",
          }}
        />
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "50%",
          marginBottom: "-10%",
          color: "#000000",
          position: "relative",
          zIndex: 1,
        }}
      >
        <IonImg
          src={BottomRightCircle}
          style={{
            position: "relative",
            right: "-50%",
            bottom: "65%",
            height: "55%",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  errorStyle: {
    color: "#E91111",
  },
};
