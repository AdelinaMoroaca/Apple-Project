import React from "react";
import { LayoutWhite } from "../components/Layout";
import WillBeBackPage from './WillBeBackPage';

function WatchPage(){
    return(
        <LayoutWhite>
            <WillBeBackPage
                pageContent='Apple Watch'
            />
        </LayoutWhite>
    )
}

export default WatchPage;