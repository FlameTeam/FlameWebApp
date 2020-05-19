import React from "react";

import { headerStyle, textStyle } from "../styles/subcomponents/logoStyle";

export default function Logo() {
  return (
    <React.Fragment>
      <h2 style={headerStyle}>Flame Logo</h2>
      <p style={textStyle}>Development team made up of friends.</p>
    </React.Fragment>
  );
}
