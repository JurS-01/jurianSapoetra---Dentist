import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";
import DaySelectInDay from "./DaySelectInDay";
// import Day from "../../../../../testFiles/dentists/PJday";

const sortByDayTime = list => list.sort((a, b) => {
  if (a.day < b.day) return -1
  if (a.day > b.day) return 1
  if (a.time < b.time) return -1
  if (a.time > b.time) return 1
})

const weekendDays = ["", "6", "7", "13", "14", "20", "21", "27", "28"]


class Day extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenDay: 1,
      clickedDay: "",
      changedDay: "",
      changedTime: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitDay = this.handleSubmitDay.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleMoveAppointment = this.handleMoveAppointment.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmitDay(event) {
    event.preventDefault();
    if (weekendDays.includes(this.state.clickedDay)) { return alert("error! please choose a working day") }
    else { return this.setState({ chosenDay: this.state.clickedDay }) }
  }

  handleDelete(event) {
    const updatedAppointments = [...this.props.data.appointments].filter(app => app.appId !== Number(event.target.id))
    this.props.handleUpdatedAppointments(updatedAppointments);
  }

  handleMoveAppointment(event) {
    event.preventDefault();
    if (weekendDays.includes(this.state.changedDay)) { return alert("error! please choose a working day") }
    else {
      let patient = "";
      let assistant = "";
      let dentist = "";
      [...this.props.data.appointments].filter(app => {
        if (app.appId === Number(event.target.id)) {
          patient = app.patient
          assistant = app.assistant
          dentist = app.dentist
        }
      })
      if ([...this.props.data.appointments].some(appointment => (appointment.assistant !== "" && appointment.assistant === assistant && appointment.day === Number(this.state.changedDay) && appointment.time === Number(this.state.changedTime)) || (appointment.dentist === dentist && appointment.day === Number(this.state.changedDay) && appointment.time === Number(this.state.changedTime)) || (appointment.patient === patient && appointment.day === Number(this.state.changedDay) && appointment.time === Number(this.state.changedTime)))) {
        alert(`error! One or more users already scheduled on day ${this.state.changedDay} at ${this.state.changedTime}.00 hrs`)
      } else {
        let updatedAppointments = [...this.props.data.appointments].map(app => {
          if (app.appId === Number(event.target.id)) {
            return {
              ...app,
              day: this.state.changedDay,
              time: this.state.changedTime
            }
          }
          return app
        })
        this.props.handleUpdatedAppointments(updatedAppointments);
      }
    }
  }


  render() {
    const sortedAppointments = sortByDayTime(this.props.data.appointments)
    const dayAppointments = sortedAppointments.filter(app => app.day == this.state.chosenDay)
    const appointmentsJSX = dayAppointments.map(
      ({ time, patient, dentist, assistant, type, appId }, index) => (
        <AppointmentInDay
          time={time}
          patient={patient}
          dentist={dentist}
          assistant={assistant}
          type={type}
          key={index}
          appid={appId}
          data={this.props.data}
          handleDelete={this.handleDelete}
          handleChange={this.handleChange}
          handleMoveAppointment={this.handleMoveAppointment}
        />
      )
    );
    return (
      <div>
        <DaySelectInDay handleChange={this.handleChange} handleSubmitDay={this.handleSubmitDay} />
        <ul className="dayview" >{appointmentsJSX}</ul>
      </div>
    )
  }
};


export default Day;

