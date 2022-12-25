import React from 'react'
import Logo from '../Images/Logo.svg'
import {useState,useEffect,useContext} from 'react'
import messagerie from '../Icons/messagerie.svg'
import help from '../Icons/help.svg'
import publier from '../Icons/publier.svg'
import MyContext from '../utils/MyContext'
 


const NavBar = () => {
    const {userName} = useContext(MyContext);


    return (
    	<div >	
        <nav class ="bg-[#CA4343] flex " >
                <img src = {Logo} class="mt-3 mb-3 ml-5 h-12"  alt="..." />
                <div class="h-full w-1/4 "></div>
                <a  href = {`/Ajouter`} class = "flex items-center text-[#FFFFFF] font-['poppins'] hover:underline"><img src = {publier} class="mr-0 -ml-0 w-8 h-8" alt="..." /><p class = "ml-3">Publier </p> </a>
                <a  href = {`/Profile/`} class = "flex items-center text-[#FFFFFF] font-['poppins'] hover:underline"><img src = {messagerie} class="mr-0 -ml-0 w-8 h-8" alt="..." /><p class = "ml-3">Messagerie</p> </a>
                <a  href = {`/Profile/`} class = "flex items-center text-[#FFFFFF] font-['poppins'] hover:underline"><img src = {help} class="mr-0 -ml-0 w-8 h-8" alt="..." /><p class = "ml-3">help </p></a>
                <a  href = {`/Profile/`} class = "flex items-center text-[#FFFFFF] font-['poppins'] mr-10"> <img src = {help} class="mr-0 -ml-0 w-8 h-8" alt="..." /><p class = "ml-3"> UserName</p></a>
        </nav>
        
    	</div>

    	);
};

export default NavBar;