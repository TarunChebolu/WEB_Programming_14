import React from 'react';

const UserInfo = ({ name, email, bio }) => (
  <div>
    <h3>{name}</h3>
    <p><strong>Email:</strong> {email}</p>
    <p>{bio}</p>
  </div>
);

export default UserInfo;