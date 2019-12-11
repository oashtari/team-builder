import React, { useState } from 'react';

const MemberForm = ({ addMember }) => {

    const [member, setMember] = useState({
        firstName: '',
        lastName: ''
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

            <label htmlFor='firstName'>First Name</label>

            <input
                id='firstName'
                type='text'
                name='firstName'
                placeholder="Enter First Name"
                onChange={newAddition}
                value={member.firstName}
            />
            <label htmlFor='lastName'>Last Name</label>
            <input
                id='lastName'
                type='text'
                name='lastName'
                placeholder="Enter Last Name"
                onChange={newAddition}
                value={member.lastName}
            />

            <button type='submit'>Add Member</button>
        </form>
    )
}

export default MemberForm;