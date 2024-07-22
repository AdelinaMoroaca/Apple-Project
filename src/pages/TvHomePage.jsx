import React from "react";
import { LayoutWhite } from "../components/Layout";
import WillBeBackPage from './WillBeBackPage';

function TvHomePage(){
    return(
        <LayoutWhite>
            <WillBeBackPage
                pageContent='TV & Home'
            />
        </LayoutWhite>
    )
}

export default TvHomePage;