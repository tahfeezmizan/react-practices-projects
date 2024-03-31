import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";

const HeroRegister = () => {
    const [regError, setRegError] = useState('');
    const [regSucess, setRegSucess] = useState('');
    const [showPassword, setShowPassword] = useState('');


    const handleHeroRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const trams = e.target.trams.checked
        console.log(email, password, trams);
        setRegSucess('');
        setRegError('');

        // password lenght check 
        if (password.length < 6) {
            setRegError(' Password Must be at least 6 characters and longer ');
            return
        }
        else if (!/[a-z]/.test(password)) {
            setRegError(' Password should be Use expression ');
            return
        }
        else if(!trams) {
            setRegError('check trams condition');
            return
        }


        // create new user in firebase using email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setRegSucess('congratulations! registration successfully')
            })
            .catch(error => {
                const regErrorHero = error.message;
                console.log('Hero Error', regErrorHero)
                setRegError(regErrorHero)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleHeroRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" />
                            <span onClick={() => setShowPassword(!showPassword)}>Show</span>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {
                                regError && <p className="text-red-500">{regError}</p>
                            }
                            {
                                regSucess && <p className="text-green-500">{regSucess}</p>
                            }
                        </div>
                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="trams" id="trams" />
                            <label htmlFor="trams">accept our trams and condition</label>
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

export default HeroRegister;