import Banner from './Banner'
const Home  =()=>{
    <div>
        {/* Banner */}
        <div className="App">
            {/* Banner1 */}
            <Banner
                imageUrl="https://via.placeholder.com/800x400"
                text="Your Banner Text Here"
                animationClass="animate__fadeInLeft" // Example animation class
            />
        </div>
    </div>
}
export default Home;