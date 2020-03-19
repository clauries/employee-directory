import React from "react";
import "./style.css";

function SearchForm() {
    return (
        <form>
            <div className="row justify-content-center">
                <div className="col-8">
                    <input type="text" className="form-control" placeholder="Employee's name" />
                </div>
                <button type="button" className="btn btn-success">Search</button>
            </div>
        </form>
    )
}

export default SearchForm;