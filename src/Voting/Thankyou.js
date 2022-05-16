import Lottie from "react-lottie";

// importing lottie animation JSON
// note that you can use any variable in place of "animation"
import animation from '../Component/Lottiee/8174-vote.json'
import Typography from "@mui/material/Typography";
function Thankyou() {
   const defaultOptions = {
      loop: true,
      autoplay: true,
      // here is where we will declare lottie animation
      animationData: animation,
      rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
      },
   };

   return (
      <div>
         <Lottie options={defaultOptions} height={500} width={500}  />
         <Typography
         variant="h2"
         align="center"


         >
            Thanks for Voting :)
         </Typography>
      </div>
   );
}

export default Thankyou;































// import * as React from 'react';
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
//
// export default function Thankyou(){
//     return(
//
//         <Box sx={{ flexGrow: 1 }} style={{
//                 margin: '0 50px 0 50px',
//                 position: 'absolute', top: '50%', left:'15%',
//                 transform: 'translate(-10%, -50%)',
//                 textAlign: "center"
//             }}>
//             <Typography
//             variant="h1"
//             align="center"
//             color={"green"}
//             >
//
//                 Thank you for your valuable VOTE :)
//             </Typography>
//         </Box>
//
//     );
//
//}