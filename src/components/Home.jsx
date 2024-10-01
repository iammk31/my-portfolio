import React from 'react';

const Home = () => {
  return (
    <>

      <header id="home" className="relative w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center pt-16 md:pt-20 lg:pt-24">
        <div className="relative z-10 text-center">
          <div className="mb-4">
            <span className="text-xs md:text-sm lg:text-base bg-green-600 px-4 py-1 rounded-full">Available for opportunities</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to my digital humble abode</h1>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg mb-6">I'm an independent developer. My interest lies in developing web and user experience.</p>
          <div className="flex space-x-4 justify-center">
            <button className="px-6 py-2 text-sm md:text-base lg:text-lg bg-blue-600 rounded-full hover:bg-blue-700">
              Let's talk
            </button>
            <button className="px-6 py-2 text-sm md:text-base lg:text-lg border border-white rounded-full hover:bg-white hover:text-black">
              Get Template
            </button>
          </div>
        </div>

        <footer className="absolute bottom-4 w-full">
          <div className="flex justify-center space-x-4">
            <img src="disney-logo.svg" alt="Disney" className="h-6 md:h-8" />
            <img src="airbnb-logo.svg" alt="Airbnb" className="h-6 md:h-8" />
            <img src="microsoft-logo.svg" alt="Microsoft" className="h-6 md:h-8" />
            <img src="duolingo-logo.svg" alt="Duolingo" className="h-6 md:h-8" />
            <img src="netflix-logo.svg" alt="Netflix" className="h-6 md:h-8" />
          </div>
        </footer>
      </header>
    </>
  );
}

export default Home;
