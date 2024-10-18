import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaHandPointRight, FaNewspaper } from 'react-icons/fa';

const Career = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Preloader duration

    return () => clearTimeout(timer);
  }, []);

  const jobs = [
    {
      profile: "RE Wall as Site Engineer/Site Supervisor",
      experience: "2 to 5 Yr",
      location: "Tamil Nadu, AP",
      openings: 2,
      description: [
        "Experience in RE Wall (Reinforced Earth Wall), Highway & Roadways.",
        "Civil Diploma or B-tech preferred.",
        "Languages: English, Tamil or Telugu (Mandatory).",
        "Location: Tamil Nadu, AP.",
        "Salary: 20 to 25k CTC."
      ]
    },
    {
      profile: "Business Development Executive",
      experience: "2 to 5 Yr",
      location: "Head Office, Delhi",
      openings: 1,
      description: [
        "Develop and implement strategic business plans.",
        "Identify and pursue new business opportunities.",
        "Build strong relationships with stakeholders.",
        "Conduct market research to identify trends.",
        "Collaborate with teams to ensure client satisfaction.",
        "Prepare and deliver sales presentations."
      ]
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-orange-400 bg-opacity-50">
        <div className="loader text-white text-5xl">Careers</div>
      </div>
    );
  }

  return (
    <div className=" bg-teal-100 min-h-screen"> {/* Updated background color */}
      <header>
        {/* Include your menu here */}
      </header>

      <section className="py-10">
        <div className="container mx-auto text-center px-4">
          {/* Company Profile */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-2 text-orange-600 pt-9">
              <FaNewspaper className="inline" /> We are Hiring
              <span className="block text-gray-600 text-lg">Earthcon Systems (India) Pvt. Ltd.</span>
            </h2>
            <p className="text-gray-500">Join our team and help shape the future!</p>
          </motion.div>

          <div className="flex flex-col">
            <div className="w-full">
              <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg mx-auto">
                <thead>
                  <tr className="bg-orange-500 text-white">
                    <th className="py-3 px-4 border">Profile</th>
                    <th className="py-3 px-4 border">Experience</th>
                    <th className="py-3 px-4 border">Location</th>
                    <th className="py-3 px-4 border">Openings</th>
                    <th className="py-3 px-4 border">Job Description</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <motion.tr 
                      key={index} 
                      className="hover:bg-gray-100 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <td className="border py-4 px-4 font-semibold">{job.profile}</td>
                      <td className="border py-4 px-4">{job.experience}</td>
                      <td className="border py-4 px-4">{job.location}</td>
                      <td className="border py-4 px-4">{job.openings}</td>
                      <td className="border py-4 px-4">
                        {job.description.map((desc, i) => (
                          <p key={i} className="flex items-center">
                            <FaHandPointRight className="mr-2 text-orange-500" /> {desc}
                          </p>
                        ))}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Information */}
          <motion.div 
            className="mt-8 p-6 bg-white border rounded-lg shadow-lg transition-transform transform hover:scale-105 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Contact Us</h3>
            <p className="flex items-center justify-center mb-2">
              <FaPhone className="mr-2 text-orange-500" /> 
              <span>Call us for Details: <strong>9899222244, 9899222245</strong></span>
            </p>
            <p className="flex items-center justify-center">
              <FaEnvelope className="mr-2 text-orange-500" />
              <span>
                E-mail us with Resume or CV: 
                <a href="mailto:info@esipl.net" className="underline text-orange-600 ml-1">info@esipl.net</a>
              </span>
              <span className="mx-2">
                <span className="text-gray-500">or</span>
                <a href="mailto:hr@esipl.net" className="underline text-orange-600 ml-1">hr@esipl.net</a>
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      <footer>
        {/* Include your footer here */}
      </footer>

      <style>{`
        .loader {
          border: 8px solid rgba(255, 165, 0, 0.3);
          border-radius: 50%;
          border-top: 8px solid #f27217;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Career;
