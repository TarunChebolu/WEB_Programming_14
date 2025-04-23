import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';

const dummyUser = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  bio: 'Software engineer and avid blogger.',
  image: 'https://via.placeholder.com/150',
  posts: ['Hello World!', 'My second post', 'React is awesome!']
};

const UserProfilePage = () => (
  <div style={{ border: '1px solid #ccc', padding: '20px', maxWidth: '500px' }}>
    <ProfileImage src={dummyUser.image} alt={dummyUser.name} />
    <UserInfo name={dummyUser.name} email={dummyUser.email} bio={dummyUser.bio} />
    <UserPosts posts={dummyUser.posts} />
  </div>
);

export default UserProfilePage;