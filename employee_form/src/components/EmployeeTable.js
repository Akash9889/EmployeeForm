import React from 'react'
import {connect} from 'react-redux'

import '../stylesheets/table.css'

function EmployeeTable(props) {
    const headerFields = props.headers.map( (element) => (<th key={element}> {element.toUpperCase()}</th>))
    
    const usersData = props.entries.map(user => {
        return (
            <tr key = {user.id}>
                <td>{user.id}</td>
                <td>{user.name.toUpperCase()}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phoneNo}</td>
            </tr>
        ) 
    })

    
    return (
        <div>
            <h2>Employee Data</h2>
            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                    <tr>
                        {headerFields}
                    </tr>
                    </thead>
                    <tbody>
                        {usersData}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        headers: state.employee.headers,
        entries: state.employee.entries
    }
}

export default  connect(mapStateToProps)(EmployeeTable)