import React from 'react';

const TeamMemberCard = ({ name, position, credentials }) => {
  const cardStyle = {
    width: '250px',
    padding: '20px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'left',
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>{position}</p>
      <p>{credentials}</p>
    </div>
  );
};

export default TeamMemberCard;
