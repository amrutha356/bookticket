import { Link } from "react-router-dom";

const Movieslist = ({ movies }) => {

  return (

    <div className="cards ">
      {
        
        movies.map((movie) => {

          return (

            <div className="container" key={movie.id}  >
              <img src={movie.poster} alt="not found" />
              <h4>{movie.title}</h4>

              <Link to="/booktickets">
                <button className="bttn">book tickets</button>
              </Link>

            </div>
          )
        })
      }

    </div>

  );
}

export default Movieslist;

