import React from 'react';
import './Home.css'
import Profileside from '../../components/profileside/Profileside';
import Postside from '../../components/postside/Postside';
import Rightside from '../../components/rightside/Rightside';
const Home = () => {
  return (
    <div className="Home">
      <Profileside/>
      <Postside/>
      <Rightside/>
    </div>
  );
};

export default Home;
