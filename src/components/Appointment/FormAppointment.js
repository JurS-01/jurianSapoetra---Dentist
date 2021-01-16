import React from 'react';



const FormAppointment = (props) => {
    return (
        <div>
            <h3 className="page-header">Add new appointment</h3>
            <form onSubmit={props.handleSubmitAppointment}>
                <input type="text" name="patientName" placeholder="name patient" onChange={props.handleChange} required ></input>
                <input type="text" name="patientSurname" placeholder="surname patient" onChange={props.handleChange} required ></input><br></br>
                <input type="text" name="patientId" placeholder="patient id" onChange={props.handleChange} required ></input><br></br>
                <input type="number" name="newDay" min="1" max="28" placeholder="day" onChange={props.handleChange} required ></input>
                <input type="number" name="newTime" min="7" max="16" placeholder="time" onChange={props.handleChange} required ></input><br></br>
                <select id="type" name="type" onChange={props.handleChange} required >
                    <option value="">type:</option>
                    <option value="check up">check up</option>
                    <option value="wisdom tooth removal">wisdom tooth removal</option>
                    <option value="teeth whitening">teeth whitening</option>
                    <option value="root canal treatment">root canal treatment</option>
                    <option value="fillings">fillings</option>
                </select><br></br>
                <select id="dentist" name="dentist" onChange={props.handleChange} required >
                    <option value="">dentist:</option>
                    <option value="Dr.Banner">Dr.Banner</option>
                    <option value="Dr.Parker">Dr.Parker</option>
                    <option value="Dr.Storm">Dr.Storm</option>
                    <option value="Dr.Richards">Dr.Richards</option>
                </select>
                <select id="assistant" name="assistant" onChange={props.handleChange} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>assistant:</option>
                    <option value="Matt Murdock">Mr.Murdock</option>
                    <option value="Jessica Jones">Ms.Jones</option>
                </select><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormAppointment


