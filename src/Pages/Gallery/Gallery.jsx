import React, { useEffect, useState } from 'react';

const importAll = (r) => {
    return r.keys().map(r);
};

const annualMeetImages = importAll(require.context('../../Assets/Gallery/Annual Meet', false, /\.(png|jpe?g|svg)$/));
const festivalCelebrationImages = importAll(require.context('../../Assets/Gallery/Festivals Celebration', false, /\.(png|jpe?g|svg)$/));
const sitePictureImages = importAll(require.context('../../Assets/Gallery/Site Pictures', false, /\.(png|jpe?g|svg)$/));
const coCurricularActivityImages = importAll(require.context('../../Assets/Gallery/Co-curricular Activities', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
    const [showGreeting, setShowGreeting] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGreeting(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {showGreeting && (
                <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('path/to/your/background.jpg')" }}>
                    <div className="absolute inset-0 bg-orange-500 opacity-45 flex items-center justify-center">
                        <h1 className="text-white text-5xl animate-fadeIn">Gallery</h1>
                    </div>
                </div>
            )}
            <div className="p-4 align-middle">
                <Section title="Annual Meet" images={annualMeetImages} />
                <Section title="Festival Celebration" images={festivalCelebrationImages} />
                <Section title="Site Picture" images={sitePictureImages} />
                <Section title="Co-curricular Activity" images={coCurricularActivityImages} />
            </div>
        </div>
    );
};

const Section = ({ title, images }) => {
    return (
        <div className="py-16">
            <h2 className="sticky top-0 bg-white z-10 p-4 text-lg font-bold">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Image ${index + 1}`} 
                        className="w-full h-64 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105" 
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
