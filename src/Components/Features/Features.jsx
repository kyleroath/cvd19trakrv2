import React from 'react'

const Features = props => {
    return (
        <section className="text-gray-700 body-font">
  <div className="container px-5 py-24 mx-auto justify-center">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Latest tips!
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Stay away from people who are coughing or sneezing.</h2>
          <p className="leading-relaxed text-base">Since COVID-19 is a respiratory infection, coughing and sneezing are common symptoms. Additionally, coughing and sneezing both release the virus into the air, so they may increase your risk of infection...</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">learn more
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Wash your hands with soap and water to minimize your infection risk.</h2>
          <p className="leading-relaxed text-base">The best way to prevent COVID-19 is to wash your hands as often as possible. Wet your hands with warm water, then apply a mild soap. Work the soap into a lather for 20-30 seconds...</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">learn more
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Wear a cloth mask or cover over your nose and mouth when in public.</h2>
          <p className="leading-relaxed text-base">The CDC recommends even healthy people in the US wear cloth coverings when expecting to encounter others in public, like when you are going to the grocery store or using public transportation...</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">learn more
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Features