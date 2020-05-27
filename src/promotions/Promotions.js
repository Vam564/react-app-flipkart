import React, { useState, useEffect ,useReducer } from 'react'
import Loader from '../MyShow/Loader'
import Total from './Total'
import Employees from './Employees'
import Form from './Form'

const Promotions =()=> {

    var INITIAL_STATE = {
        employees:[],
        isAPILoaded:false,
        payload:{
            name: "",
            isPromoted: true,
            salary: ""
        },
        totalSalaryCredited:0
    }

    const reducer = (state, action) => {
        const { type, payload ,employees,totalSalaryCredited,isAPILoaded} = action
        switch (type) {
            case 'API_DATA': {
                return {
                    ...state,
                    employees:employees,
                    isAPILoaded:isAPILoaded
                }
            }
            case 'UPDATE_DATA': {
                return {
                    ...state,
                    employees:employees
                }
            }
            case 'HANDLE_INPUT': {
                return {
                    ...state,
                    payload:payload
                }
            }
            case 'ADD_EMPLOYEE': {
                return {
                    ...state,
                    employees:employees
                }
            }
            case 'DELETE_EMPLOYEE': {
                return {
                    ...state,
                    employees:employees
                }
            }
            case 'TOTAL': {
                return {
                    ...state,
                    totalSalaryCredited:totalSalaryCredited
                }
            }
            default: {
                return state
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    let {employees,isAPILoaded,payload,totalSalaryCredited} = state
    useEffect(() => {
        fetch('https://jsonblob.com/api/8005ded1-8918-11ea-813a-59c9a55087c0').then(response => response.json()).then(json => {
            setTimeout(() => {
                employees=[...json]
                isAPILoaded=true
                dispatch({
                    type: 'API_DATA',
                    employees:[...json],
                    isAPILoaded:true
                })
            }, 1000)
        })
       
    }, []);
    
    useEffect((prevState) => {
        dispatch({
            type: 'TOTAL',
            totalSalaryCredited:employees.reduce((acc, item) => acc + parseInt(item.salary), 0)
        })
    }, [employees])
    
    const updateData = (e, index) => {
        employees[index].isPromoted = e.target.checked;
        dispatch({
            type: 'UPDATE_DATA',
            employees:[...employees]
        })
        employees[index].isPromoted = e.target.checked;
    }
    const handleInput = (e) => {
        const { value, id } = e.target;
        dispatch({
            type: 'HANDLE_INPUT',
            payload: {...payload, [id]: value}
        })
    }
    const addEmployee = () => {
        dispatch({
            type: 'ADD_EMPLOYEE',
            employees: [...employees, payload]
        })
    }
    const deleteEmployees = () => {
        dispatch({
            type: 'DELETE_EMPLOYEE',
            employees:[...employees.filter(employee => !employee.isPromoted)]
        })
    }
    
    let checked = employees.filter(employee => employee.isPromoted);
    
    
    return (
        <>
        
            {!isAPILoaded ? (<Loader></Loader>) : (
                <div>
                    
                    <div className="container mt-2 ml-2">
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
                        <Employees employees={employees} updateData={updateData}></Employees>
                    </div>
                    <div className="row ">
                        <div class="col ml-3">
                           <Form handleInput={handleInput} addEmployee={addEmployee} deleteEmployees={deleteEmployees}></Form>
                        </div>
                        <div class="col mt-5 ">
                            <Total totalSalaryCredited={totalSalaryCredited}></Total>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Promotions
