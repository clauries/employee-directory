import React, { Component } from "react";
import API from "../utils/API";


class Directory extends Component {
    componentDidMount() {
        API.getAllEmpoyees()
            .then(res => {
                console.log("res", res);
                //this.setState({ names: res.data.message });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div id="mainContent">
                <p>Hello world</p>
            </div>
        )
    }

}

export default Directory;