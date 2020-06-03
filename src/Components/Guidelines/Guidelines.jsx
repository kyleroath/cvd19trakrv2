import React from 'react'

import {InfoOne, InfoTwo, InfoThree} from './Info'

const Guidelines = props => {
    return (
      <div className="py-20">
      <section className="text-gray-700 body-font">
            <div className="container px-5 mx-auto justify-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Best practices to avoid COVID-19 infection
              </h1>
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <img src="https://image.flaticon.com/icons/svg/2798/2798589.svg" alt="sneeze"/>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Stay away from people who are coughing or sneezing.</h2>
                    <p className="leading-relaxed text-base">Since COVID-19 is a respiratory infection, coughing and sneezing are common symptoms. Additionally, coughing and sneezing both release the virus into the air, so they may increase your risk of infection...</p>
                    <div className="relative hover-trigger">
                      <a className="mt-3 text-indigo-500 inline-flex items-center">learn more
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <div className="sm:absolute bg-white border border-grey-100 px-4 py-2 hover-target">
                        <InfoOne/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <img src="https://image.flaticon.com/icons/svg/2913/2913564.svg" alt="washinghands"/>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Wash your hands with soap and water to minimize your infection risk.</h2>
                    <p className="leading-relaxed text-base">The best way to prevent COVID-19 is to wash your hands as often as possible. Wet your hands with warm water, then apply a mild soap. Work the soap into a lather for 20-30 seconds...</p>
                    <div className="relative hover-trigger">
                    <a className="mt-3 text-indigo-500 inline-flex items-center">learn more
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <div className="sm:absolute bg-white border border-grey-100 px-4 py-2 hover-target">
                      <InfoTwo/>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <img src="https://image.flaticon.com/icons/svg/3017/3017381.svg" alt="facemask"/>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Wear a cloth mask or cover over your nose and mouth when in public.</h2>
                    <p className="leading-relaxed text-base">The CDC recommends even healthy people in the US wear cloth coverings when expecting to encounter others in public, like when you are going to the grocery store or using public transportation...</p>
                    <div className="relative hover-trigger">
                    <a className="mt-3 text-indigo-500 inline-flex items-center">learn more
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <div className="sm:absolute bg-white border border-grey-100 px-4 py-2 hover-target">
                      <InfoThree/>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
        </div>
    )
}

const GuidelineOne = props => {
  return (
        <div className="relative hover-trigger">
          <a className="mt-3 text-indigo-500 inline-flex items-center">learn more
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div className="absolute bg-white border border-grey-100 px-4 py-2 hover-target">
            <InfoOne/>
          </div>
        </div>
  )
}

export default Guidelines