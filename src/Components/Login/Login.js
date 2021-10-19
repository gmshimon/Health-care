import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import './Login.css';

const Login = () => {
    const {signInWithEmail, signUpWithGoogle, setUser, setIsLoading} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    console.log(location.state?.from || 'nothing');
    const login_url = location.state?.from || '/home';


    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmail(email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
                history.push(login_url);
            })
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error.message);
            })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleGoogleSignUp = () => {
        signUpWithGoogle()
            .then(result => {
                setUser(result.user)
                console.log('inside login page', result.user);
                history.push(login_url);
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div className="form-container">
            <form action="/action_page.php" onSubmit={handleSubmit}>
                <label htmlFor="Email">Email</label>
                <input onChange={handleEmail} type="text" id="lname" name="Email" placeholder="Email" />

                <label htmlFor="password">Password</label>
                <input onChange={handlePassword} type="password" id="lname" name="Email" placeholder="password" />

                <input type="submit" value="Sign in" />
            </form>
            <p>new user? <Link to="/register">Register</Link> </p>
            <button onClick={handleGoogleSignUp}>Google sign up</button>
            <p className="text-danger">{error}</p>
        </div>
    );
};

export default Login;