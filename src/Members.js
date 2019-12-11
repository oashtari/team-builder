import React from 'react';

const Members = props => {
    return (
        <div className='members'>
            {props.members.map(member => (
                <div className='member' key={member.joined}>
                    <h3>{member.name}</h3>
                    <h3>{member.email}</h3>
                    <h4>{member.role}</h4>
                </div>
            ))}
        </div>
    )
}
export default Members;