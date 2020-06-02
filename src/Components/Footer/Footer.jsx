import React from 'react'

const Footer = ({change}) => {
    return (
        <footer className="text-gray-700 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img src="https://image.flaticon.com/icons/svg/2950/2950049.svg" alt="Logo" width="50" height="50"></img>
        <span className="ml-3 text-xl">cvd19-trakr</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">The latest statistics globally on the virus known as COVID-19</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resources</h2>
        <nav className="list-none mb-10">
          <ul>
            <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html" target="_blank">• Self-Symptom Checker</a></li>
            <li><a href="" onClick={(e) => { 
              e.preventDefault()
              change()
              }}>• FAQ</a></li>
          </ul>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Information</h2>
        <nav className="list-none mb-10">
          <ul>
            <li><a href="https://www.coronavirus.gov/">• Coronavirus.gov</a></li>
            <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">• CDC</a></li>
            <li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">• WHO</a></li>
          </ul>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact</h2>
        <nav className="list-none mb-10">
          <ul>
            <li><a href="mailto:kyleroath@msn.com">• Email</a></li>
          </ul>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Credits</h2>
        <nav className="list-none mb-10">
          <ul>
            <li><a href='https://github.com/mathdroid'>• API - Mathdroid</a></li>
            <li><a href='https://github.com/reactjs/react-chartjs'>• chart.js </a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-200">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2020
        <a href="https://twitter.com" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">cvd19-trakr</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        {/* <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a> */}
      </span>
    </div>
  </div>
</footer>
    )
}

export default Footer