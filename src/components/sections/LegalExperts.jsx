
import React from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';

const ExpertTag = ({ children }) => (
  <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full mr-2 mb-2">
    {children}
  </span>
);

const ExpertCard = ({ imageSrc, name, title, tags, description }) => (
  <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition duration-300 hover:shadow-2xl">
    {/* Image */}
    <div
      className="h-56 sm:h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    ></div>

    {/* Details */}
    <div className="p-5 sm:p-6 flex flex-col flex-grow">
      <div className="mb-3 sm:mb-4 leading-snug">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-xs sm:text-sm text-gray-500 italic">Advocate High Court</p>
        <p className="text-xs sm:text-sm text-yellow-600 font-semibold uppercase tracking-wide mt-1">
          {title}
        </p>
      </div>

      <div className="mb-3 sm:mb-4">
        {tags.map((tag, index) => (
          <ExpertTag key={index}>{tag}</ExpertTag>
        ))}
      </div>

      <p className="text-gray-600 text-sm sm:text-base flex-grow">{description}</p>

      <div className="mt-5 sm:mt-6 flex justify-between items-center border-t pt-3 sm:pt-4">
        <a
          href="#"
          className="flex items-center text-xs sm:text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition"
        >
          View Profile <ArrowRight className="w-4 h-4 ml-1" />
        </a>
        <a
          href="#"
          aria-label="LinkedIn Profile"
          className="text-gray-400 hover:text-blue-600 transition"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
);

const LegalExperts = () => {
  return (
    <section className="bg-white pt-0 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base font-bold text-yellow-600 uppercase tracking-wider">
            THE COUNSEL
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Meet Our Legal Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Cards */}
          <ExpertCard
            imageSrc="/images/nadeem.PNG"
            name="Nadeem Qadir Bhinder"
            title="CHIEF LEGAL ADVISOR"
            tags={['Corporate Law', 'IP Rights', 'Mergers & Acquisitions']}
            description="Over 15 years of experience in corporate law and intellectual property rights within the tech industry. Ensures all operations meet global legal standards and spearheads our international compliance initiatives."
          />
          <ExpertCard
            imageSrc="/images/ali.PNG"
            name="M. Ali Raza Cheema"
            title="SENIOR LEGAL ADVISOR"
            tags={['GDPR Compliance', 'Data Privacy', 'Cybersecurity Law']}
            description="Specializes in GDPR, data protection regulations, and international cybersecurity standards. Dedicated to protecting user privacy and ensuring data sovereignty across all our server locations."
          />
          <ExpertCard
            imageSrc="/images/tehmina.jpeg"
            name="Tehmina Mustaq Khan"
            title="SENIOR LEGAL ADVISOR"
            tags={['Contract Law', 'Dispute Resolution', 'Consumer Protection']}
            description="Expert in contract law, service level agreements, and dispute resolution. Focuses on maintaining fair and transparent business practices and managing our extensive reseller network contracts."
          />
        </div>
      </div>
    </section>
  );
};

export default LegalExperts;
