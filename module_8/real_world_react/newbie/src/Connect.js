/* eslint-disable jsx-a11y/anchor-is-valid */
import social from './img/social.png'
import Feedback from './Feedback'
import { useRef } from 'react';
export default function Connect(props) {
  return (
    <>
      <img alt="social" src={social} className="banner"></img>
      <footer id="connect" className="container-fluid text-center">
        <div className="row">
          <h2>Connect</h2>
          <div className="social">
            <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="#" target="_blank"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="container">
          <Feedback />
        </div>
      </footer>
    </>
  )
}