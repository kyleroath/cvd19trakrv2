import React from 'react'

import CountUp from 'react-countup'

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div id="wrapper" className="max-w-xl px-4 py-4 mx-auto">
            <div className="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
                <div className="flex flex-col justify-center px-4 py-4 bg-white border border-gray-300 rounded">
                    <div>
                        <div>
                            <p className="flex items-center justify-center text-yellow-500 text-md">
                                <span className="font-bold">Infections</span>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path className="heroicon-ui" d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"/></svg> */}
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

// Original style, testing different ones. Disabled for now.

// const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
//     if(!confirmed) {
//         return (
//             <div>Loading...</div>
//         )
//     }
//     return (
//         <div classNameName="container w-full mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center">
//             <div className="max-w-sm rounded overflow-hidden shadow-lg text-center border border-yellow-500">
//                 <div className="px-10 py-5">
//                     <div className="font-bold text-xl mb-2">Infections</div>
//                     <CountUp  start={0} end={confirmed.value} duration={2.5} separator="," />
//                     <p className="text-gray-700 text-base">as of {new Date(lastUpdate).toDateString()}</p>
//                 </div>
//             </div>
//             <div className="m-5 max-w-sm rounded overflow-hidden shadow-lg text-center border border-green-500">
//                 <div className="px-10 py-5">
//                     <div className="font-bold text-xl mb-2">Recoveries</div>
//                     <CountUp  start={0} end={recovered.value} duration={2.5} separator="," />
//                     <p className="text-gray-700 text-base">as of {new Date(lastUpdate).toDateString()}</p>
//                 </div>
//             </div>
//             <div className="max-w-sm rounded overflow-hidden shadow-lg text-center border border-red-500">
//                 <div className="px-10 py-5">
//                     <div className="font-bold text-xl mb-2">Deaths</div>
//                     <CountUp  start={0} end={deaths.value} duration={2.5} separator="," />
//                     <p className="text-gray-700 text-base">as of {new Date(lastUpdate).toDateString()}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Cards