import AboutUs from "./AboutUs";
import CustomSlider from "./Slider";
import Application from "./Application";

const HomePage = () => {
    return (
        <div>
            <div className="w-full h-[calc(100vh-7vh)]"> {/* 10vh is reserved for the navbar */}
                <CustomSlider />
            </div>
            <div>
                <AboutUs />
            </div>
            <div>
                <Application />
            </div>
        </div>
    );
}
export default HomePage;