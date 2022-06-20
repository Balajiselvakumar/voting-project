import Lottie from "react-lottie";

// importing lottie animation JSON
// note that you can use any variable in place of "animation"
import animation from '../Component/Lottiee/98432-loading.json'
import Typography from "@mui/material/Typography";
function Loading() {
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
            VALIDATING YOUR VOTE ...
         </Typography>
      </div>
   );
}

export default Loading;