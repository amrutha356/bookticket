import { useEffect, useState } from "react";

const Ticket = () => {

    let [theater, settheater] = useState(null)

    useEffect(() => {
        let t = localStorage.getItem("theater");
        t = JSON.parse(t);
        settheater(t);
    }, [])
      
    useEffect(()=>{
        
    },[])

    return (
        <div className="hall-seat container">

            <h1>STANDARD Rs.300</h1>
            <hr />
            <div className="seatHall justify-content-center">

                {theater &&
                    theater.standard.map((seat) => {
                        return (
                            <div className="eachSeat">{seat}</div>
                        )
                    })
                }
            </div>


            <h1>PREMIUM Rs.500</h1>
            <hr />
            <div className="seatHall justify-content-center ">
                {theater &&
                    theater.premium.map((seat) => {
                        return (
                            <div className="eachSeat">{seat}</div>
                        )
                    })
                }


            </div>

            
        </div>
        

    );
}

export default Ticket;