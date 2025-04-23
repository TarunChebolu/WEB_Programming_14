import React from 'react';

const UserPosts = ({ posts }) => (
  <div>
    <h4>Posts:</h4>
    <ul>
      {posts.map((post, idx) => <li key={idx}>{post}</li>)}
    </ul>
  </div>
);

export default UserPosts;