import React from 'react'
import CarsList from '../Components/CarsList'
import Car from '../Components/Car'
import Anovoiture from '../Components/Anovoiture'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'


const Anonces = () => {

 const carsList = [
        {   id : 1,
            CarName : "Maruti",
            Description : "fersha"
        },
        {   id : 2,
            CarName : "tesla",
            Description : "haadak houwa"
        },
        {   id : 3,
            CarName : "ferrari",
            Description : "l7aja"
        }
    ]
    

    return ( 
        <div>
        <NavBar/>
        <input class="focus:text-[#000000] w-1/2 m-auto mt-20 rounded-2xl bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Search"  placeholder="Search 🔍"/>
        <div className="bg-#010000 w-full flex items-center pt-8" >
        <div className = " bg-[#F0EFFF] w-1/4 h-screen ml-16 mr-16 mt-0 mb-0">
            <p class ="text-[#CA4343] font-bold text-2xl block w-full p-6 font-['poppins'] text-center">Filter</p>
            <label class =" p5font-['poppins'] text-center w-full block">Price</label>
            <div class ="w-full flex items-center gap-x-8 m-auto w-full">
            <input class=" ml-8 focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-1/3 p-4 font-['poppins']" type="text" id="min"  placeholder="Min"/>
        <input class=" focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-1/3 p-4 font-['poppins']" type="text" id="max" placeholder="Max" />

        </div>
        <input class="w-2/3 m-auto focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Fuel Type" placeholder="Fuel Type" />
        <input class="w-2/3 m-auto focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Transmissions"  placeholder="Transmissions"/>
       <input class="w-2/3 m-auto focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Owner"  placeholder="Owner"/>
       <input class="w-2/3 m-auto focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Seats"  placeholder="Seats"/>
       <input class="w-2/3 m-auto focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="mielage"  placeholder="Km driven"/>      
         </div>
        <div className="flex items-center relative gap-x-16 w-3/4 mr-16 mb-20">
         {carsList.map((Anonce) => (<Anovoiture Anonce = {Anonce} key={Anonce.id}/>))}
         </div>

    {/*   <div> 
<footer className="footer">
</footer>
</div>*/}
        </div>


       
        <Footer/>
        </div>

        );
};

export default Anonces;