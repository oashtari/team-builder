import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { memberExpression } from '@babel/types';
import Members from './Members';
import MemberForm from './MemberForm'


function App() {

  const [members, setMembers] = useState([
    {
      first: 'firstName',
      last: 'lastName',
      joined: 'at the start'
    }
  ]);

  const addMember = member => {
    const newMember = {
      firstName: member.firstName,
      lastName: member.lastName,
      joined: Date.now()
    }
    const newTeamList = [...members, newMember];

    setMembers(newTeamList);
  }



  return (
    <div className="App">
      <h2 className="team-members">Our Team </h2>
      <MemberForm addMember={addMember} />
      <Members members={members} />

    </div>
  );
}

export default App;

