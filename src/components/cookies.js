import React from "react";
import CookieConsent from "react-cookie-consent";

const Cookies = () => {
  return (
    <CookieConsent
      style={{
        background: "#1e1c19",
        fontFamily: "Source Sans Pro",
        fontSize: "18px",
        fontWeight: "400",
        padding: "15px",
      }}
      buttonStyle={{
        background: "#dba63c",
        color: "#1e1c19",
        fontFamily: "Source Sans Pro",
        fontSize: "16px",
        fontWeight: "600",
        borderRadius: "12px",
        padding: "10px 30px",
      }}
      contentStyle={{ flex: "1 0 200px" }}
      buttonText="Ho capito"
    >
      Questo sito potrebbe fare uso di cookies per migliorare l'esperienza
      d'uso.
    </CookieConsent>
  );
};

export default Cookies;
