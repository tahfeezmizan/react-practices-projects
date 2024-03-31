import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { FaRegEyeSlash, FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import auth from "../firebase/firebase.config";
import { useState } from "react";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [sucess, setSucess] = useState('');
    const [showPass, setShowPass] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const trams = e.target.trams.checked
        console.log(email, password, trams);

        // password length check
        if (password.length < 6) {
            setRegisterError(' Password should be at least 6 characters or longer ');
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError(' Password should be Use expression ');
            return
        }
        else if (!trams) {
            setRegisterError('Accept our trams')
            return
        }


        setSucess('')
        setRegisterError('')

        //create user with email and password on firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential
                console.log(user)
                setSucess('User Created Sucessfully')
                sendEmailVerification(userCredential.user)
                .then(result => {
                    alert('Check You Email for Email Verifacition')
                })
                .catch(error => {
                    const errorMsg = error.message;
                    alert(errorMsg)
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setRegisterError(errorMessage)
            })
    }

    return (
        <div>
            <h1 className="text-5xl mb-10">Register Here</h1>
            <form onSubmit={handleRegister} className="space-y-5 w-1/2 border p-10 mx-auto">
                <input type="email" className="w-full py-3 px-4" placeholder="Enter Your Email" name="email" id="" />
                <br />
                <div className="relative">
                    <input type={showPass ? "text" : "password"} className="w-full py-3 px-4" placeholder="password" name="password" id="" />
                    <span className="absolute top-4 right-4" onClick={() => setShowPass(!showPass)}>
                        {
                            !showPass ? <FaRegEyeSlash /> : <FaRegEye />
                        }
                    </span>
                </div>
                <br />
                <div className="flex items-center gap-3">
                    <input type="checkbox" name="trams" id="trams" />
                    <label htmlFor="trams">accept our trams and condition</label>
                </div>

                <input type="submit" className="w-full py-3 px-4 btn btn-primary" value="Register" />


                {
                    registerError &&
                    <p className="text-4xl text-red-600">{registerError}</p>
                }
                {
                    sucess && <p className="text-4xl text-green-500">{sucess}</p>
                }
            </form>
        </div>
    );
};

export default Register;