import { useState } from "react"
import { Header } from "./Header"


const Login = () => {
    const [isSignInForm, setSignInForm] = useState(false)
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }
    return (
        <div><Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg" alt="logo" />
            </div>
            <form className="absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black rounded-lg my-36 bg-opacity-80">
                <h1 className="py-4 text-3xl font-bold">{isSignInForm ? "Sign Up" : "Sign In"}</h1>
                {isSignInForm && <input type="text" placeholder="Full Name" className="w-full p-4 my-4 bg-gray-700" />}
                <input type="text" placeholder="Email Address" className="w-full p-4 my-4 bg-gray-700" />
                <input type="password" placeholder="Password" className="w-full p-4 my-4 bg-gray-700" />
                <button className="w-full p-4 my-4 bg-red-700">{isSignInForm ? "Sign Up" : "Sign In"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "Already registered? Sign In Now" : "New to Netflix? Sign Up Now"}</p>
            </form>
        </div>
    )
}

export default Login


// background https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg