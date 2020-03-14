import React, { Component } from 'react'

export default class PageContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            dataCache: [],
            key: "",
            value: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearFilter = this.clearFilter.bind(this)
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.page !== this.props.page) {
            this.getData()
        }
    }

    getData() {
        fetch(`https://swapi.co/api/${this.props.page}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => this.setState({ 
            data: data.results,
            dataCache: data.results 
        }))
        .catch(error => console.log(`Error fetching data for ${this.props.page} `, error)) 
    }

    renderData() {
        return this.state.data.map(entry => {
            const entryDisplay = []
            entryDisplay.push(<h3>{entry.name}</h3>)
            for (let key in entry) {
                entryDisplay.push(<p>{key}: {entry[key]}</p>)
            }
            entryDisplay.push(<br />)
            return entryDisplay
        })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        const filteredData = this.state.dataCache.filter(entry => entry[this.state.key] === this.state.value)
        this.setState({ data: filteredData })
    }

    clearFilter() {
        this.setState({
            data: this.state.dataCache,
            key: "",
            value: ""
        })
    }

    render() {
        return (
            <div className="page-content-wrapper">
                <h2>{this.props.page[0].toUpperCase() + this.props.page.slice(1)}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="key" placeholder="Key" value={this.state.key} onChange={this.handleChange} />
                    <input type="text" name="value" placeholder="Value" value={this.state.value} onChange={this.handleChange}/>
                    <button type="submit">Filter Results</button>
                    <button type="button" onClick={this.clearFilter}>Clear Filter</button>
                </form>
                <br />
                {this.renderData()}
            </div>
        )
    }
}