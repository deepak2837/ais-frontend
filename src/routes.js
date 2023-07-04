

// const Leaflet = React.lazy(() => import("pages/Leaflet"));
import Leaflet from "pages/Leaflet";
const routes = [
 
  {
    enabled: true,
    path: "/leaflet",
    component: Leaflet,
    navbar: "Explore",
    child: [
    
      {
        name: "Live Locations",
        path: "/leaflet/markers",
        
      },
     
      {
        name: "Get User Location",
        path: "/leaflet/user-location",
      },
      {
        name: "Draw Shapes on map",
        path: "/leaflet/draw-on-map",
      },
    
 
    ],
  },
  
   
];

export default routes;