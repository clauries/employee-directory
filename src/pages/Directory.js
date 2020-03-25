import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import ResultsTable from "../components/ResultsTable";


class Directory extends Component {

    state = {
        persons: []
    }


    componentDidMount() {
        API.getAllEmpoyees()
            .then(res => {
                // console.log("Directory res", res);
                const persons = res.data.results;
                this.setState({ persons });
                
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        if( event.target.value.length < 1 ) {
            API.getAllEmpoyees()
            .then(res => {
                // console.log("Directory res", res);
                const persons = res.data.results;
                this.setState({ persons });
                
            })
            .catch(err => console.log(err));
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const searchTerm = document.getElementById('searchedPerson').value.toLowerCase();
        const filteredPersons = this.state.persons.filter(person => {
            const lowerPerson = person.name.first.toLowerCase()
            if (lowerPerson === searchTerm) {
                return person;
            }
        });
        this.setState({ persons: filteredPersons });
  
    };

    render() {
        return (
            <div id="mainContent">
                <SearchForm 
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                <ResultsTable persons={this.state.persons} index={this.state.index} />
            </div>
        )
    }

}

export default Directory;