import React from 'react';
import './NavBar.css'

function NavBar({homePageLink, storePageLink, macPageLink, iPadPageLink, iPhonePageLink, watchPageLink, visionPageLink, airpodsPageLink, tvHomePageLink, entertainmentPageLink, accessoriesPageLink, supportPageLink, searchIcon, bagIcon}){
    console.log(homePageLink, storePageLink, macPageLink, iPadPageLink)

    return(
        <nav className='nav'>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <a href = {homePageLink} className='nav-link'>
                        -Sigla-
                    </a>
                </li>

                <li className='nav-item'>
                    <a href= {storePageLink} className='nav-link'>
                        Store
                    </a>
                </li>

                <li className='nav-item'>
                    <a href = {macPageLink} className='nav-link'>
                        Mac
                    </a>
                </li>

                <li className='nav-item'>
                    <a href = {iPadPageLink} className='nav-link'>
                        iPad
                    </a>
                </li>

                <li className='nav-item'>
                    <a href = {iPhonePageLink}  className='nav-link'>
                        iPhone
                    </a>
                </li>

                <li className='nav-item'>
                    <a href = {watchPageLink}  className='nav-link'>
                        Watch
                    </a>
                </li>

                <li className='nav-item'>
                    <a href = {visionPageLink}  className='nav-link'>
                        Vision
                    </a>
                </li>

                <li className='nav-item'>
                    <a href = {airpodsPageLink}  className='nav-link'>
                        AirPods
                    </a>
                </li>

                <li className='nav-item'>
                    <a href = {tvHomePageLink}  className='nav-link'>
                        TV & Home
                    </a>
                </li>

                <li className='nav-item'>
                    <a href = {entertainmentPageLink}  className='nav-link'>
                        Entertainment
                    </a>
                </li>

                <li className='nav-item'>
                    <a href = {accessoriesPageLink} className='nav-link'>
                        Accessories
                    </a>
                </li>

                <li className='nav-item'>
                    <a href = {supportPageLink}  className='nav-link'>
                        Support
                    </a>
                </li>

                <li className='nav-item'>
                    <a href = {searchIcon}  className='nav-link'>
                        -Icon-
                    </a>
                </li>

                <li className='nav-item'>
                    <a href = {bagIcon}  className='nav-link'>
                        -Icon-
                    </a>
                </li>
            </ul>

        </nav>
    )
}

export default NavBar;