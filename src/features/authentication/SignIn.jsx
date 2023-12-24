import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../../supabase';
import { useAuth } from './AuthContext';
import './signIn.scss';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();


    async function handleLogin(event) {
        event.preventDefault();
      
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          });
      
          if (error) throw error;
          login();
          navigate("/");

        } catch (error) {
          console.error(error);
        }
      }
      

    return (
        <div className="sign-in-container">
            <div className="form-content-container">
                <h3 className="form-header">
                    Enter your email and password to log in the profile
                </h3>
                <form className="sign-in-form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button 
                        type="submit" 
                        className="submit-button"
                        onSubmit={handleLogin}
                        >
                        Log In
                    </button>

                    <div className="form-footer">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/features/authentication/signup">Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
