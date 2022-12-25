import React from 'react'
import NavBar from '../Components/NavBar'
import Formm from '../Components/Formm'
import Logo from '../Images/Logo.svg'
import ForSale from '../Images/ForSale.png'
import Footer from '../Components/Footer'
const Ajouter = () => {
    return (
        <div >
        <NavBar/>
        <div class = "w-full flex items-center mx-auto">
    	<img src = {ForSale} class="w-200 h-screen absolute top-40 bottom-0 right-0" alt="..." />

        <div class ="w-1/6 h-screen"> </div>
        <div class = "bg-[#FFFFFF] w-3/6 ">
        <h1 class ="pt-20 pb-2 font-['poppins'] text-5xl font-bold text-[#1A1F16]">Publish a new</h1>
        <h1 class = "pb-10 pt-0 font-['poppins'] text-5xl font-bold text-[#1A1F16]">Announcment</h1>
       <div className="flex items-center gap-x-8 m-auto w-full" > 

<div class="w-1/2" >
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="CarsName"  placeholder="Cars Name"/>
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Fuel Type" placeholder="Fuel Type" />
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Year" placeholder="Year" />
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Transmissions"  placeholder="Transmissions"/>
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Number of Previous Owners" placeholder="Number of Previous Owners" />
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Mielage" placeholder="Mielage" />
        
</div >  
<div class="w-1/2">
       <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Kilometers Driven"  placeholder="Kilometers Driven"/>
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Number of seats" placeholder="Number of seats" />
                <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']"type="text" id="Seller Type"  placeholder="Seller Type"/>
                <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Max Power" placeholder="Max Power" />
        <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']"type="text" id="Engine"  placeholder="Engine"/>
     	<input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Type"  placeholder="Type"  />
        
        
  </div>      

  
          
        </div>
        <input class="focus:text-[#000000] mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-1/2 p-4 font-['poppins'] m-auto block" type="file" id="Add pic"  placeholder="Add a Picture"  />
        <div class ="flex items-center m-auto w-full">
        <div class ="w-2/6"></div>
        <button class = "mt-5 mb-20 rounded-full font-['poppins'] bg-[#CA4343] text-[#FFFFFF] text-sm block  w-3/6 m-auto p-5 hover:bg-[#FF4343]">Post</button>
        <button class = " mt-5 rounded-full font-['poppins'] bg-[#F0EFFF] text-[#7470CC] text-sm block ml-10  w-2/6 m-auto p-5 hover:bg-[#444444] hover:text-[#000000]">Estimate Price</button>
       
        </div >  
        </div>
         <div class ="w-2/6 h-screen mb-20"></div>
        </div>
        <Footer/>
         </div>

    	);
};

export default Ajouter;