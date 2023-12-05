import React from 'react';

const Table = ({ data }) => {
    return (
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Eamil</th>
                <th>Gender</th>
            </tr>
            {
                data.map((item) =>{
                    return(
                        <tr>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
            </tr>
                    )
                })
            }
        </table>
    )
}

export default Table;