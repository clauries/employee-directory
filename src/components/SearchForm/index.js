import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <form>
            <div className="row justify-content-center">
                <div className="col-8">
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="searchedPerson"
                        type="text"
                        className="form-control"
                        placeholder="Employee's name"
                        id="searchedPerson"
                    />
                </div>
                <button
                    type="button"
                    onClick={props.handleFormSubmit}
                    className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm;