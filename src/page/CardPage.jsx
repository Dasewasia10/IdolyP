import React from 'react';
import ShowData from '../components/ShowData';

const CardPage = () => {
  return (
    <div className="card-page">
      <h1>Card Page</h1>
      <ShowData endpoint="card" />
    </div>
  );
};

export default CardPage;
