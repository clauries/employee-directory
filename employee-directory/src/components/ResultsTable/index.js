import React from "react";
import "./style.css";

function ResultsTable() {
    return (
        <table>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Date of Birth</th>
            </tr>
            <tr>
                <td>#</td>
                <td>Jill Smith</td>
                <td>999-999-9999</td>
                <td>email@email.com</td>
                <td>01/01/01</td>
            </tr>
        </table>
    )
}

export default ResultsTable;