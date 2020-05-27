import React, {useState} from 'react';
function LoginForm(props) {
  return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputUsername">Username</label>
                <input type="text" 
                       className="form-control" 
                       id="uname"
                       placeholder="Enter Username"
                />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm;