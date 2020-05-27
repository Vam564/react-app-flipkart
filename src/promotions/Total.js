import React from 'react'

const Total = ({totalSalaryCredited}) => {
    return (
        <>
            <button type="button" className="btn btn-primary">
                Total Salary <span className="badge badge-light">${
                    totalSalaryCredited
                }</span>
            </button>
        </>
    )
}

export default Total
