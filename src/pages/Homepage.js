import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Books from './Books';

function Homepage() {
    const isLoginTrue = JSON.parse(localStorage.getItem("login"));

    const userNotLogin = () => (
        <>
            <h2>Look Like you are not login Yet</h2>
            <h3>
                If you have an account, then please <Link to="/login">Login</Link>
            </h3>
            <h3>
                Don't have an account, then please do{" "}
                <Link to="/register">Register</Link>
            </h3>
        </>
    );
    return (
        <div style={{ marginTop: "100px" }}>
            {isLoginTrue && isLoginTrue.userLogin ? (
                <>
                    <h2>Welcome User</h2>
                    <Books />
                </>
            ) : (
                <>{userNotLogin()}</>
            )}
        </div>
    );
}

export default Homepage;
