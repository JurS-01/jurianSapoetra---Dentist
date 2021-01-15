import React from 'react';
import FormAppointment from "./FormAppointment";
import { v4 as uuidv4 } from 'uuid';

// const checkSkills = (dentistSkills, appointmentType) => !dentistSkills.includes(appointmentType) ? true : false;

class MakeAppointment extends React.Component {
    constructor() {
        super();
        this.state = {
            newDay: "",
            newTime: "",
            patientName: "",
            patientSurname: "",
            patientId: "",
            id: "",
            dentist: "",
            assistant: "",
            type: "",
            appId: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitAppointment = this.handleSubmitAppointment.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmitAppointment(event) {
        event.preventDefault();
        let dentistSkills = [];
        [...this.props.data.dentists].filter(dentist => {
            if (dentist.title === this.state.dentist) { dentistSkills = dentist.skills }
        })
        console.log(dentistSkills);

        if (!dentistSkills.includes(this.state.type)) {
            return alert(`error! ${this.state.dentist} can not do ${this.state.type} appointment`)

        } else {
            const patientFullName = `${this.state.patientName} ${this.state.patientSurname}`
            if ([...this.props.data.patients].some(user => user.surname === this.state.patientSurname && user.id === Number(this.state.patientId))) {

                if ([...this.props.data.appointments].some(app => (app.assistant !== "" && app.assistant === this.state.assistant && app.day === Number(this.state.newDay) && app.time === Number(this.state.newTime)) || (app.dentist === this.state.dentist && app.day === Number(this.state.newDay) && app.time === Number(this.state.newTime)) || (app.patient === patientFullName && app.day === Number(this.state.newDay) && app.time === Number(this.state.newTime)))) {
                    return alert(`error! One or more users already scheduled on day ${this.state.newDay} at ${this.state.newTime}.00 hrs`)

                } else {
                    const addedAppointment = {
                        day: this.state.newDay,
                        time: this.state.newTime,
                        patient: patientFullName,
                        dentist: this.state.dentist,
                        assistant: this.state.assistant,
                        type: this.state.type,
                        appId: uuidv4(),
                        id: this.state.patientId,
                    }
                    const newAppointmentData = [...this.props.data.appointments].concat([addedAppointment])
                    this.props.addAppointment(newAppointmentData)
                }

            } else {
                return alert(`error! Unknown user. Add new user before making appointment`)
            }
        }
    }

    render() {
        return (
            <div>
                <FormAppointment data={this.props.data} handleChange={this.handleChange} handleSubmitAppointment={this.handleSubmitAppointment} />
            </div>
        )
    }
}




export default MakeAppointment;