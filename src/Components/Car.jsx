import React from 'react'

const Car = ({ Anonce }) => {
    return (
    	<div>	
             <a href = {`/Anonces/${Anonce.id}`}>
             Car : {Anonce.id}
             </a>
             <br/>
             {Anonce.CarName}
             <br/>
             {Anonce.Description}
             <br/>
             <br/>
    	</div>

    	);
};

export default Car;