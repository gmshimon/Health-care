import React from 'react';
import {getAuth, updateProfile} from "firebase/auth";
import {useState} from 'react';
import './Register.css';
import {useHistory} from 'react-router';
import initializeAuthentication from '../../Firebase/Firebase.init';
import useAuth from '../../Hooks/UseAuth';

initializeAuthentication();
const Register = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const {user, signUpWithEmail, setUser} = useAuth();

    const history = useHistory();
    const location_url = '/login';

    const handleSignUP = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            console.log('length must be at least 6');
            setPassword('');
            return;
        }
        //creating account using email and password
        signUpWithEmail(name, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('success')
                console.log(user);
                setUserName(name);
                setUser({})
                history.push(location_url);
            })
            .catch(error => {
                setError(error.message)
                setPassword('');
                setEmail('');
            })
        //setting the name of the user
        const setUserName = (name) => {
            updateProfile(auth.currentUser, {
                displayName: name,
            })
                .then(() => {})
        }
        user.email && console.log('success');
    }
    //name input field
    const handleName = (e) => {
        setName(e.target.value);
    }
    //email input field
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    //password input field
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div className="form-container">
            <form action="/action_page.php" onSubmit={handleSignUP}>
                <label htmlFor="fname">Name</label>
                <input onChange={handleName} type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label htmlFor="Email">Email</label>
                <input value={email} onChange={handleEmail} type="text" id="lname" name="Email" placeholder="Email" />

                <label htmlFor="password">Password</label>
                <input value={password} onChange={handlePassword} type="password" id="lname" name="Email" placeholder="password" />

                <input type="submit" value="Sign up" />
            </form>
            <p className="text-danger">{error}</p>

        </div>
    );
};

export default Register;