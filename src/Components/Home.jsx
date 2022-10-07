import { useState } from "react";
import { useEffect } from "react";
import Movieslist from "./Movieslist";

const Home = () => {

     let [movies, setMovies] = useState([
          {
               "id": 1,
               "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTklICAxNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330541-jenrgvbfgg-portrait.jpg",
               "title": "Kantara",

          },
          {
               "id": 2,
               "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODElICAyNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338224-huaxpcavhb-portrait.jpg",
               "title": "Chup",

          },
          {
               "id": 3,
               "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTNrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331997-hqsnnquxpb-portrait.jpg",
               "title": "Drishyam 2",

          },
          {
               "id": 4,
               "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjFrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00333845-xmggankczw-portrait.jpg",
               "title": "Ghost",

          },
          {
               "id": 5,
               "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OGsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00335128-xagzxyscem-portrait.jpg",
               "title": "Good Bye",

          },
          {
               "id": 6,
               "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICAxNzdrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329656-zmlwfkjupb-portrait.jpg",
               "title": "Sita Ramam",

          }])

     useEffect(() => {
          if (localStorage.getItem("theater") == null) {
               var theater = {
                    price: { premium: 500, standard: 300 },
                    premium: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10",
                         "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10",
                         "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10",
                         "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],

                         standard: ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10",
                         "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10",
                         "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10",
                         "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10",
                         "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10",
                         "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "J10" ]
               }

               theater = JSON.stringify(theater);

               localStorage.setItem("theater", theater)
          }

     }, [])

     return (
          <div>
               {movies && <Movieslist movies={movies} />}
          </div>
     );
}

export default Home;