import React from "react";
import { ToggleTheme, ToggleVisibility } from '../demoComponents/ToggleTheme'

function Banner(props){
    const { title, image, imgDescription} = props;

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
   
        border: '1px solid gray',
        width: '100%',
        height: '600px',
        // backgroundColor: 'blue',

    }

    return(
        <div style={ style }>
            <ToggleTheme/>
            <ToggleVisibility/>
         
         
            <img src={image} alt={imgDescription} />
            <p>{title}</p>
        </div>
    )
}

export { Banner };