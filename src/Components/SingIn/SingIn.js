import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Singin.css';
const SingIn = () => {
    const { singInWithGoogle, setUser, setIsLoading } = useAuth();

    const history = useHistory();
    const location = useLocation();

    const url = location.state?.from || "/home";
    const handleGoogleLogin = () => {
        singInWithGoogle()
            .then(res => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };
    return (
        <div>

            <div className="w-100 m-5">
                <div className="login-section m-auto">
                    <h1 className="text-center">Login</h1>
                    <div className="input-section text-center">
                        <div className="w-100">
                            <div class="input-group w-50 m-3">
                                <span class="input-group-text">Email</span>
                                <input type="email" aria-label="First name" class="form-control " />
                            </div>
                            <div class="input-group w-50 m-3">
                                <span class="input-group-text">Password</span>
                                <input type="password" aria-label="First name" class="form-control" />
                            </div>
                        </div>
                        <div>
                            <button className="log-button">Log In</button>
                            <p className="link">
                                <a href="#">Forget Password</a></p>
                            <p><a href="/singup">Sing Up</a></p>
                        </div>
                        <button onClick={handleGoogleLogin}
                            className="link-button">Google Sing IN</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingIn;