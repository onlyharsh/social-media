import React from 'react';
import './Followerscard.css';
import { Followers } from '../../data/Followersdata';

const Followerscard = () => {
  return (
    <div className="Followerscard">
      <h3>Who is following you</h3>

      {Followers.map((follower, id) => {
        return (
        <div className="follower">
          <div>
            <img src={follower.img} alt="No image found" className='followerImg'/>
            <div className="name">
              <span>{follower.name}</span>
              <span>@{follower.username}</span>
            </div>
          </div>
          <button className='button fc-button'>
            Follow
          </button>
        </div>
        );
      })}
    </div>
  );
};

export default Followerscard;

