import React from "react";
import { useSpring, animated } from "@react-spring/web";

const importAll = (r) => r.keys().map(r);

const row1Images = importAll(require.context('../../Assets/Client/Client list/Line 1', false, /\.(png|jpe?g|svg)$/));
const row2Images = importAll(require.context('../../Assets/Client/Client list/Line 2', false, /\.(png|jpe?g|svg)$/));
const row3Images = importAll(require.context('../../Assets/Client/Client list/Line 3', false, /\.(png|jpe?g|svg)$/));

function Clients() {
    const rows = [row1Images, row2Images, row3Images];

    const marqueeAnimation = useSpring({
        from: { transform: "translateX(0%)" },
        to: { transform: "translateX(-100%)" },
        config: { duration: 30000 },
        reset: true,
        loop: { reverse: true },
    });

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-white text-black">
            <div className="w-full max-w-6xl flex flex-col items-center">
                <div className="text-4xl font-medium text-orange-500 mb-2">Our Clients</div>
                <div className="text-lg font-light text-gray-600 mb-10">
                    Earthcon Systems (India) Pvt. Ltd.
                </div>
                
                {rows.map((row, rowIndex) => (
                    <div className="overflow-hidden w-full relative mt-10" key={rowIndex}>
                        <animated.div
                            className="flex whitespace-nowrap"
                            style={marqueeAnimation}
                        >
                            {/* Duplicate the content for seamless looping */}
                            {[...row, ...row].map((el, index) => (
                                <div key={index} className="flex-shrink-0 flex items-center justify-around whitespace-nowrap p-2">
                                    <img src={el} className="w-40 h-auto rounded-lg shadow-md" alt={`client-${rowIndex}-${index}`} />
                                </div>
                            ))}
                        </animated.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clients;
