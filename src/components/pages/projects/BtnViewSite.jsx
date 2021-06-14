import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';


function BtnViewSite(){
    return(
            <Button
          type="primary"
          size="large"
          style={{
            position: "relative",
            // top:"-10rem",
            left:"550px",
            width: "350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom:"2rem",
            padding: " 5px 16px",
            background: "#241637",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "2px",
            borderColor: "black",
          }}
          block
        >
          View Site
        </Button>
    );
}

export default BtnViewSite;