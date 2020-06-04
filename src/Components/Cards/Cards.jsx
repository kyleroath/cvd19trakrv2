import React from 'react'

import CountUp from 'react-countup'

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}, daily, country}) => {

    const presentDay = daily[daily.length - 1]
    const prevDay = daily[daily.length -2]


    if(!confirmed || !daily.length) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div id="wrapper" className="max-w-xl px-4 pb-12 mx-auto">
            <div className="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
                <div className="flex flex-col justify-center px-4 py-4 bg-white border border-gray-300 rounded">
                    <div>
                        {!country && <p className="flex items-center justify-end text-yellow-500 text-md">
                                <span className="font-bold"><CountUp start={0} end={Math.round([(presentDay.confirmed - prevDay.confirmed) / presentDay.confirmed] * 100)} duration={2.5} separator="," />%</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path className="heroicon-ui" d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"/></svg>
                            </p>}
                        <div>
                            <p className="flex items-center justify-center text-yellow-500 text-md">
                                <span className="font-bold">Infections</span>
                            </p>
                        </div>
                        <p className="text-3xl font-semibold text-center text-gray-800">
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </p>
                        <p className="text-lg text-center text-gray-500">{new Date(lastUpdate).toDateString()}</p>
                    </div>
                </div>
    
                <div className="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
                    <div>
                        {!country && <p className="flex items-center justify-end text-green-500 text-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path className="heroicon-ui" d="M17 11a1 1 0 010 2H7a1 1 0 010-2h10z"/></svg>
                        </p>}
                        <div>
                            <p className="flex items-center justify-center text-green-500 text-md">
                                <span className="font-bold">Recoveries</span>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path className="heroicon-ui" d="M20 9a1 1 0 012 0v8a1 1 0 01-1 1h-8a1 1 0 010-2h5.59L13 10.41l-3.3 3.3a1 1 0 01-1.4 0l-6-6a1 1 0 011.4-1.42L9 11.6l3.3-3.3a1 1 0 011.4 0l6.3 6.3V9z"/></svg> */}
                            </p>
                        </div>
                        <p className="text-3xl font-semibold text-center text-gray-800">
                        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </p>
                        <p className="text-lg text-center text-gray-500">{new Date(lastUpdate).toDateString()}</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0">
                    <div>
                            {!country && <p className="flex items-center justify-end text-red-500 text-md">
                            <span className="font-bold"><CountUp start={0} end={Math.round([(presentDay.deaths - prevDay.deaths) / presentDay.deaths] * 100)} duration={2.5} separator="," />%</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path className="heroicon-ui" d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"/></svg>
                            </p>}
                        <div>
                            <p className="flex items-center justify-center text-red-500 text-md">
                                <span className="font-bold">Deaths</span>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path className="heroicon-ui" d="M17 11a1 1 0 010 2H7a1 1 0 010-2h10z"/></svg> */}
                            </p>
                        </div>
                        <p className="text-3xl font-semibold text-center text-gray-800">
                        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </p>
                        <p className="text-lg text-center text-gray-500">{new Date(lastUpdate).toDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards