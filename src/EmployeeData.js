import React from 'react';
class EmployeeData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],// Default Employee Data.
            isAPIloaded: false,
            payLoad: {
                name: '',
                isPromoted: true,
                salary: ''
            },
            totalSalaryCredited: 0
        }
    }
    componentDidMount() {
        fetch('https://jsonblob.com/api/15383482-892d-11ea-813a-314ab9e77f41').then(response => response.json()).then(json => {   
            setTimeout(() => {
                this.setState({
                    employees: [...json],
                    isAPIloaded: true
                })
            }, 1000)
        })

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.employees != this.state.employees) {
            this.setState({
                totalSalaryCredited: this.state.employees.reduce((acc, item) => acc + item.salary, 0)

            })
        }
        var count=0;
        if(this.state.employees.isPromoted==true){count++}

    }
    updateInput(e, index) {
        const { target: {
            value,
            id,
            checked
        } } = e;
        const { employees } = this.state
        employees[index].isPromoted = checked;
        this.setState({ employees: [...employees] })
    }
    handleInput(e) {
        const { target: {
            value,
            id,
        } } = e;
        this.setState({ payLoad: { ...this.state.payLoad, [id]: value } })

    }
    addEmployee() {
        const { employees, payLoad } = this.state;
        this.setState({ employees: [...employees, payLoad] })
    }
    deleteEmp() {
        let { employees } = this.state;
        this.setState({ employees: employees.filter(employee => !employee.isPromoted) });
    }
    updateEmployee(index, e) {

        const { employees } = this.state;

        employees.splice(employees.indexOf(index), 1, { ...employees[index] })

    }
    
    render() {
        const { employees, isAPIloaded, payLoad, totalSalaryCredited } = this.state;
        var count=0;
        return (
            <>
                {!isAPIloaded ? (<div className="d-flex justify-content-center"><img height="400px" width="800px" src="https://gifimage.net/wp-content/uploads/2017/11/gif-loaders-8.gif" /></div>) : (

                    <div class="container">
                        <div class="jumbotron text-center"><h1>Employee Promotion Details</h1></div>
                        {employees.isPromoted==true ? (
                            <div class="alert alert-danger" role="alert">
                            No item is checked. 
                            </div>
                        ) : (
                            <div class="alert alert-primary" role="alert">
                                     {count}
                            </div>
                        ) }
                        {!employees.length ? (
                            <div class="alert alert-danger" role="alert">
                                No Records Found. Please add items below.
                            </div>
                        ) : (
                                <ul>
                                    {employees.map(({ name, isPromoted, salary }, index) =>
                                        <li class="list-group-item ">
                                            <div class="row">
                                                <div class="col">{name}</div>
                                                <div class="col">{salary}</div>
                                                <div class="col"><input type="checkbox" onChange={(e) => this.updateInput(e, index)} checked={isPromoted}></input>{!!isPromoted ? 'Promoted' : 'Not Promoted'} </div>
                                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >
                                                    Update
                                        </button>
                                            </div>
                                        </li>

                                    )}
                                </ul>
                            )}
                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label for="name">Employee Name</label>
                                                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Employee Name" onChange={(e) => this.updateForm(e)} />

                                            </div>
                                            <div class="form-check">
                                                <input className="form-check-input" type="checkbox" id="promoted" onChange={(e) => this.updateForm(e)} />
                                                <label className="form-check-label" for="promoted">
                                                    Promoted
                                                    </label>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col">
                                    <form onSubmit={this.tableData}>
                                        <div className="form-group">
                                            <label htmlFor="name">Employee Name</label>
                                            <input class="form-control m-1" type="text" name="name" value={payLoad.name} onChange={(e) => this.handleInput(e)} id="name" placeholder="Enter Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="salary">Salary</label>
                                            <input class="form-control m-1" type="text" name="salary" value={payLoad.salary} onChange={(e) => this.handleInput(e)} id="salary" placeholder="Enter Salary" />
                                        </div>
                                        <div className="form-group">
                                            <input className="btn btn-success mr-2" type="button" onClick={() => this.addEmployee()} value="Add" />
                                            <button type="button" class="btn btn-danger" onClick={() => this.deleteEmp()}>Remove</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn btn-primary">
                                        Total Salary <span class="badge badge-light">₹{totalSalaryCredited}</span>
                                    </button>
                                </div>
                            </div>



                        </div>

                    </div>
                )}

            </>
        )
    }
}
export default EmployeeData;