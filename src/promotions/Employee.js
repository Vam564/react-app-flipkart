import React from 'react'

const Employee=({
    employee:
    {
        name,
        salary,
        isPromoted
    },
    index,
    updateData
})=> {
    return (
        <>
            <li className="list-group-item ">
                <div className="row">
                    <div className="col-3">{name}</div>
                    <div className="col-3">${salary}</div>
                    <div className="col-3"><input type="checkbox" onChange={(e) => updateData(e, index)} checked={isPromoted}></input>{!!isPromoted ? 'promoted' : 'not promoted'}</div>
                </div>
            </li>
        </>
    )
}

export default Employee
