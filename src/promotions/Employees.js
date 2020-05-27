import React from 'react'
import Employee from './Employee'

const Employees = ({employees,updateData}) => {
    return (
        <>
            {!employees.length ? (
                <div className="alert alert-danger" role="alert">
                    No records found. Please add new item below </div>
            ) : (
                    <ul>
                        {employees.map((employee, index) =>
                            <Employee employee={employee} index={index}updateData={updateData} ></Employee>
                        )}
                    </ul>
                )}
        </>
    )
}

export default Employees
