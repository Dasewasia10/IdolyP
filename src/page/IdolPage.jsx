import React from 'react';
import ShowData from '../components/ShowData';

const IdolPage = () => {
  return (
    <div className="idol-page">
      <h1>Idol Page</h1>
      <ShowData endpoint="idol" />
    </div>
  );
};

export default IdolPage;
