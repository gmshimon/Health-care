import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useFirebase();
    console.log('private-route', user);
    if (isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({location}) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: {from: location}
                }}
            ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;