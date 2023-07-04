const GIT_REPO =
  "https://github.com/deepak2837/ais";


export default {
  api: process.env.REACT_APP_API_ENDPOINT,

  GOOGLE: {
    GAPI_KEY: "",
    reCaptcha: process.env.REACT_APP_RECAPCTHA_SITE_TOKEN,
    GA_TRACKING_CODE: process.env.REACT_APP_GA_TRACKING_CODE,
  },

  hCaptchaSiteToken: process.env.REACT_APP_HCAPTCHA_SITE_TOKEN,

  links: {
    

    leafletBasic: {
      
      code: `${GIT_REPO}pages/Leaflet/basic.js`,
    },
    leafletMarker: {
      
      code: `${GIT_REPO}pages/Leaflet/markers.js`,
    },
    leafletCurrentLocation: {
     
      code: `${GIT_REPO}pages/Leaflet/currentLocation.js`,
    },
    leafletDraw: {
      
      code: `${GIT_REPO}pages/Leaflet/draw.js`,
    }
   ,
    leafletStaticMap: {
   
      code: `${GIT_REPO}pages/Leaflet/StaticMap.js`,
    },
    leafletPrint: {
      
      code: `${GIT_REPO}pages/Leaflet/Print.js`,
    },
  }
};
