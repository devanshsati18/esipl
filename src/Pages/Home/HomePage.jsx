import AboutUs from "./AboutUs";
import CustomSlider from "./Slider";
import Application from "./Application";
import News from "./News";
import Clients from "./Clients";

const HomePage = () => {
    return (
        <div className="flex flex-col">
            {/* Slider Section */}
            <div className="relative">
                <CustomSlider />
            </div>
            
            {/* About Us Section */}
            <div >
                <AboutUs />
            </div>
            
            {/* News Section */}
            <div >
                <News />
            </div>
            
            {/* Application Section */}
            <div >
                <Application />
            </div>
            
            {/* Clients Section */}
            <div >
                <Clients />
            </div>
        </div>
    );
};

export default HomePage;
