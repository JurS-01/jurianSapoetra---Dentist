import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);


const AppointmentInDay = (props) => {
  let participant = false;
  props.data.dentists.forEach((user) => {
    if (user.isSick && props.dentist === user.title) { participant = true; }
  })
  props.data.assistants.forEach((user) => {
    if (user.isSick && props.assistant === `${user.name} ${user.surname}`) { participant = true; }
  })
  let appBackground = "";
  participant ? appBackground = "appointment-red" : appBackground = "appointment";

  return (
    <li className={appBackground}>
      <div className="time">{format_time(props.time)}</div>
      <div className="patient">Patiënt: {props.patient}</div>
      <div className="day">Day {props.day}</div>
      <div className="dentist">Tandarts: {props.dentist}</div>
      <div className="assistant">Assistent: {props.assistant}</div>
      <div className="assistant">Type: {props.type}</div>
      <div id="edit-bar">
        <button className="delete" id={props.appid} onClick={props.handleDelete}>delete</button>
        <form className="edit-form" id={props.appid} onSubmit={props.handleMoveAppointment}>
          <button className="submit-btn" type="submit">reschedule</button>
          <input className="number-input" type="number" name="changedDay" min="1" max="28" placeholder="new day" onChange={props.handleChange} required ></input>
          <input className="number-input" type="number" name="changedTime" min="7" max="16" placeholder="new time" onChange={props.handleChange} required ></input>
        </form>
      </div>
    </li>
  )
}
export default AppointmentInDay

