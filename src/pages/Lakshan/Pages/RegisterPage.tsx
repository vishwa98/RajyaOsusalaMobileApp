import React, { useState } from "react";
import MainPurpleCircle from "../res/purple-circle.svg";
import SideMiddleCircle from "../res/side-middle-ciricle.svg";
import BottomRightCircle from "../res/bottom-right-circle.svg";

import { person, logIn, lockOpen, mail } from "ionicons/icons";
import { Link } from "react-router-dom";

import { IonImg, IonIcon, IonCheckbox } from "@ionic/react";

const PURPLE_COLOR = "#316DD0";

export default function RegisterPage(props: any) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onCheck = (e: any) => {
    setIsChecked(e.target.value);
  };

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
          marginBottom: "-10%",
          color: "#000000",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "25%",
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
          <h5 style={{ margin: "auto", width: "130px", textAlign: "center" }}>
            Register an account with us!
          </h5>
        </div>

        <IonImg
          src={MainPurpleCircle}
          style={{
            position: "relative",
            left: "5%",
            bottom: "25%",
            height: "110%",
            width: "115%",
          }}
        />
      </div>

      <form
        action="/register"
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
        <br />

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
            name="name"
            id="name"
            placeholder="Name"
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
        <br />
        <div style={{ position: "relative" }}>
          <IonIcon
            icon={mail}
            slot="start"
            style={{
              color: "#000000",
              zIndex: 100,
              height: "20px",
              width: "20px",
              top: "6px",
              left: "6px",
              position: "absolute",
            }}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
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
              top: "6px",
              left: "6px",
              position: "absolute",
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
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
              top: "6px",
              left: "6px",
              position: "absolute",
            }}
          />
          <input
            type="password"
            name="retype-password"
            id="retype-password"
            placeholder="Retype Password"
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

        <br />

        <label>
          <IonCheckbox
            checked={isChecked}
            onChange={onCheck}
            style={{ marginRight: "10px" }}
          />
          Use my current location as my address
        </label>

        <br />
        <input
          type="submit"
          value="Register"
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
          <Link to="/login">Already have an account?</Link>
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
        <IonImg
          src={SideMiddleCircle}
          style={{
            position: "relative",
            left: "-65%",
            bottom: "45%",
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
          color: "#000000",
          position: "relative",
        }}
      >
        <IonImg
          src={BottomRightCircle}
          style={{
            position: "relative",
            right: "-40%",
            bottom: "80%",
            height: "55%",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}
