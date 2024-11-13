// import React from 'react';
import './workerfooter.css';
import { team } from '../../assets/assets.js';

const WorkerFooter = () => {
  return (
    <section id="team">
    <div className='team'>
      <h1>Team</h1>
      <h2>Meet our Team Members....</h2>
      <div className='team-img'>
        <div className="member">
          <img src={team.arpana} alt="Arpana"/>
          <p>ARPANA</p>
        </div>
        <div className="member">
          <img src={team.marrappa} alt="Marappa" /> 
          <p>MARAPPA</p>
        </div>
        <div className="member">
          <img src={team.lakshmi} alt="Lakshmi" />
          <p>LAKSHMI</p>
        </div>
      </div>
      <div className='main-footer'>
      <div className='footer'>
        <img className='location-img' src={team.location} alt="" />
        <p className='location-p'>&copy;2024 Hungry Beast <br /> Restaurant, Angallu</p>
      </div>
      <div className='footer-links1'>
        <p className='p-0'>Address</p>
        <p className='p-1'>Hungry Beast- <br /> Food & Beverages, <br /> Angallu, <br /> Madanapalle, <br /> 517326</p>
      </div>
      <div className='footer-links2'>
        <p className='p-0'>Details</p>
        <p className='p-1'>Menu</p>
        <p className='p-2'>Reservations</p>
        <p className='p-3'>Time</p>
      </div>
      <div className='footer-links3'>
        <p className='p-0'>Contact Us</p>
        <p className='p-1'>Phone: 95810 20600</p>
        <p className='p-2'>Email: <br/>dineshkumar08577@gmail.com</p>
        <img src={team.logo} alt="logo" />
      </div>
      </div>
      <div className='footer-imgs'>
        <img src={team.facebook} alt="facebook-icon" />
        <img src={team.twitter} alt="twitter-icon" />
        <img src={team.linkedin} alt="linkedin-icon" />
        <img src={team.youtube} alt="youtube-icon" />
      </div>
      <p className='dev'>Developed by Web Plus Academy</p>
    </div>
    </section>
  );
}

export default WorkerFooter;
