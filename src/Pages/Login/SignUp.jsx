import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProviders';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const signUpUser = { name, email, password };
        console.log(signUpUser);
        createUser(email,password)
        .then(result =>{
            const user = result.user
            console.log('current user',user);
            
        })
        .then(error =>{
            console.log(error);
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="mr-12 w-1/2 gap-5">
                        <img src={img} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div>
                            <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <div className="relative ">
                                    <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                                    <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p className='text-center mb-4'>Already Have An Account <Link to='/login'><a className="link link-primary">Sign In</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;