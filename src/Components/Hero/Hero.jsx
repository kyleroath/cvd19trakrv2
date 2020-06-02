import React from 'react'
import Info from './Content'
import Selector from './Selector'

const Hero = ({change, handleCountryChange}) => {
    const {tagline, desc} = Info

    return (
            <section className="text-gray-700 body-font">
                <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
                    {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://www.countryflags.io/us/shiny/64.png"/> */}
                    <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{tagline}</h1>
                    <p className="mb-8 leading-relaxed">{desc}</p>
                    <div className="flex justify-center">
                        {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={change}>Get started</button> */}
                        <Selector handleCountryChange={handleCountryChange}/>
                    </div>
                    </div>
                </div>
            </section>

    )
}

export default Hero