import React from "react";
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";
import { Button } from 'antd';

function BtnContactAbout(){
    return(
      <div className="button-1">
      <Link to="/contact">
        <Button
          type="primary"
          size="large"
          style={{
            position: "relative",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#333333",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "2px",
            borderColor: "black",
            paddingRight: "1rem",
            zIndex:"10",
            marginRight:"1rem"
          }}
          block
        >
          Contact
        </Button>
      </Link>
    </div>

           
    );
}

export default BtnContactAbout;