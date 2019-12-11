import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { memberExpression } from '@babel/types';
import Members from './Members';
import MemberForm from './MemberForm'


function App() {

  const [members, setMembers] = useState([
    {
      name: 'Member Name',
      email: 'Example email: name@domain.com',
      role: 'code crusher'
    }
  ]);

  const addMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
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

