import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [userdata, setUserData] = useState()
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                setUserData(user)
            })
            .catch(error => {
                console.log('Error', error.message)
            })
    }

    const handleGithubSingIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user
                setUserData(loggedUser)
                console.log(loggedUser)
            })
            .catch(error => {
                console.log('Github Error', error.message)
            })
    }

    const handleSingOut = () => {
        signOut(auth)
            .then(result => {
                setUserData(null)
                console.log(result)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="text-center space-y-3 text-2xl">
            {userdata ?
                <button onClick={handleSingOut} className="btn">Sing Out</button> :
                <>
                    <button onClick={handleGoogleSingIn} className="btn">Google Login</button>
                    <button onClick={handleGithubSingIn} className="btn">Github Login</button>
                </>
            }
            {userdata &&
                <div className="text-center">
                    <img src={userdata.photoURL} alt="" />
                    <h2>User Name: {userdata?.displayName}</h2>
                    <p>user Email: {userdata?.email}</p>
                </div>

            }
            
        </div>
    );
};

export default Login;