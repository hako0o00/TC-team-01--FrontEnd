import React from 'react'
import {useParams} from 'react-router-dom'
import NavBar from '../Components/NavBar'
const UneAnonce = () => {
    const {id} = useParams();
    return (
    	<div>	
             <NavBar/>
             
             <div class ="flex items-center gap-x-8 m-auto "> 
             <div class ="w-1/2 h-screen bg-[#000000] m-32 ml-12 mr-0 "><img class="rounded-t-lg w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnFyFSDLK0AAq0BZW5BTvS2KlGVYe_DCeWQ&usqp=CAU" alt=""/></div>
             <div class= "h-screen">
             <h1 class ="font-['poppins'] text-5xl font-bold text-[#1A1F16] block pt-10 pl-10 ">Toyota {id}</h1>
            <p1 class ="font-['poppins'] text-2xl text-[#888888] p-20">20 000 DA</p1>
            <br/><br/>
            <div> <p1 class ="font-['poppins'] text-2xl text-[#888888] ml-20 p-20">Username</p1></div>
             <div class ="flex items-center gap-x-8 m-auto ml-12 w-full mt-6">
             <button  class = " rounded-full font-['poppins'] bg-[#CA4343] text-[#FFFFFF] text-sm block  w-1/2 mt-3 p-5 center hover:bg-[#FF4343]">View Profile</button>
            <button  class = "rounded-full font-['poppins'] bg-[#FFFFFF] text-[#CA4343] border-[#CA4343] border-2 text-sm block  w-1/2 mt-3 p-5 center hover:bg-[#AAAAAA]">Send Message</button>
</div>
            <p class ="text-[#CA4343] font-bold text-2xl block w-full m-auto p-8 font-['poppins'] text-center">Details</p>
             <p class ="text-[#000000]  text-xl block w-full ml-0 p-2 font-['poppins'] ">Year : 2019 <br/> Kilometers driven : 10000 Km <br/> Fuel Type : Petrol <br/> Seller Type : Individual <br/> Transmission : Manual <br/> Number of previous owners : 3 <br/> Mileage : 19.7 kmpl <br/> Engine : 796 CC <br/> Max power : 46.3 bhp <br/> Torque : 199 kmpg <br/>Number of Seats : 5 </p>
            
             </div>
             </div>

    	</div>

    	);
};

export default UneAnonce;