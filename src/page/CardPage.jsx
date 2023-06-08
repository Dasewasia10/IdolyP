import React from 'react';
import ShowData from '../components/ShowData';

const CardPage = () => {
  return (
    <div className="card-page">
      <ShowData endpoint="card" />
    </div>
  );
};

export default CardPage;
