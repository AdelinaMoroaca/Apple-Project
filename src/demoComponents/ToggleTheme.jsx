import React, { useState } from "react";
import './ToggleTheme.css'

function ToggleTheme(){
    const [theme, setTheme] = useState('light');

    const handleToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return(
        <div style = {{
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center'}} 
            
            className= {theme === 'light' ? 'light-theme' : 'dark-theme'}>
            
            <button onClick={handleToggleTheme}>Toggle {theme} theme</button>
            <p>The current theme is {theme}</p>
        </div>
    )
}

function ToggleVisibility(){
    const [isVisible, setIsVisible] = useState(false);

    // function handleClick(){
    //     if (isVisible) setIsVisible(false);
    //     else setIsVisible(true);
    // }

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide Details' : 'Show Details'}
            </button>

            {isVisible && <p>Now you see me!</p>}
        </div>
    );
}


export { ToggleTheme, ToggleVisibility};