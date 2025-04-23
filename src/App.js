import React from 'react';
import PublicImage from './components/PublicImage';
import SourceImage from './components/SourceImage';
import LoginForm from './components/LoginForm';
import UserProfilePage from './components/profile/UserProfilePage';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Combined React App</h1>
      <section>
        <h2>1. Images</h2>
        <PublicImage />
        <SourceImage />
      </section>

      <section>
        <h2>2. Novell Services Login Form</h2>
        <LoginForm />
      </section>

      <section>
        <h2>3. User Profile Page</h2>
        <UserProfilePage />
      </section>
    </div>
  );
}

export default App;
