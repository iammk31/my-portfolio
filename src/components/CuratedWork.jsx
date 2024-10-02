import React from 'react';

const CardsSection = () => {
  const cardsContent = [
    {
      title: 'Curating AR experiences while travelling',
      description: 'Onboarding increased to 12%. New user signups increased by 32%. Engagement increased by 20%.',
      buttonLabel: 'Learn More',
      imgSrc: 'https://via.placeholder.com/400x300', 
    },
    {
      title: 'Building profitable dropshipping dashboard',
      description: 'How to start your own profitable business in a few weeks, including MRR growth of 25%.',
      buttonLabel: 'Explore',
      imgSrc: 'https://via.placeholder.com/400x300', 
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-4 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl font-bold mb-4">Our Work</h2>
        <p className="text-gray-400">Compilation of projects we’re proud of</p>
      </div>

      <div className="max-w-screen-sm mx-auto">
        {cardsContent.map((card, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row items-center lg:items-stretch p-6 lg:p-8 mb-8 lg:mb-12">
            
            <div className="lg:w-2/3 w-full lg:pr-8">
              <h3 className="text-white text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-400 mb-6">{card.description}</p>
              <button className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100">
                {card.buttonLabel}
              </button>
            </div>

            <div className="lg:w-1/3 w-full lg:mt-0 mt-6">
              <img src={card.imgSrc} alt={card.title} className="rounded-lg object-cover w-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;