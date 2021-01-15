import React from 'react';
import UserList from "./UserList"
import AddUser from "./AddUser"
import { v4 as uuidv4 } from 'uuid';

class CrewAndClients extends React.Component {
    constructor() {
        super();
        this.state = {
            typeNewUser: "",
            nameNewUser: "",
            surnameNewUser: "",
            id: "",
            genderNewUser: "",
            emailNewUser: "",
            phoneNewUser: "",
            isSick: false,
            birthYearNewUser: "",
            skillsNewUser: "",
            checkUp: false,
            teethWhitening: false,
            rootCanal: false,
            wisdomTooth: false,
            fillings: false,
            nvt: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitUser = this.handleSubmitUser.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }


    handleSubmitUser(event) {
        event.preventDefault();
        let skillSet = []
        if (this.state.checkUp) { skillSet.push("check up") }
        if (this.state.teethWhitening) { skillSet.push("teeth whitening") }
        if (this.state.rootCanal) { skillSet.push("root canal treatment") }
        if (this.state.wisdomTooth) { skillSet.push("wisdom tooth removal") }
        if (this.state.fillings) { skillSet.push("fillings") }
        if (this.state.nvt) { skillSet = [] }
        if (this.state.typeNewUser === "assistant" || this.state.typeNewUser === "patient") {
            skillSet = [];
            alert("skills don't apply to assistants and patients")
        }
        console.log(skillSet);
        const addedUser = {
            name: this.state.nameNewUser,
            surname: this.state.surnameNewUser,
            title: `Dr.${this.state.surnameNewUser}`,
            gender: this.state.genderNewUser,
            email: this.state.emailNewUser,
            phone: this.state.phoneNewUser,
            isSick: false,
            skills: skillSet,
            id: uuidv4(),
            birthYear: this.state.birthYearNewUser
        }
        console.log(addedUser);
        if (this.state.typeNewUser === "dentist") {
            const newDentistData = this.props.data.dentists.concat([addedUser])
            this.props.makeDentist(newDentistData)
        } else if (this.state.typeNewUser === "assistant") {
            const newAssistantData = this.props.data.assistants.concat([addedUser])
            this.props.makeAssistant(newAssistantData)
        } else if (this.state.typeNewUser === "patient") {
            const newPatientData = this.props.data.patients.concat([addedUser])
            this.props.makePatient(newPatientData)
        }
    }

    render() {
        return (
            <div>
                <AddUser handleChange={this.handleChange} handleSubmitUser={this.handleSubmitUser} />
                <h3 className="list-header">Dentists:</h3>
                <UserList data={this.props.data.dentists} />
                <h3 className="list-header">Assistants:</h3>
                <UserList data={this.props.data.assistants} />
                <h3 className="list-header">Patients:</h3>
                <UserList data={this.props.data.patients} />
            </div>
        )
    }
}


export default CrewAndClients
