import React from 'react';

const Members = props => {
    return (
        <div className='members'>
            {props.members.map(member => (
                <div className='member' key={member.joined}>
                    <h3>{member.firstName}</h3>
                    <h3>{member.lastName}</h3>
                    <h4>{member.joined}</h4>
                </div>
            ))}
        </div>
    )
}
export default Members;