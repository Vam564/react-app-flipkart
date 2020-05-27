import React,{useReducer} from 'react'
import './CSS/LoginPage.css';

const LoginPage = () => {
    const INITIAL_STATE = {
        login:{
            user:'',
            pwd:''
        },
        reg:{
            userR:'',
            pwdR:''
        },
        
        RegUser:'',
        RegPwd:''
    }
    const reducer = (state, action) => {
        const {type,  context} =action
        const {login,reg } = state;
        switch (type) {
            case 'API_SUCCESS':{
                return {
                    ...state,
                    ...context
                }
            }
            case 'HANDLE_INPUT_REG': {
                const {target:{value,id}}=context
                return {
                    ...state,
                    reg:{...reg,[id]:value}
                }
            }
            case 'HANDLE_INPUT_LOG': {
                const {target:{value,id}}=context
                return {
                    ...state,
                    login:{...login,[id]:value}
                }
            }
            
            
            default: {
                return state    
        }
            }
    }
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const { login,reg } = state;

    const handleInputReg=({target})=>{
       
        dispatch({
            type: 'HANDLE_INPUT_REG',
            context:{target}
        })
    }
    const handleReg=()=>{
        localStorage.setItem("userR",reg.userR)
        localStorage.setItem("pwdR",reg.pwdR)
    }
    const handleInputLog=({target})=>{
        
        dispatch({
            type: 'HANDLE_INPUT_LOG',
            context:{target}
        })
    }
    const handleLog=()=>{
        var reguser=localStorage.getItem("userR")
        var regpwd=localStorage.getItem("pwdR")
        console.log(reguser);
        console.log(regpwd);
        var resU=reguser==login.user;
        var resP=regpwd==login.pwd;
        if(login.user==reguser&&login.pwd==regpwd)
        {
            alert(reguser +"logged succesfully")
        }else{
            alert("invalid details")
        }
    }
    
    return (
        <>

        <div className="row">

            <div className="col">
                <pre>
                    {JSON.stringify(reg,null,4)}
                </pre>
            <div className="login">
                <div className=" login-right mx-auto">
                    <div >

                        <div className="col">
                            <input className="user mb-2" type="text" id="userR" name="email" placeholder="Email Id" onChange={handleInputReg} />
                        </div>
                        <div className="col">
                            <input className="user mb-2" type="password" id="pwdR" name="password" placeholder="Password" onChange={handleInputReg}/>
                        </div>
                        <div className="col">
                            <input className="user-btn" type="button" name="login" value="Register" onClick={handleReg}/>
                        </div>
                        <div className="col mt-2">
                            <p style={{ marginLeft: "90px" }}>OR</p>
                        </div>
                        <div className="col">
                            <input className="user-request shadow" type="button" name="login" value="Request OTP" />
                        </div>
                        <div className="col mt-2">
                            <span className="last">New to Flipkart ? <a className="last"> Create an Account</a></span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="col">
            <pre>
                    {JSON.stringify(login,null,4)}
                </pre>
            <div className="login">
                <div className=" login-right mx-auto">
                    <div >

                        <div className="col">
                            <input className="user mb-2" type="text" id="user" name="email" placeholder="Email Id" onChange={handleInputLog} />
                        </div>
                        <div className="col">
                            <input className="user mb-2" type="password" id="pwd" name="password" placeholder="Password" onChange={handleInputLog}/>
                        </div>
                        <div className="col">
                            <input className="user-btn" type="button" name="login" value="Log In" onClick={handleLog}/>
                        </div>
                        <div className="col mt-2">
                            <p style={{ marginLeft: "90px" }}>OR</p>
                        </div>
                        <div className="col">
                            <input className="user-request shadow" type="button" name="login" value="Request OTP" />
                        </div>
                        <div className="col mt-2">
                            <span className="last">New to Flipkart ? <a className="last"> Create an Account</a></span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
            
        
        </ >
    )
}

export default LoginPage
