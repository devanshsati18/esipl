import AboutUs from "./AboutUs";
import CustomSlider from "./Slider";
import Application from "./Application";

const HomePage =()=>{
    return(
        <div>
            <div className=" w-full h-[85vh]">
                <CustomSlider />
            </div>
            <div>
                <AboutUs />
            </div>
            <div>
                <Application />
            </div>
        </div>
    )
}
export default HomePage;