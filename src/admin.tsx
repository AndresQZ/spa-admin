import React from "react";

// @ts-ignore
import {
  auth$ as auth,
  sendData,
  sharedData$,
} from "@web-taxco/spa-shared-state";
import { useHistory } from "react-router-dom";

function Admin(props: any) {
  let history = useHistory();

  const handlerClick = (event: React.MouseEvent) => {
    sendData("This is amazing", `${props.name}`, "Angular APP");
    history.push("/shop");
  };

  return (
    <section>
      <button
        onClick={(event) => {
          handlerClick(event);
        }}
      >
        Click here to route to SHOP app{" "}
      </button>
    </section>
  );
}

export { Admin };
