import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>404</h1>
      <p style={{ fontSize: '1.5rem' }}>Page Not Found</p>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
