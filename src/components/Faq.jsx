import React from 'react';
import FaqDropdown from './FaqDropdown';

export default function Faq() {
  const faqData = [
    {
      title: 'What is Bookmark?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita adipisci obcaecati libero in ducimus sint ipsum dolore? Nulla, porro fugiat.',
    },
    {
      title: 'How can I request a new browser?',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro at veniam natus debitis dolore quisquam eos! Maiores doloribus fugit quam, sint pariatur mollitia, perferendis laudantium itaque odit voluptas non cupiditate?',
    },
    {
      title: 'Is there a mobile app?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero, cupiditate alias vitae doloribus possimus!',
    },
    {
      title: 'What about other Chromium browsers?',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsa tempore optio reiciendis possimus voluptatibus corporis unde beatae voluptates, dolores provident, dignissimos molestiae!',
    },
  ];
  return (
    <div className="px-8 mb-28 max-w-[550px] mx-auto">
      <div className="mb-10 text-center">
        <h3 className="pb-3 text-2xl font-medium text-gray-800">
          Frequently Asked Questions
        </h3>
        <p className="text-sm text-gray-600 md:text-base">
          Here are some of our FAQs. if you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className="mb-10">
        {faqData.map((faq) => {
          return (
            <div key={faq.title}>
              <FaqDropdown title={faq.title} description={faq.description} />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <a
          href="#"
          className="px-4 py-2 text-sm text-white rounded bg-soft-blue"
        >
          More Info
        </a>
      </div>
    </div>
  );
}
