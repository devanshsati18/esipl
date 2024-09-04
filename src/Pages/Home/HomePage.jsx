import AboutUs from "./AboutUs";
/* import CustomSlider from "./Slider"; */
import NewSlider from "./NewSlider";
import Application from "./Application";
import Gallery from "./Gallery";
import News from "./News";
import Clients from "./Clients";

const HomePage = () => {
    return (
        <div>
            {/* <div className="w-full h-[calc(100vh-7vh)]"> 10vh is reserved for the navbar
                <CustomSlider />
            </div> */}
            <div>
                <NewSlider />
            </div>
            <div>
                <AboutUs />
            </div>  
            <div>
                <News />
            </div>
            <div>
                <Application />
            </div>
            <div>
                <Gallery />
            </div>
            <div>
                <Clients />
            </div>
        </div>
    );
}
export default HomePage;