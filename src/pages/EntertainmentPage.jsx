import React from "react";
import { LayoutWhite } from "../components/Layout";
import WillBeBackPage from './WillBeBackPage';

function EntertainmentPage(){
    return(
        <LayoutWhite>
            <WillBeBackPage
                pageContent='Entertainment'
            />
        </LayoutWhite>
    )
}

export default EntertainmentPage;