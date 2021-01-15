import React from 'react';

const DaySelectInDay = (props) => {
    return (
        <form onSubmit={props.handleSubmitDay} className="form">
            <h3 className="page-header">Select day</h3>
            <label>Day number</label>
            <input type="number" name="clickedDay" min="1" max="28" onChange={props.handleChange} ></input>
            <button type="submit">Submit</button>
        </form>
    )
}


export default DaySelectInDay;