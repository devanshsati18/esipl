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
            <div className="py-8">
                <AboutUs />
            </div>
            
            {/* News Section */}
            <div className="py-8">
                <News />
            </div>
            
            {/* Application Section */}
            <div className="py-8">
                <Application />
            </div>
            
            {/* Clients Section */}
            <div className="py-8">
                <Clients />
            </div>
        </div>
    );
};

export default HomePage;
