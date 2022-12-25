import React from 'react'
import Car from '../Components/Car'

const CarsList = ({ Anonce }) => {
    const CarsList = [
        {   id : 1,
            CarName : "Maruti",
            Description : "idk"
        },
        {   id : 2,
            CarName : "tesla",
            Description : "something"
        },
        {   id : 3,
            CarName : "ferrari",
            Description : "idk"
        },
    ]

    return (
    	<div>
        <h1>Cars List</h1>
          {CarsList.map((Anonce) => (<Car Anonce = {Anonce} key={Anonce.id}/>))}
    	</div>

    	);
};

export default CarsList;