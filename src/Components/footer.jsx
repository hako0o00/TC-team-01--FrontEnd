import React from 'react'
import {useState,useEffect,useContext} from 'react'
import footer from '../Images/footer.png'
import fb from "../Images/fb.png"
import yt from "../Images/yt.png"
import ln from "../Images/ln.png"
import tw from "../Images/tw.png"
import ins from "../Images/ins.png"


const Footer = () => {


    return (
    	<div >	
        <footer className="footer">

<div className="flex" >
 

 <div className="w-1/2" >
 <p className="text-5xl font-extrabold text-red-500">VROOM,</p><br/>
 <p className="text-5xl font-extrabold "> Make the better move </p><br/>
 <p  className="text-2xl font-bold" >The platform is another way to sell<br/> or buy if you are concerned about <br/>selling or buying  a vehicle<br/>to / from someone in person.</p>
</div>


<div >
<div className="flex mt-16 gap-4 w-fit mx-auto">

<a href="instagram.com"> <img src={fb} /></a>
<a href="https://twitter.com/?lang=fr"> <img src={tw} /></a>
<a href="youtube.com"> <img src={yt} /></a>
<a href="https://web.facebook.com/?_rdc=1&_rdr"> <img src={ins} /></a>
<a href="https://www.linkedin.com/onboarding/start/"> <img src={ln} /></a>
</div>
<p className="text-2xl font-bold ml-4" >YOU NEED HELP ?<br/>
Contact us :<br/></p>
<a href="https://mail.google.com/mail/u/0/#starred?compose=GTvVlcSHxjNTQXrmhdDrhPmmTVxrqkQLVhPLvmChfBNKvnlxCkBzwKXNHDwPwMWCBCBPftbCdTljs">helpservice@vroom.dz</a>
</div>
</div>
</footer>
       

        </div>
    	

    	);
};

export default Footer;