import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import ResultsTable from "../components/ResultsTable";


class Directory extends Component {
    
    state = {
        search: "",
        persons: [],
        error:""
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

    render() {
        return (
            <div id="mainContent">
                <SearchForm />
                <ResultsTable persons={this.state.persons}/>
            </div>
        )
    }

}

export default Directory;