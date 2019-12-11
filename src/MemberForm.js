import React, { useState } from 'react';

const MemberForm = ({ addMember }) => {

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const newAddition = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitName = event => {
        event.preventDefault();
        addMember(member);
        setMember({ firstName: '', lastName: '' })
    };

    console.log('member state', member);

    return (
        <form onSubmit={submitName}>

            <label htmlFor='name'>Name:</label>

            <input
                id='name'
                type='text'
                name='name'
                placeholder="Enter Your Name"
                onChange={newAddition}
                value={member.name}
            />
            <label htmlFor='email'>Email:</label>
            <input
                id='email'
                type='email'
                name='email'
                placeholder="Enter Your Email...PLEASE"
                onChange={newAddition}
                value={member.email}
            />

            <label >Role:</label>
            <select name='role' value={member.role} onChange={newAddition}>
                <option value="code crusher">Code Crusher</option>
                <option value="pixel pusher">Pixel Pusher</option>
                <option value="idea person">IDEA PERSON</option>
            </select>
            <button type='submit'>Add Member</button>
        </form>
    )
}

export default MemberForm;