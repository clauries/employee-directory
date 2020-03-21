import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import ResultsTable from "../components/ResultsTable";


class Directory extends Component {

    state = {
        search: "",
        persons: [],
        error: ""
    }


    componentDidMount() {
        API.getAllEmpoyees()
            .then(res => {
                console.log("res", res);
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getEmployeesByName(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div id="mainContent">
                <SearchForm />
                <ResultsTable persons={this.state.persons} />
            </div>
        )
    }

}

export default Directory;