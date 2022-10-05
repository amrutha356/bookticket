import { useState } from "react";
import { useEffect } from "react";
import Movieslist from "./Movieslist";

const Home = () => {

    let [movies , setMovies] =  useState([
          {
              "id": 1,
              "poster":  "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTklICAxNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330541-jenrgvbfgg-portrait.jpg",
               "title": "Kantara",
               "rating": 9
          },
          {
              "id": 2,
              "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODElICAyNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338224-huaxpcavhb-portrait.jpg" ,
               "title": "Chup",
               "rating": 9
          },
          {
              "id": 3,
              "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTNrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331997-hqsnnquxpb-portrait.jpg" ,
               "title": "Drishyam 2",
               "rating": 9
          },
          {
              "id": 4,
              "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjFrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00333845-xmggankczw-portrait.jpg" ,
               "title": "Ghost",
               "rating": 9
          },
          {
              "id": 5,
              "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTclICAzayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00337776-spvujlpcnq-portrait.jpg" ,
               "title": "Luck Man",
               "rating": 9
          },
          {
              "id": 6,
              "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICAxNzdrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329656-zmlwfkjupb-portrait.jpg" ,
               "title": "Sita Ramam",
               "rating": 9
          }])

     useEffect(()=>{
          if(localStorage.getItem("theater") == null)
          {
               var theater = {price : {premium : 300 , standard : 500} ,
                              standard : ["A1" , "A2" , "A3" , "A4" , "A5" , "A6" ,"A7" , "A8" , "A9" , "A10" ,
                              "B1" , "A2" , "A3" , "A4" , "A5" , "A6" ,"A7" , "A8" , "A9" , "A10" ,
                              "C1" , "A2" , "A3" , "A4" , "A5" , "A6" ,"A7" , "A8" , "A9" , "A10" ,
                              "D1" , "J2" , "J3" , "J4" , "J5" , "J6" ,"J7" , "J8" , "J9" , "J10"  ] ,
                              premium : ["E1" , "A2" , "A3" , "A4" , "A5" , "A6" ,"A7" , "A8" , "A9" , "A10" ,
                              "F1" , "A2" , "A3" , "A4" , "A5" , "A6" ,"A7" , "A8" , "A9" , "A10" ,
                              "G1" , "A2" , "A3" , "A4" , "A5" , "A6" ,"A7" , "A8" , "A9" , "A10" ,
                              "H1" , "A2" , "A3" , "A4" , "A5" , "A6" ,"A7" , "A8" , "A9" , "A10" ,
                              "I1" , "A2" , "A3" , "A4" , "A5" , "A6" ,"A7" , "A8" , "A9" , "A10" ,
                              "J1" , "A2" , "A3" , "A4" , "A5" , "A6" ,"A7" , "A8" , "A9" , "A10" 
                              ] ,
                              
                         }

               theater = JSON.stringify(theater);

               localStorage.setItem("theater" , theater )
          }

     } , [])

    return ( 
        <div>
             {movies && <Movieslist movies={movies}/>}
        </div>
     );
}
 
export default Home;