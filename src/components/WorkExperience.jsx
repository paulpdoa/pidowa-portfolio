import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

export default function WorkExperience() {
  const { theme } = useContext(ThemeContext);
  const experiences = [
    {
      id: 1,
      position: 'Business Archictecture Senior Analyst',
      company: 'Accenture Philippines',
      duration: 'October 2025 - Present',
      description: 'Undergoing comprehensive training for Avaloq Banking Suite while developing banking solutions. Working on implementing and optimizing Avaloq-based applications for financial institutions.',
      skills: ['Avaloq Scripting', 'Core Banking System', 'Avaloq Banking Suite', 'Technical Analysis', 'Problem Solving', 'Programming', 'SQL']
    },
    {
      id: 2,
      position: 'Programmer/T24 Technical Consultant',
      company: 'CAZA Technology Solutions Inc.',
      duration: 'October 2022 - October 2025',
      description: 'Developed and maintained multiple client projects. Implemented new features and optimized performance for T24 core banking system',
      skills: ['Temenos T24 R13', 'Jbase', 'Web Service', 'Agile Methodologies', 'Production Support', 'Problem Solving', 'Code Optimization', 'T24 Core Update', 'Consultancy', 'Post-COB and Pre-COB Support']
    },
    {
      id: 3,
      position: 'Freelance Web Developer',
      company: 'ArgoSquad',
      duration: 'March 2022 - July 2022',
      description: 'Built features for web applications. Collaborated with design team to implement user-friendly interfaces.',
      skills: ['HTML/CSS', 'JavaScript', 'Magento', 'Git']
    },
    {
      id: 4,
      position: 'Intern Web Developer',
      company: 'ArgoSquad',
      duration: 'February 2022',
      description: 'Started as an intern building features for web applications. After a week of strong performance, was offered to transition to a freelance position within the team.',
      skills: ['HTML/CSS', 'JavaScript', 'Magento', 'Git']
    }
  ];

  return (
    <section id="work-experience" className={`py-16 ${theme === 'dark' ? '' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Work Experience
          </h2>
        </div>

        <div className="grid gap-6 grid-cols-1">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className={`group ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} rounded-3xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-5 sm:p-6 ${theme === 'dark' ? 'border-l-4 border-blue-500' : 'border-l-4 border-indigo-600'}`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className={`text-xl sm:text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                      {exp.position}
                    </h3>
                    <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} font-semibold mt-1`}>
                      {exp.company}
                    </p>
                  </div>
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} sm:text-right`}>
                    {exp.duration}
                  </span>
                </div>

                <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-6`}>
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-block ${theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-blue-100 text-blue-800'} text-xs sm:text-sm font-medium px-3 py-1 rounded-full`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}