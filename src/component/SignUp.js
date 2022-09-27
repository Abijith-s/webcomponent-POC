import React from 'react'

function SignUp() {
  return (
    <div className="container contact col-sm-12">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1" style={{color:"white"}}>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" style={{color:"white"}}>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
    </div>
  )
}

export default SignUp