import React, { useEffect, useState, useRef } from 'react';
import 'animate.css'; // Import Animate.css for animations
import './Gallery.css'; // Import your custom CSS styles

// Function to import all images from a directory
const importAll = (r) => r.keys().map(r);

// Import images from respective folders
const annualMeetImages = importAll(require.context('../../Assets/Gallery/Annual Meet', false, /\.(png|jpe?g|svg)$/));
const festivalCelebrationImages = importAll(require.context('../../Assets/Gallery/Festivals Celebration', false, /\.(png|jpe?g|svg)$/));
const sitePictureImages = importAll(require.context('../../Assets/Gallery/Site Pictures', false, /\.(png|jpe?g|svg)$/));
const coCurricularActivityImages = importAll(require.context('../../Assets/Gallery/Co-curricular Activities', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
    const [currentSection, setCurrentSection] = useState('Annual Meet');
    const sectionRefs = useRef([]);

    // Use Intersection Observer API to detect when a section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(entry.target.dataset.title); // Change section title when the section is in view
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 overflow-hidden">
            {/* Greeting Overlay */}
            <GreetingOverlay />

            {/* Fixed Main Header */}
            <header className="fixed top-0 w-full py-6 bg-white shadow-lg z-10">
                <h2 className="text-3xl font-bold text-center text-orange-600 animate__animated animate__fadeInDown">
                    Welcome to Our Gallery
                </h2>
            </header>

            {/* Sticky Section Title */}
            <div className="sticky top-20 z-20 bg-white py-4 shadow-md text-center">
                <h3 className="text-4xl font-bold text-orange-600 transition-opacity duration-500">
                    {currentSection}
                </h3>
            </div>

            {/* Main Content with padding to avoid overlap */}
            <main className="pt-32 p-8">
                <Section
                    title="Annual Meet"
                    images={annualMeetImages}
                    setRef={(el) => (sectionRefs.current[0] = el)}
                />
                <Section
                    title="Festival Celebration"
                    images={festivalCelebrationImages}
                    setRef={(el) => (sectionRefs.current[1] = el)}
                />
                <Section
                    title="Site Pictures"
                    images={sitePictureImages}
                    setRef={(el) => (sectionRefs.current[2] = el)}
                />
                <Section
                    title="Co-curricular Activities"
                    images={coCurricularActivityImages}
                    setRef={(el) => (sectionRefs.current[3] = el)}
                />
            </main>

            {/* Footer */}
            <footer className="py-4 bg-white shadow-inner">
                <p className="text-center text-gray-600">&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

// Greeting overlay component for intro animation
const GreetingOverlay = () => {
    const [showGreeting, setShowGreeting] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowGreeting(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        showGreeting && (
            <div className={`fixed inset-0 z-50 animate__animated animate__fadeIn`}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-80 flex items-center justify-center">
                    <h1 className="text-white text-7xl font-extrabold animate__animated animate__zoomIn">Gallery</h1>
                </div>
            </div>
        )
    );
};

// Section component with dynamic ref for intersection observer
const Section = ({ title, images, setRef }) => {
    return (
        <section ref={setRef} data-title={title} className="py-16">
            {/* Section Static Title */}
            <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">{title}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 animate__animated animate__fadeIn">
                {images.map((image, index) => (
                    <div className="relative group" key={index}>
                        {/* Image with Hover Effect */}
                        <img 
                            src={image} 
                            alt={`Image ${index + 1}`} 
                            className="w-full h-96 object-cover rounded-xl transform transition-transform duration-500 hover:scale-110 shadow-2xl animate__animated animate__zoomIn"
                        />
                        
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-center justify-center rounded-xl">
                            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Image</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
