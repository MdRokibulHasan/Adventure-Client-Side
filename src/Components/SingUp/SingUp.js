import React from 'react';

const SingUp = () => {
    return (
        <div>
            <div className="w-100 m-5">
                <div className="login-section m-auto">
                    <h1 className="text-center">Register</h1>
                    <div className="input-section text-center">
                        <div class="input-group w-50 m-3">
                            <input type="text" aria-label="First name" class="form-control " placeholder="name" />
                        </div>
                        <div class="input-group w-50 m-3">
                            <input type="email" aria-label="First name" class="form-control " placeholder="email" />
                        </div>
                        <div class="input-group w-50 m-3">
                            <input type="password" aria-label="First name" class="form-control" placeholder="password" />
                        </div>
                        <div>
                            <button className="log-button">Sign Up</button>

                            <p>Already have Account<a href="/singin">Sign In</a></p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingUp;