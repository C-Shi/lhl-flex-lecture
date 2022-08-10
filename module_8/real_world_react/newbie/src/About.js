import code from './img/code.png'
export default function About(props) {
  return (
    <>
      <div className="container-fluid text-center" id="about">
        <h1>Welcome to our website</h1>
        <h3>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h3>
        <br/><br/>

        <div className="row">
          <div className="col-md-6">
            <p> dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-md-6">
            <img alt="code" src={code} id="code" />
          </div>
        </div>
        <br/>
        <h3><i>"This is the best Website course</i> - J. Johnston</h3>
      </div>
    </>
  )
}