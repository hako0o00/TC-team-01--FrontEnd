import React from 'react'
import im from "../Images/im.png"
import img from "../Images/img.png"
import imgg from "../Images/imgg.png"
import Profil from "../Images/Profil.png"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const Profile = () => {
    return (
        <div>
        <NavBar/>
        <div className="flex">  
        <div className="w-1/4 ml-20 mt-20 bg-black-500 m-4">
        
       <div className="flex   mt-4" ><img src={im} /><h1 class = "pl-4">My account</h1><a href="" ></a></div>

      <div className="flex mt-4"><img src={img} /><h1 className="pl-4">My Posts    </h1>  <a href="" ></a></div>

      <div className="flex mt-4"><img src={imgg} /> <h1 className="pl-4"> Saved Posts</h1>  <a href="" > </a></div>
       <h1 className="text-red-500"><a class = "p-16" href={`/LogIn/`}> logout</a> </h1>
        </div>





        {/*=================================*/}
       <div className="w-3/4 mr-4">   
        <div className="w-full m-auto mt-20 flex"> 
               <div class="w-2/5 "></div>
               <div class="w-1/5 "><br/><img src={Profil} class=" "/>
               <div className="flex"><label >Edit </label> <input type="file" id="image" name="image"/></div><br/> 
               <p >Username : Andrew_NG</p><br/>
               <p>E-mail Address : ja_ng@esi.dz</p><br/>
               <p>Phone Number : 06798816646</p><br/>
               <p>Biography : text goes here</p>
               </div>
               
         </div> 

        </div>
        </div>
        <Footer/>
        </div>

        );
};

export default Profile;