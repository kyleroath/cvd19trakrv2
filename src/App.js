import React from 'react'
import {Header, Hero, Guidelines, Footer, Alert, Cards, Chart} from './Components'
import { fetchData, fetchDailyData } from './api'

class App extends React.Component {
    state = {
        started: false,
        alerted: false,
        data: {},
        country: '',
        dailydata: []
    }
    async componentDidMount () {
        const fetchedData = await fetchData()
        this.setState({data: fetchedData})
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({data: fetchedData, country})
    }
    handleDailyData = async () => {
        const fetchedData = await fetchDailyData()
        this.setState({dailydata: fetchedData})
    }

    handleAlertClose = () => {
        this.setState({alerted: false})
    }
    handleAlertOpen = () => {
        this.setState({alerted: true})
    }

    render() {
        const {started, alerted, data, country, graph, dailydata} = this.state
        return (
            <div>
                <Header country={country}/>
                {alerted && <Alert change={this.handleAlertClose}/>}
                {!started && <Hero change={this.handleAlertOpen} handleCountryChange={this.handleCountryChange}/>}
                <Cards data={data} daily={dailydata} country={country}/>
                <Chart data={data} country={country} handleDaily={this.handleDailyData} daily={dailydata}/>
                <Guidelines/>
                <Footer change={this.handleAlertOpen}/>
            </div>
        )
    }
}

export default App