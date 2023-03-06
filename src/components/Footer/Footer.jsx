import React from 'react'
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import Payment from '../../assets/payments.png'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='col'>
          <div className='title'>About</div>
          <div className='text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            quod quisquam aperiam optio tempore earum commodi molestiae
            perferendis ipsam harum!
          </div>
        </div>
        <div className='col'>
          <div className='title'>Contact</div>
          <div className='c-item'>
            <FaLocationArrow />
            <div className='text'>Place ousmane sow , Paris 75015</div>
          </div>
          <div className='c-item'>
            <FaMobileAlt />
            <div className='text'>Phone: 01 02 03 04 55</div>
          </div>
          <div className='c-item'>
            <FaEnvelope />
            <div className='text'>Email: jsreactstore@store.com</div>
          </div>
        </div>
        <div className='col'>
          <div className='title'>Categories</div>
          <span className='text'>Headphones</span>
          <span className='text'>Smart Watches</span>
          <span className='text'>Bluetooth Speakers</span>
          <span className='text'>Wireless Earbuds</span>
          <span className='text'>Home Theatre</span>
          <span className='text'>Projectors</span>
        </div>
        <div className='col'>
          <div className='title'>Pages</div>
          <span className='text'>Home</span>
          <span className='text'>About</span>
          <span className='text'>Privacy</span>
          <span className='text'>Returns</span>
          <span className='text'>Terms & conditions</span>
          <span className='text'>Contact Us</span>
        </div>
      </div>
      <div className='bottom-bar'>
        <div className='bottom-bar-content'>
          <div className='text'>
            JSREACTSTORE 2023 CREATED BY RYAN MAZIANO PREMIUM E-COMMERCE
            SOLUTIONS.
          </div>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
