import React from 'react';



const FormAppointment = (props) => {
    return (
        <div>
            <h3 className="page-header">Add new appointment</h3>
            <form onSubmit={props.handleSubmitAppointment}>
                <label>Patient</label>
                <input type="text" name="patientName" placeholder="name" onChange={props.handleChange} required ></input>
                <input type="text" name="patientSurname" placeholder="surname" onChange={props.handleChange} required ></input><br></br>
                <label>Patient id</label>
                <input type="text" name="patientId" onChange={props.handleChange} required ></input><br></br>
                <label>Day</label>
                <input type="number" name="newDay" min="1" max="28" onChange={props.handleChange} required ></input><br></br>
                <label>Time</label>
                <input type="number" name="newTime" min="7" max="16" onChange={props.handleChange} required ></input><br></br>
                <label>Type</label>
                <select id="type" name="type" onChange={props.handleChange} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled></option>
                    <option value="check up">check up</option>
                    <option value="wisdom tooth removal">wisdom tooth removal</option>
                    <option value="teeth whitening">teeth whitening</option>
                    <option value="root canal treatment">root canal treatment</option>
                    <option value="fillings">fillings</option>
                </select><br></br>
                <label>Crew</label>
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


