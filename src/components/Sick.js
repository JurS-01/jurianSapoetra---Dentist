import React from 'react';

class Sick extends React.Component {
    constructor() {
        super();
        this.state = {
            type: "",
            name: "",
            surname: "",
            id: "",
            healthStatus: "",

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitSick = this.handleSubmitSick.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }


    handleSubmitSick(event) {
        event.preventDefault();
        const sickUser = {
            type: this.state.type,
            name: this.state.name,
            surname: this.state.surname,
            title: `Dr.${this.state.surname}`,
            id: this.state.id,
            isSick: this.state.healthStatus === "sick" ? true : false
        }
        let listType = [];
        let updatedAppointments = [];
        if (sickUser.type === "dentist") { listType = [...this.props.data.dentists] }
        else if (sickUser.type === "assistant") { listType = [...this.props.data.assistants] }
        else {
            listType = [...this.props.data.patients]
            updatedAppointments = [...this.props.data.appointments].filter(app => app.patient !== `${sickUser.name} ${sickUser.surname}`)
        }
        const updatedUserList = listType.map(user => {
            if (user.id === Number(sickUser.id) && user.surname === sickUser.surname) {
                console.log(user.email);
                return {
                    ...user,
                    isSick: sickUser.isSick
                }
            }
            return user
        })
        if (sickUser.type === "dentist") { this.props.handleNewDentist(updatedUserList) }
        else if (sickUser.type === "assistant") { this.props.handleNewAssistant(updatedUserList) }
        else {
            this.props.handleNewPatient(updatedUserList);
            this.props.handleNewAppointment(updatedAppointments);
        }
    }


    render() {
        return (
            <div>
                <h3 className="page-header">Add sick user</h3>
                <form onSubmit={this.handleSubmitSick}>
                    <select id="typeSickUser" name="type" onChange={this.handleChange} defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>type:</option>
                        <option value="dentist">dentist</option>
                        <option value="assistant">assistant</option>
                        <option value="patient">patient</option>
                    </select><br></br>
                    <input type="text" name="name" placeholder="name" onChange={this.handleChange} ></input>
                    <input type="text" name="surname" placeholder="surname" onChange={this.handleChange} ></input><br></br>
                    <input type="text" name="id" placeholder="id" onChange={this.handleChange} ></input><br></br>
                    <p>Sick</p>
                    <input value="sick" type="radio" name="healthStatus" onChange={this.handleChange} />
                    <p>Recovered</p>
                    <input value="recovered" type="radio" name="healthStatus" onChange={this.handleChange} /><br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Sick;