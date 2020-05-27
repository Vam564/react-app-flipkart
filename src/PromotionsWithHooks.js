import React, { useState, useEffect } from 'react'
const PromotionsWithHooks = () => {
    const [employees, setEmployees] = useState([])
    const [isAPILoaded, setIsAPILoaded] = useState(false)
    const [payload, setPayload] = useState({
        name: "",
        isPromoted: true,
        salary: ""
    })
    const [totalSalaryCredited, setTotalSalaryCredited] = useState(0)
    const [act, setAct] = useState(0)
    const [edit, setEdit] = useState({
        data:{
            name:"",
            isPromoted:true,
            salary:''
        }
    })
    useEffect(() => {
        fetch('https://jsonblob.com/api/8005ded1-8918-11ea-813a-59c9a55087c0').then(response => response.json()).then(json => {
            setTimeout(() => {
                setEmployees([...json])
                setIsAPILoaded(true)
            }, 2000)
        })
    }, []);

    useEffect((prevState) => {
        setTotalSalaryCredited(employees.reduce((acc, item) => acc + parseInt(item.salary), 0))
    }, [employees])

    const updateData = (e, index) => {
        //const { employees } = state;
        employees[index].isPromoted = e.target.checked;
        setEmployees([...employees])
    }
    const handleInput = (e) => {
        const { value, id } = e.target;
        setPayload({ ...payload, [id]: value })
    }
    const addEmployee = () => {
        //const { employees, payload } = state
        setEmployees([...employees, payload])
    }
    const deleteEmployees = () => {
        setEmployees([...employees.filter(employee => !employee.isPromoted)])
    }
    const editEmployee = (index) => {
        console.log(employees[index]);
        let data=employees[index];
        setEdit({...edit,data})
    }
    let checked = employees.filter(employee => employee.isPromoted);
    return (
        <>
            
            {!isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" />) : (
                <div>
                    <button type="button" className="btn btn-primary">
                        Total Salary <span className="badge badge-light">${
                            totalSalaryCredited
                        }</span>
                    </button>
                    <div className="container">
                        <div className="jumbotron text-center"><h1>Employee Promotion Details</h1></div>
                        {!checked.length ? (
                            <div className="alert alert-danger" role="alert">
                                No checked item is found. Please check  item below
                            </div>) :
                            (
                                <div className="alert alert-primary" role="alert">
                                    {checked.length} items are checked
                                </div>
                            )
                        }
                        <pre>
                            {JSON.stringify(edit,null,4)}
                        </pre>
                        {!employees.length ? (
                            <div className="alert alert-danger" role="alert">
                                No records found. Please add new item below </div>
                        ) : (
                                <ul>
                                    {employees.map(({ name, isPromoted, salary }, index) =>
                                        <li className="list-group-item ">
                                            <div className="row">
                                                <div className="col-3">{name}</div>
                                                <div className="col-3">${salary}</div>
                                                <div className="col-3"><input type="checkbox" onChange={(e) => updateData(e, index)} checked={isPromoted}></input>{!!isPromoted ? 'promoted' : 'not promoted'}</div>
                                                <div className="col-3"><button className="btn btn-primary" onClick={() =>editEmployee(index)}>Edit</button></div>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            )}
                    </div>
                    <div className="row ">
                        <div class="col ml-3">
                            <label htmlFor="ide">Employee Id</label>
                            <input type="text" onChange={(e) => handleInput(e)} className="form-control" id="name" placeholder="Enter name" value="enter"/>
                            <label htmlFor="ide">Salary</label>
                            <input type="text" onChange={(e) => handleInput(e)} className="form-control" id="salary" placeholder="Enter salary" value={edit.data.salary}/>
                            <button type="button" onClick={() => addEmployee()} className="btn btn-primary">Add</button>
                            <button type="button" onClick={() => deleteEmployees()} className="btn btn-danger">Delete</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-primary">
                                Total Salary <span class="badge badge-light">{
                                    totalSalaryCredited
                                }</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default PromotionsWithHooks

