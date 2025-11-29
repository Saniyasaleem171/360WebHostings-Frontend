
import React from 'react';
import { FileText, ScrollText } from 'lucide-react';

const ResourceItem = ({ title, lastUpdated, fileSize, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border-b last:border-b-0 hover:bg-gray-50 transition duration-150 rounded-lg group"
  >
    <div className="flex items-center space-x-3 sm:space-x-4 mb-2 sm:mb-0">
      <div className="p-2 sm:p-3 bg-gray-100 rounded-lg text-gray-600 group-hover:text-yellow-600 transition">
        <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div>
        <h4 className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-yellow-700 transition">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-gray-500">Last updated: {lastUpdated}</p>
      </div>
    </div>
    <span className="text-xs sm:text-sm text-gray-400">{fileSize}</span>
  </a>
);

const LegalResources = () => (
  <div className="w-full">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
      <ScrollText className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-yellow-600" />
      Legal Resources
    </h2>

    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 sm:p-6 divide-y divide-gray-100">
      <ResourceItem title="Terms of Service" lastUpdated="Jan 2025" fileSize="2.4 MB" link="https://360webhostings.com/terms_policy" />
      <ResourceItem title="Privacy Policy" lastUpdated="Feb 2025" fileSize="1.8 MB" link="https://360webhostings.com/terms_policy" />
      <ResourceItem title="Acceptable Use Policy" lastUpdated="Dec 2024" fileSize="1.2 MB" link="https://360webhostings.com/terms_policy" />
      <ResourceItem title="Data Processing Agreement" lastUpdated="Jan 2025" fileSize="3.5 MB" link="https://360webhostings.com/terms_policy" />
    </div>
  </div>
);

export default LegalResources;
