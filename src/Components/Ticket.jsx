import { useEffect, useState } from "react";

const Ticket = () => {

    let[theater , settheater] = useState(null)

    useEffect(()=>{
        let t = localStorage.getItem("theater");
        t = JSON.parse(t);
        settheater(t);
    } , [])


    return ( 
        <div>

<div className="seatHall">
        {theater &&
            theater.standard.map((seat)=>{
                return( 
                <div className="eachSeat">{seat}</div> 
                )
            })
        }
        </div>

<div className="seatHall">
        {theater &&
            theater.premium.map((seat)=>{
                return( 
                <div className="eachSeat">{seat}</div> 
                )
            })
        }


    </div> 


        </div>
    );
}
 
export default Ticket;