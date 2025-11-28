import React from 'react';
import { ChatBubbleLeftIcon, EnvelopeIcon, BookOpenIcon } from '@heroicons/react/24/outline'; 

/**
 * Renders the 'Still have questions?' contact section for the FAQ page.
 * Includes hover effects and transitions on the card and buttons.
 */
const FAQContact = () => {
  return (
    <div className="flex justify-center w-full py-16 px-4 sm:px-6 lg:px-8">
      {/* Outer container for the card */}
      <div 
        className="relative bg-white rounded-3xl shadow-xl max-w-4xl w-full p-8 md:p-12 lg:p-16 
                   transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-[1.01]" 
        style={{ zIndex: 10 }} // Ensure card is above surrounding elements if any
      >
        
        {/* Decorative pale yellow circle/shape in the top right corner */}
        <div 
          className="absolute top-0 right-0 w-24 h-24 bg-yellow-100 rounded-full opacity-60" 
          style={{ 
            clipPath: 'circle(75% at 100% 0%)', 
            zIndex: 0 
          }}
        ></div>

        {/* Decorative pale gray/white shape in the bottom left corner */}
        <div 
          className="absolute bottom-0 left-0 w-24 h-24 bg-gray-50 rounded-full opacity-60" 
          style={{ 
            clipPath: 'circle(75% at 0% 100%)', 
            zIndex: 0 
          }}
        ></div>

        {/* Content wrapper */}
        <div className="relative z-10 text-center">
          
          {/* Main Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Still have questions?
          </h2>
          
          {/* Subtext */}
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Can't find the answer you're looking for? Our friendly support team is here to help you 24/7.
          </p>
          
          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
<a href="https://my.360webhostings.com/index.php?rp=/login" target="_blank" rel="noopener noreferrer">
    {/* Live Chat Button (Dark Brown/Black) - Added transition and hover:shadow-lg */}
    <button className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white 
                                bg-gray-800 hover:bg-gray-900 
                                transition duration-300 ease-in-out hover:shadow-lg min-w-[180px] hover:-translate-y-0.5">
      <ChatBubbleLeftIcon className="h-5 w-5 mr-2" />
      Live Chat
    </button>
</a>
            
<a href="https://my.360webhostings.com/index.php?rp=/login" target="_blank" rel="noopener noreferrer">
    {/* Submit Ticket Button (Orange/Yellow) - Added transition and hover:shadow-lg */}
    <button className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-gray-800 
                                bg-yellow-500 hover:bg-yellow-600 
                                transition duration-300 ease-in-out hover:shadow-lg min-w-[180px] hover:-translate-y-0.5">
      <EnvelopeIcon className="h-5 w-5 mr-2" />
      Submit Ticket
    </button>
</a>
            
<a href="https://my.360webhostings.com/index.php?rp=/knowledgebase" target="_blank" rel="noopener noreferrer">
    {/* Read Docs Button (White/Light) - Added transition, hover:border-gray-400 and hover:shadow-md */}
    <button className="flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl shadow-sm text-gray-700 
                                bg-white hover:bg-gray-50 hover:border-gray-400
                                transition duration-300 ease-in-out hover:shadow-md min-w-[180px] hover:-translate-y-0.5">
      <BookOpenIcon className="h-5 w-5 mr-2" />
      Read Docs
    </button>
</a>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FAQContact;