import React, { useEffect } from 'react';
import { FaNewspaper } from 'react-icons/fa'; // Importing an icon from react-icons
import './newnews.css';

const Newnews = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        <div className="text-center mb-10 flex items-center justify-center">
          <FaNewspaper className="text-orange-500 text-4xl mr-4" />
          <h1 className="text-5xl font-bold text-orange-500">News</h1>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1 bg-orange-500"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {/* First Item (Right) */}
            <div className="timeline-item flex justify-end opacity-0 transform transition-transform duration-500 slide-in-right">
              <div className="bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]">
                <h2 className="text-xl font-semibold text-orange-500">
                  Soil Nailing Design & Execution work at Mukarba Chowk to Panipat section from Welspun Enterprises Ltd.
                </h2>
                <p className="text-black mt-2">
                  This project involves soil nailing for slope stabilization on a critical highway section.
                </p>
              </div>
            </div>

            {/* Second Item (Left) */}
            <div className="timeline-item flex justify-start opacity-0 transform transition-transform duration-500 slide-in-left">
              <div className="bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]">
                <h2 className="text-xl font-semibold text-orange-500">
                  ESIPL bags “Shored Mechanically Stabilized Earth Wall” project from APCO Infratech Pvt. Ltd. in Doda, Jammu & Kashmir.
                </h2>
                <p className="text-black mt-2">
                  The project focuses on enhancing road safety and stability in a landslide-prone region.
                </p>
              </div>
            </div>

            {/* Third Item (Right) */}
            <div className="timeline-item flex justify-end opacity-0 transform transition-transform duration-500 slide-in-right">
              <div className="bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]">
                <h2 className="text-xl font-semibold text-orange-500">
                  ESIPL bags “RS Wall work at Cement factory in Assam” from Dalmia Group.
                </h2>
                <p className="text-black mt-2">
                  The project involves constructing RS walls to support the infrastructure at the cement factory.
                </p>
              </div>
            </div>

            {/* Fourth Item (Left) */}
            <div className="timeline-item flex justify-start opacity-0 transform transition-transform duration-500 slide-in-left">
              <div className="bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]">
                <h2 className="text-xl font-semibold text-orange-500">
                  Globe Infra/ESIPL bags new projects:
                </h2>
                <ul className="list-disc ml-5 mt-2 text-black">
                  <li>RS Wall works from DRB Infrastructure Pvt. Ltd. in Jammu.</li>
                  <li>RS Wall works (block Fascia) at Kasganj bypass in Uttar Pradesh from GR Infra-projects Pvt ltd.</li>
                  <li>RS Wall works in Ranchi-Kolkata Project (Pkg-10&13) from HG Infrastructure Pvt Ltd.</li>
                  <li>Slope Protection Work at Kamlapuram-Oddanchatram section from DRN Infrastructure Pvt. Ltd. in Tamil Nadu.</li>
                  <li>RS Wall works (Gabion Fascia) at Bangalore-Chennai Expressway (Pkg-01) (Andhra Pradesh) from Montecarlo Ltd.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newnews;