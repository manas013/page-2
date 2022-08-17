import React from 'react'
import './Css/middle.css'
import './Css/slot.css'
import './Css/media.css'


function Middle() {
  
  return (
    <div className='middle'>
        <div>
        <h1>Rooftop Solar</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
        </div>
        <div className='form'>
          <div className='divide'>
            <div className='divide_left'>
              <img id='divide_left_img' src='./images/header_frame1.svg' alt='image'/>
              <p id='divide_text'>Enter your address to begin</p>
            </div>
            <div className='right'>
              <img id='divide_buttom' src='./images/header_frame0.svg' alt='imagr'/>

            </div>

          </div>

        </div>
        <div className='pic'>
          <img src='./images/picture.jpg' alt='picture'/>
        </div>
        <h2>Your  Electrification journey starts here.</h2>
        <div className='bottom'>
        <div className='content_1'>
            <h3 id='tittle'>Less Time</h3>
            <h3 id='desk'>Get multiple quotes all in one place, instead of negotiating with each installer.</h3>
          </div>
          <div className='content_2'>
            <h3 id='tittle_2'>More Savings</h3>
            <h3 id='desk_1'>Our network of approved installers compete for your project, giving you the best price.</h3>
          </div>
          <div className='content_3'>
            <h3 id='tittle_3'>100% Online & Free</h3>
            <h3 id='desk_2'>Our online tools and expert advisors will help you compare and select the offer that best fits your needs, at no cost!</h3>
          </div>

        </div>
        <div className='slot'>
          <div className='slot_left'>
            <div  id='slot_content'>
            <h3>Meet your energy advisors</h3>
            </div>
            <div  id='slot_content_1'>
            <h3>A dedicated online, expert advisor from Electrum helping you at each step of the process.</h3>
            </div>
           
            <div id='slot_content_2'>
            <h3 >Lorem ipsum dolor sit amet, consectetur</h3>
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>

            </div>
           

          </div>
          <div className='slot_right'>
            <img src='./images/Frame.jpg' alt='img'/>

          </div>

        </div>

      
      
    </div>
  )
}

export default Middle
