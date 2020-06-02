import React from 'react'
import {Header, Hero, Features, Footer, Alert, Cards, Chart} from './Components'
import { fetchData } from './api'

class App extends React.Component {
    state = {
        started: false,
        alerted: false,
        data: {},
        country: '',
        shortcountry: ''
    }
    async componentDidMount () {
        const fetchedData = await fetchData()
        this.setState({data: fetchedData})
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({data: fetchedData, country})
    }

    handleAlertClose = () => {
        this.setState({alerted: false})
    }
    handleAlertOpen = () => {
        this.setState({alerted: true})
    }

    render() {
        const {started, alerted, data, country, graph} = this.state
        return (
            <div>
                <Header country={country}/>
                {alerted && <Alert change={this.handleAlertClose}/>}
                {!started && <Hero change={this.handleAlertOpen} handleCountryChange={this.handleCountryChange}/>}
                <Cards data={data}/>
                <Chart data={data} country={country}/>
                <Features/>
                <Footer change={this.handleAlertOpen}/>
            </div>
        )
    }
}

export default App