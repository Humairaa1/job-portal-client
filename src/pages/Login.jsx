import Lottie from 'lottie-react';
import lottieLogin from '../../data/login.json'
import { useContext } from 'react';
import AuthContex from '../context/AuthContext';

export default function Login() {

    const {loginUser} = useContext(AuthContex);

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        loginUser(email,password)
        .then(result=>{
            console.log('login user : ',result.user);
        })
        .then(error=>{
            console.log(error.message);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center lg:text-left w-full md:w-[500px]">
                    <Lottie animationData={lottieLogin}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input w-full" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}
