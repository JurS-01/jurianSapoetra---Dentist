import React from 'react';

const AddUser = (props) => {
    return (
        <div>
            <h3 className="page-header">Add new user</h3>
            <form onSubmit={props.handleSubmitUser}>
                <select id="typeNewUser" name="typeNewUser" onChange={props.handleChange} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>type:</option>
                    <option value="dentist">dentist</option>
                    <option value="assistant">assistant</option>
                    <option value="patient">patient</option>
                </select><br></br>
                <input type="text" name="nameNewUser" placeholder="name" onChange={props.handleChange} required ></input>
                <input type="text" name="surnameNewUser" placeholder="surname" onChange={props.handleChange} required ></input><br></br>
                <select id="genderNewUser" name="genderNewUser" onChange={props.handleChange} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>gender:</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <input type="text" name="birthYearNewUser" placeholder="birth year" onChange={props.handleChange} required ></input><br></br>
                <input type="email" name="emailNewUser" placeholder="email" onChange={props.handleChange} required ></input>
                <input type="tel" name="phoneNewUser" placeholder="phonenumber" onChange={props.handleChange} required ></input><br></br>
                <div>
                    <p>skills:</p>
                    <label>
                        <input
                            type="checkbox"
                            name="checkUp"
                            checked={props.checkUp}
                            onChange={props.handleChange}
                        /> check up
                </label>
                    <label>
                        <input
                            type="checkbox"
                            name="teethWhitening"
                            checked={props.teethWhitening}
                            onChange={props.handleChange}
                        /> teeth whitening
                </label>
                    <label>
                        <input
                            type="checkbox"
                            name="rootCanal"
                            checked={props.rootCanal}
                            onChange={props.handleChange}
                        /> root canal treatment
                </label>
                    <label>
                        <input
                            type="checkbox"
                            name="wisdomTooth"
                            checked={props.wisdomTooth}
                            onChange={props.handleChange}
                        /> wisdom tooth removal
                </label>
                    <label>
                        <input
                            type="checkbox"
                            name="fillings"
                            checked={props.fillings}
                            onChange={props.handleChange}
                        /> fillings
                </label>
                    <label>
                        <input
                            type="checkbox"
                            name="nvt"
                            checked={props.nvt}
                            onChange={props.handleChange}
                        /> n.v.t.
                </label><br></br>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default AddUser;

