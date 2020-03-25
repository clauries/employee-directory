import React from "react";
import "./style.css";

function ResultsTable(props) {

    const dateFormat = require('dateformat');

    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {props.persons.map((person, index) => {
                    return (
                        <tr key={index}>
                            <td><img src={person.picture.medium} alt={person.name.last} /></td>
                            <td>{person.name.first} {person.name.last}</td>
                            <td>{person.phone}</td>
                            <td>{person.email}</td>
                            <td>{dateFormat(person.dob.date, 'mediumDate')}</td>
                        </tr>
                    )
                })}
            </tbody>


        </table>
    )
}

export default ResultsTable;