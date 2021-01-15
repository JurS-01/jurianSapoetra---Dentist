import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Calendar from "./components/Calender/Calendar";
import Day from "./components/Day/Day";
import MakeAppointment from "./components/Appointment/MakeAppointment";
import CrewAndClients from "./components/Users/CrewAndClients"
import Sick from "./components/Sick"

import { names, dentistData, assistantData, appointmentData } from "./components/utils";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appointments: [],
      dentists: [],
      assistants: [],
      patients: []
    }
    this.handleNewAppointment = this.handleNewAppointment.bind(this);
  }

  componentDidMount() {
    this.setState({ dentists: dentistData })
    this.setState({ assistants: assistantData })
    this.setState({ patients: names })
    this.setState({ appointments: appointmentData })
  }

  handleNewAppointment = newAppointmentData => this.setState({ appointments: newAppointmentData });
  handleNewDentist = newDentistData => this.setState({ dentists: newDentistData });
  handleNewAssistant = newAssistantData => this.setState({ assistants: newAssistantData });
  handleNewPatient = newPatienttData => this.setState({ patients: newPatienttData });


  render() {
    return (
      <Router>
        <div>
          <h1 className="main-header">Tandartsbedrijf B.V.T.</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/calendar">Calendar view</Link></li>
              <li><Link to="/day">Day view</Link></li>
              <li><Link to="/appointment">Appointment</Link></li>
              <li><Link to="/cnc">Users</Link></li>
              <li><Link to="/sick">Sick leave</Link></li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route path="/calendar"><Calendar appointments={this.state.appointments} /></Route>
              <Route path="/day"><Day data={this.state} handleUpdatedAppointments={this.handleNewAppointment} /></Route>
              <Route path="/appointment"><MakeAppointment data={this.state} addAppointment={this.handleNewAppointment} /></Route>
              <Route path="/cnc"><CrewAndClients data={this.state} makeDentist={this.handleNewDentist} makeAssistant={this.handleNewAssistant} makePatient={this.handleNewPatient} /></Route>
              <Route path="/sick"><Sick data={this.state} handleNewAppointment={this.handleNewAppointment} handleNewDentist={this.handleNewDentist} handleNewAssistant={this.handleNewAssistant} handleNewPatient={this.handleNewPatient} /></Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
export default App;

