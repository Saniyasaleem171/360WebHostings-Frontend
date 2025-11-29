
import React from 'react';
import { Mail, MapPin, Shield, Lock, FileText, Smartphone } from 'lucide-react';

const ComplianceBadge = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-[#211814] rounded-xl text-white h-24 sm:h-28">
    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 mb-2" />
    <span className="text-xs sm:text-sm font-medium text-center">{title}</span>
  </div>
);

const InquiryItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 border border-gray-100 shadow-sm">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-yellow-50 text-yellow-600">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    </div>
    <div className="ml-3 sm:ml-4">
      <p className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</p>
      <p className="text-sm sm:text-base text-gray-800 font-semibold break-all">{value}</p>
    </div>
  </div>
);

const LegalInquiries = () => {
  return (
    <div className="w-full space-y-8 mt-8 sm:mt-10 lg:mt-0">
      <div className="p-5 sm:p-6 bg-[#2B1F1A] rounded-xl shadow-lg">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-yellow-400" />
          Compliance & Certs
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <ComplianceBadge icon={Shield} title="GDPR Ready" />
          <ComplianceBadge icon={Lock} title="SSL Secure" />
          <ComplianceBadge icon={FileText} title="DMCA Compliant" />
          <ComplianceBadge icon={Smartphone} title="PCI DSS" />
        </div>
      </div>

      <div className="p-5 sm:p-6 bg-white rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
          Legal Inquiries
        </h3>
        <p className="text-sm text-gray-600 mb-4 sm:mb-6">
          For official notices, law enforcement inquiries, or copyright matters.
        </p>

        <InquiryItem icon={Mail} label="EMAIL US" value="legal@360webhostings.com" />
        <InquiryItem icon={MapPin} label="SERVICE OF PROCESS" value="Attn: Legal Dept, 123 Tech City" />
      </div>
    </div>
  );
};

export default LegalInquiries;
