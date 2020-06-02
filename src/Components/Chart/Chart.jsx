import React, {useState, useEffect} from 'react'
import {Line, Bar} from 'react-chartjs-2'

import {fetchDailyData} from '../../api'


const Chart = ({ data: {confirmed, deaths, recovered}, country}) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        // eslint-disable-next-line 
        const fetchAPI = (async () => {
            const initialDailyData = await fetchDailyData()
            setDailyData(initialDailyData)
        })()
    }, [])

    const lineChart = (
        dailyData.length 
        ? (
        <Line 
         data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
                data: dailyData.map(({ confirmed }) => confirmed),
                label: 'Infected',
                borderColor: 'rgba(245,215,110, 0.5)',
                fill: true
            }, {
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true
            }]
        }}
        
        />) : null
    )

    const barChart = (
        confirmed 
        ? (
            <Bar 
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['rgba(245,215,110, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
                    data:[confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend: { display: false },
                title: {display: true, text:`Current state in ${country}`}
            }}
            />
        ) : null
    )


    return (
        <div className="max-w-6xl mx-auto">
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart