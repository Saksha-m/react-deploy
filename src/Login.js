import  React from "react";
const Login =(props) =>{
    const { email,
    setEmail,
     password,
     setPassword,
      handleLogin,
      handleSignup,
      hasAccount,
      setHasAccount,
      emailError,
      passwordError
} = props;

return (
    <section className="login">
        <div className="loginContainer">
            <label>Username</label>
            <input type="text" 
            autoFocus
            required
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input type="password"
            required
            placeholder="Enter your Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <button onClick={handleLogin}>Sign in</button>
                    <p>Dont have an account ?
                    <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span> </p>
                    </>
                ) : (
                    <>
                    <button onClick={handleSignup}>Sign up</button>
                    <p>Have an account ?
                     <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                     </p>
                    </>
                
                )}
            </div>
        </div>
    </section>
);
};
export default Login;
