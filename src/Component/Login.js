import React, { useState } from 'react';
import './login.css';
const AuthorLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username && !password) {
            setErrorMessage('username and password required');
        }
        else if (username && !password) {
            setErrorMessage(' password required');
        }
        else if (!username && password) {
            setErrorMessage(' Username required');
        }
        else {
            setErrorMessage('');
            console.log('Username:', username);
            console.log('Password:', password);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Author Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder="Enter username"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder="Enter password" />
                    </div>
                    <button type="submit">Submit</button>
                </form>

                {errorMessage && (
                    <div className="error">
                        <p>{errorMessage}</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default AuthorLogin;
