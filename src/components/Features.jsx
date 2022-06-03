import React, { useState } from 'react';
import clsx from 'clsx';
import FeaturesCard from './FeaturesCard';
import IconChrome from './media/IconChrome';
import IconFirefox from './media/IconFirefox';
import IconOpera from './media/IconOpera';
import illustration1 from '../images/illustration-features-tab-1.svg';
import illustration2 from '../images/illustration-features-tab-2.svg';
import illustration3 from '../images/illustration-features-tab-3.svg';

const featuresExtension = [
  {
    title: 'Add to Chrome',
    minimumVersion: 'Minimum version 62',
    icon: <IconChrome />,
  },
  {
    title: 'Add to Firefox',
    minimumVersion: 'Minimum version 55',
    icon: <IconFirefox />,
  },
  {
    title: 'Add to Opera',
    minimumVersion: 'Minimum version 46',
    icon: <IconOpera />,
  },
];

const featuresTabs = [
  {
    title: 'Bookmark in one click',
    description: `Organize your bookmarks however you like. Our simple drag-and-drop
    interface gives you complete control over how you manage your
    favourite sites.`,
    infoLink: '#test',
  },
  {
    title: 'Intelegent search',
    description: `Our powerful search feature will help you fing saved sites in no tie at all. No need to trawl through all of your bookmarks`,
    infoLink: '#test',
  },
  {
    title: 'Share your bookmarks',
    description: `Easily share yuour bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`,
    infoLink: '#test',
  },
];

function FeaturesCardContainer({ children }) {
  return <div className="px-12">{children}</div>;
}

export default function Features() {
  const [activeFeatures, setActiveFeatures] = useState('simple-bookmarking');

  function handleFeaturesClick(e) {
    setActiveFeatures(e.target.id);
  }

  function renderTabs() {
    switch (activeFeatures) {
      case 'simple-bookmarking':
        return (
          <FeaturesTab
            title={featuresTabs[0].title}
            description={featuresTabs[0].description}
            infoLink={featuresTabs[0].infoLink}
          />
        );

      case 'speedy-searching':
        return (
          <FeaturesTab
            title={featuresTabs[1].title}
            description={featuresTabs[1].description}
            infoLink={featuresTabs[1].infoLink}
          />
        );

      case 'easy-sharing':
        return (
          <FeaturesTab
            title={featuresTabs[2].title}
            description={featuresTabs[2].description}
            infoLink={featuresTabs[2].infoLink}
          />
        );

      default:
        return (
          <FeaturesTab
            title={featuresTabs[0].title}
            description={featuresTabs[0].description}
            infoLink={featuresTabs[0].infoLink}
          />
        );
    }
  }

  function illustrationName() {
    switch (activeFeatures) {
      case 'simple-bookmarking':
        return illustration1;
      case 'speedy-searching':
        return illustration2;
      case 'easy-sharing':
        return illustration3;

      default:
        return illustration1;
    }
  }
  return (
    <div className="mb-36">
      <div className="px-8 mb-10 text-center md:mb-12">
        <div className="md:max-w-[550px] md:px-2 md:mx-auto">
          <h4 className="mb-2 text-2xl font-medium text-gray-800 md:text-3xl">
            Features
          </h4>
          <p className="text-sm leading-loose text-gray-400 md:text-lg">
            Our aim is to make it quick and easy for you to access your
            favourite webistes. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </div>

      <div className="items-baseline md:mb-14 mb-10 justify-center  md:grid md:grid-cols-3 md:max-w-[600px] md:mx-auto">
        <div className="border-t border-gray-200 md:border-t-0 md:border-b-2 md:w-full">
          <button
            onClick={(e) => handleFeaturesClick(e)}
            id="simple-bookmarking"
            className={`py-2 border-b-[3px] md:py-4 md:px-4 md:w-full border-y-transparent ${clsx(
              activeFeatures === 'simple-bookmarking' ? 'border-b-soft-red' : ''
            )} hover:text-soft-red`}
          >
            Simple Bookmarking
          </button>
        </div>
        <div className="border-t border-gray-200 md:w-full md:border-t-0 md:border-b-2">
          <button
            onClick={(e) => handleFeaturesClick(e)}
            id="speedy-searching"
            className={`py-2 border-b-[3px] md:py-4 md:w-full md:px-4 border-y-transparent ${clsx(
              activeFeatures === 'speedy-searching' ? 'border-b-soft-red' : ''
            )} hover:text-soft-red`}
          >
            Speedy Searching
          </button>
        </div>
        <div className="border-gray-200 border-y md:border-y-0 md:w-full md:border-b-2">
          <button
            onClick={(e) => handleFeaturesClick(e)}
            id="easy-sharing"
            className={`py-2 border-b-[3px] md:py-4 md:w-full md:px-4 border-y-transparent ${clsx(
              activeFeatures === 'easy-sharing' ? 'border-b-soft-red' : ''
            )} hover:text-soft-red`}
          >
            Easy Sharing
          </button>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 md:max-w-[1120px] mx-auto mb-24">
        <div className="max-w-[535px] max-h-[390px] md:justify-self-end md:mr-8">
          <img className="" src={illustrationName()} alt="" />
        </div>
        <div className="md:pt-16">{renderTabs()}</div>
      </div>
      <FeaturesCardContainer>
        <div className="mb-10 text-center md:max-w-[550px] mx-auto">
          <h4 className="mb-2 text-xl font-medium text-gray-800">
            Download the extension
          </h4>
          <p className="text-sm leading-relaxed text-gray-400 md:text-base">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-9 md:grid md:grid-cols-3 md:w-[912px] md:h-[430px] md:mx-auto">
          <FeaturesCard
            className="md:h-[fit-content] md:self-start"
            title={featuresExtension[0].title}
            minimumVersion={featuresExtension[0].minimumVersion}
            icon={featuresExtension[0].icon}
          />
          <FeaturesCard
            className="md:h-[fit-content] md:self-center"
            title={featuresExtension[1].title}
            minimumVersion={featuresExtension[1].minimumVersion}
            icon={featuresExtension[1].icon}
          />
          <FeaturesCard
            className="md:h-[fit-content] md:self-end"
            title={featuresExtension[2].title}
            minimumVersion={featuresExtension[2].minimumVersion}
            icon={featuresExtension[2].icon}
          />
        </div>
      </FeaturesCardContainer>
    </div>
  );
}
function FeaturesTab({ title, description, infoLink }) {
  return (
    <div className="px-8 text-center md:text-left md:max-w-[435px] md:ml-24 md:px-0">
      <h4 className="mb-2 text-xl font-medium text-gray-800 md:text-[2rem] md:mb-6">
        {title}
      </h4>
      <p className="text-sm leading-loose text-gray-400 md:mb-6 md:text-lg">
        {description}
      </p>
      <div className="hidden md:inline-block">
        <a
          href={infoLink}
          className="px-4 py-2 text-sm text-white rounded bg-soft-blue "
        >
          More Info
        </a>
      </div>
    </div>
  );
}
