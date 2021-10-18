import React from 'react';
import './Register.css';
const Register = () => {
    return (
        <div className="form-container">
            <h2>Please register</h2>
            <form action="/action_page.php" >
                <label htmlFor="fname">Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label htmlFor="Email">Email</label>
                <input type="text" id="lname" name="Email" placeholder="Email" />

                <label htmlFor="password">Password</label>
                <input type="password" id="lname" name="Email" placeholder="password" />

                <input type="submit" value="Sign up" />
            </form>
        </div>
    );
};
export default Register;

// onSubmit = {handleSignUP}
//onChange={handleName}
//onChange={handleEmail}
//value={password} onChange={handlePassword}