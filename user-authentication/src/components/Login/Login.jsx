
import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import auth from "../firebase/firebase.config";

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [sucessLogin, setSucessLogin] = useState('');
    const emailRef = useRef(null);

    const loginFunction = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setSucessLogin('');
        setLoginError('')

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setSucessLogin('Login Sucessfully')
                console.log(user)

                if (result.user.emailVerified) {
                    alert('User Login SucessFully')
                }
                else {
                    alert('Please Verification you email')
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                setLoginError(errorMsg)
                console.log(errorMsg)
            })

    }

    const resetPassword = () => {
        const emailValue = emailRef.current.value;
        console.log(emailValue)
        if (!emailValue) {
            alert('Provide a  Email')
            return
        }
        else if (!/^(?=.*[0-9].*[0-9])(?=.*@).+$/.test(emailValue)) {
            alert('write an Valid Email')
            return

        }

        sendPasswordResetEmail(auth, emailValue)
            .then(() => {
                alert('Check You Mail')
                // const email = result.email;
                // console.log(email)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse px-40 gap-5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginFunction} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" onClick={resetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {
                                sucessLogin &&
                                <p className="text-green-500">{sucessLogin}</p>
                            }
                            {
                                loginError &&
                                <p className="text-red-500">{loginError}</p>
                            }

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;