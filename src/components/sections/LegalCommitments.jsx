
import React from 'react';
import { ShieldCheck, Lock, Globe } from 'lucide-react';

const GovernanceCard = ({ icon: Icon, title, description }) => (
  <div className="flex-1 min-w-[250px] sm:min-w-[280px] p-5 sm:p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl">
    <div className="flex items-center space-x-3 sm:space-x-4">
      <div className="p-2 sm:p-3 bg-yellow-100 rounded-lg text-yellow-600">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">{description}</p>
  </div>
);

const LegalCommitments = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-0 md:-mt-[100px]"> 
      {/* on mobile: normal spacing; on desktop: pulled up */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
        <GovernanceCard
          icon={ShieldCheck}
          title="Unwavering Integrity"
          description="We adhere strictly to international laws and ethical standards in every transaction."
        />
        <GovernanceCard
          icon={Lock}
          title="Data Protection First"
          description="Your data privacy is paramount. We implement rigorous safeguards to protect your information."
        />
        <GovernanceCard
          icon={Globe}
          title="Global Compliance"
          description="Operating across borders with full adherence to local and international digital regulations."
        />
      </div>
    </div>
  );
};

export default LegalCommitments;
