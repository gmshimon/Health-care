import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className="form-container">
            <h2>Please login</h2>
            <form action="/action_page.php" >
                <label htmlFor="Email">Email</label>
                <input type="text" id="lname" name="Email" placeholder="Email" />

                <label htmlFor="password">Password</label>
                <input type="password" id="lname" name="Email" placeholder="password" />

                <input type="submit" value="Submit" />
            </form>
            {/* <p>new user? <Link to="/register">Register</Link> </p> */}
            <button>Google sign up</button>
        </div>
    );
};

export default Login;