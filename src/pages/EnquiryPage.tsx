import React from 'react';
import { EnquiryForm } from '../components/EnquiryForm';

export const EnquiryPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Centered Primary Enquiry Form */}
      <EnquiryForm />
    </div>
  );
};
