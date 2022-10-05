import { Link } from "react-router-dom";

const Movieslist = ({movies}) => {
                    
    return ( 
    
            <div >
             {
                   movies.map((movie)=>{
                  
                    return(  
                        
                        <div key={movie.id}  >
                           <img   src={movie.poster} alt="not found" />
                          <h4>{movie.title}</h4>
                          <h4 >{movie.rating}</h4>
                          <Link to="/booktickets">
                          <button>book tickets</button>
                          </Link>
                       
                        </div>       
                    )
                })
              }
                
           </div>
    
     );
}
 
export default Movieslist;

