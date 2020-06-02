import React from 'react'

const Header = ({country}) => {
    return (
        <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            {/* <button className="mr-5 hover:text-gray-900">F.A.Q</button> */}
            </nav>
            <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0" href="">
            {/* <img src="https://www.un.org/sites/un2.un.org/files/covid19_response_icon.svg" alt="Logo" width="75" height="75"></img> */}
            <img src="https://image.flaticon.com/icons/svg/2950/2950049.svg" alt="Logo" width="75" height="75"></img>
            <span className="ml-3 text-xl">covid-19 | trakr</span>
            </div>
            <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            {/* {country.length && <img src={`https://www.countryflags.io/${country}/shiny/32.png`} alt="countryflag" width='32' height='24'></img>}
            {!country.length && <img src="https://image.flaticon.com/icons/svg/921/921448.svg" alt="countryflag" width='32' height='32'></img>}
            <span className="m-2">Global</span> */}
            </div>
        </div>
    </header>
    )
}

export default Header