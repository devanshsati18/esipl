import { Carousel } from "@material-tailwind/react";
import 'animate.css'; // Import Animate.css for animations
import {bg1} from '../../Assets/Slider/bg1.jpg'

const Slider = ()=>{
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Carousel className="rounded-xl w-[75vw] h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Amazing Slider
        </h1>
        <p className="text-lg animate__animated animate__fadeIn animate__delay-2s">
          Explore stunning visuals with our dynamic carousel slider.
        </p>
      </div>
    </div>
  );
}
export default Slider;