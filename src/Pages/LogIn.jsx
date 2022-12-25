import React, { useEffect,useState,useContext,setState } from 'react'
import Car from '../Components/Car'
import CarsList from '../Components/CarsList'
import MyContext from '../utils/MyContext'
import welcomeImage from '../Images/Welcome.png'
import Logo from '../Images/Logon.svg'

const LogIn = () => {


 

    return (
        <div>   
        <nav className = 'p-50'>
        <img src = {welcomeImage} class="w-50 h-screen" alt="..." />
        <div class= " bg-[#FFFFFF] w-1/4 m-auto">
            <img src = {Logo} class = "w-full center block mb-0"  alt="..." />
            <form>
            <input type ="text" class = "rounded-2xl  bg-[#F0EFFF] focus:text-[#000000]  text-[#A7A3FF] text-sm block w-full p-5 font-['poppins'] " id = "username" placeholder = "Username" required/>
             <input type ="password" class = " rounded-2xl bg-[#F0EFFF] focus:text-[#000000] text-[#A7A3FF] text-sm block w-full p-5 font-['poppins'] mt-6 mb-3" id="password" placeholder = "Password" required/>
            </form >
             <a class = " text-xs text-[#A7A3FF] w-full font-['poppins']" href =  '#'>Forgot Password?</a>
             <a href = {`/`}><button  class = " rounded-full font-['poppins'] bg-[#CA4343] text-[#FFFFFF] text-sm block  w-full mt-3 p-5 center hover:bg-[#FF4343]"> Log in</button></a>
             <p class = "text-xs font-['poppins'] mt-6 w-full text-center">Don't have anaccount yet ? <a href = {`/SignUp/`} class = "text-xs font-['poppins'] text-[#CA4343] text-sm font-bold">Register Here!</a></p>
        </div>
        </nav>
        </div>

        );
};

export default LogIn;