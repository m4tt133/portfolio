import Animation from "public/download.json";
import { useLottie } from "lottie-react";

const style = {
  height: 50,
  width: 50
};

const Download = () => {
  const options = {
    animationData: Animation,
    loop: false,
    autoplay: false,
  };

  const { View } = useLottie(options, style);
  
  return View;
};

export default Download;