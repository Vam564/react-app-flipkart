import React from 'react'

const Form = ({handleInput,addEmployee,deleteEmployees}) => {
    return (
        <>
            <label htmlFor="ide">Employee Id</label>
            <input type="text" onChange={(e) => handleInput(e)} className="form-control" id="name" placeholder="Enter name" />
            <label htmlFor="ide">Salary</label>
            <input type="text" onChange={(e) => handleInput(e)} className="form-control" id="salary" placeholder="Enter salary" />
            <div className="mt-2">
            <button type="button " onClick={() => addEmployee()} className="btn btn-primary mr-2 ">Add</button>
            <button type="button" onClick={() => deleteEmployees()} className="btn btn-danger">Delete</button>
            </div>
        </>
    )
}

export default Form
