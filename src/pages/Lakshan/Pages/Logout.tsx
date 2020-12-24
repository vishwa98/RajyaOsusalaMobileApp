import React, { useEffect } from "react";

export default function Logout(props: any) {
  useEffect(() => {
    props.setLoggedInStatus(false);

    setTimeout(() => {
      props.history.push("/login");
    }, 500);

    return () => {};
  }, [props]);
  return <h1>Loggin Out!</h1>;
}
