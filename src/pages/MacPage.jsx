import React from "react";
// import { useState, useEffect } from "react";
import { LayoutBlack, LayoutWhite } from '../components/Layout'
import LoginForm from "../components/componentsDemo/forms/FrmLogin";


function Macpage(){
    return(
       
        <LayoutWhite>
            <h2>MAC</h2>
            <p>Pagina de prezentare</p>
            <LoginForm/>
        </LayoutWhite>
    
    )
}

export default Macpage;