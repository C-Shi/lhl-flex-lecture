/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  return (
    <>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand logo" href="#">Advanced React</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/connect">Connect</Link></li>
              {/* <li><a className={props.mode === 'Home' ? 'selected' : ''} onClick={() => props.navigate('Home')}>Home</a></li>
              <li><a className={props.mode === 'About' ? 'selected' : ''} onClick={() => props.navigate('About')}>About</a></li>
              <li><a className={props.mode === 'Connect' ? 'selected' : ''} onClick={() => props.navigate('Connect')}>Connect</a></li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}