import { useState, useRef } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    console.log("email ", email.current.value);
    console.log("password ", password.current.value);

    // validate form data
    const errMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    console.log("errorMessage 1", errMessage);
    setErrorMessage(errMessage);

    if (errMessage !== null) return;
    console.log("isSignInForm 1", isSignInForm);
    if (isSignInForm) {
      //signup logic
      console.log(
        "here 222 ",
        auth,
        email.current.value,
        password.current.value
      );
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          console.log("userCredential ", userCredential);
          const user = userCredential.user;
          console.log("user ", user);
          navigate("/browse")
          // ...
        }) 
        .catch((error) => {
          console.log("error ", error);
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " - " + errMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value,  password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('user ',user)
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errMessage);
        });
    }
    //Sign in
    //   };
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="logo"
          className="object-cover w-screen h-screen"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-0 right-0 w-11/12 md:w-8/12 lg:w-4/12 p-8 md:p-12 mx-auto text-white bg-black rounded-lg my-20 md:my-36 bg-opacity-80"
      >
        <h1 className="py-4 text-2xl md:text-3xl font-bold">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 md:p-4 my-2 md:my-4 bg-gray-700 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full p-3 md:p-4 my-2 md:my-4 bg-gray-700 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 md:p-4 my-2 md:my-4 bg-gray-700 rounded"
        />
        <button
          className="w-full p-3 md:p-4 my-2 md:my-4 bg-red-700 rounded hover:bg-red-800"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="font-bold text-red-600">{errorMessage}</p>
        <p className="py-2 md:py-4 cursor-pointer hover:underline" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Already registered? Sign In Now"
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
