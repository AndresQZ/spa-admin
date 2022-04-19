import React from "react";
// @ts-ignore
import { sharedData$ } from "@web-taxco/spa-shared-state";
import { BrowserRouter, BrowserRouter as Route } from "react-router-dom";
import { Admin } from "./admin";

export default function Root(props) {
  React.useEffect(() => {
    const sharedDataSubcription = sharedData$.subscribe((data) => {
       console.log("inside sharedDataSubcription , spa-admin", data);
    });

    return () => {
      sharedDataSubcription.unsubscribe();
    };
  }, [props]);

  return (
    <BrowserRouter>
      --------- This is REACT APP ----------------------
      <Route path="/admin">
        <Admin props={props} />
      </Route>
      -------------------------------------------------------
    </BrowserRouter>
  );
}
