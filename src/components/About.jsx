import { useState, useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const About = () => {
    const { theme } = useContext(ThemeContext);

    const [skills, setSkills] = useState([
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "Tailwind CSS",
        "Node.JS with Express Framework",
        "REST API",
        "SQL",
        "NoSQL",
        "Temenos T24",
        "Avaloq Banking Suite"
    ]);

    const [educationHistory,setEducationHistory] = useState([
        "Bachelor of Science in Information Technology - Emilio Aguinaldo College - Manila (2019-2022)",
        "General Academic Strand - Holy Nazarene Christian School (2017-2019)",
        "Junior High School- Holy Nazarene Christian School (2012-2017)",
        "Elementary - Holy Nazarene Christian School (2007-2012)"
    ]);

    return (
        <section className="py-6 px-4 sm:px-6 lg:px-8 mt-5">
            <div className="max-w-5xl mx-auto">
                <h2 className={`text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} mb-10 sm:mb-12`}>About Me</h2>
                <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-10 sm:mb-12 text-justify leading-relaxed`}>
                    I am a Technical Consultant specializing in core banking technologies, with hands-on experience in Temenos T24 and currently expanding my expertise through formal training in Avaloq Banking Suite. 
                    With over 3 years of industry experience, I’ve worked directly with banking operations, system configurations, and technical analysis helping financial institutions streamline processes and enhance system performance.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className={`bg-gradient-to-br ${theme === 'dark' ? 'bg-gray-800' : 'from-blue-50 to-blue-100'} p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out border-l-4 border-blue-500`}>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-5 text-blue-900 flex items-center gap-3">
                            <span className={`text-3xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>💼</span>Skills
                        </h3>
                        <ul className="space-y-3">
                            {skills.map((skill, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                                    <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                                    <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`bg-gradient-to-br ${theme === 'dark' ? 'bg-gray-800' : 'from-green-50 to-green-100'} p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out border-l-4 border-green-500`}>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-5 text-green-900 flex items-center gap-3">
                            <span className={`text-3xl ${theme === 'dark' ? 'text-green-500' : 'text-green-600'}`}>🎓</span>Education History
                        </h3>
                        <ul className="space-y-4">
                            {educationHistory.map((edu, index) => (
                                <li key={index} className="flex gap-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                                    <span className={`text-green-500 font-bold flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>→</span>
                                    <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{edu}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;