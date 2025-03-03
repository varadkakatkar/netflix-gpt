import { useState, useRef } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { USER_AVATAR } from "../utils/constants.js";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

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
          console.log("userCredential ", userCredential);
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              console.log('auth.currentUser ',auth.currentUser)
              const { uid, email, password, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  password: password,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
             
              // navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log("user ", user);
        })
        .catch((error) => {
          console.log("error ", error);
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user ", user);
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
    //Sign in
    //   };
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute top-0 w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="logo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative flex items-center justify-center min-h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-11/12 p-8 mx-auto text-white bg-black rounded-lg md:w-8/12 lg:w-4/12 md:p-12 bg-opacity-80"
        >
          <h1 className="py-4 text-2xl font-bold md:text-3xl">
            {isSignInForm ? "Sign Up" : "Sign In"}
          </h1>
          {isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 my-2 bg-gray-700 rounded md:p-4 md:my-4"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-3 my-2 bg-gray-700 rounded md:p-4 md:my-4"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 my-2 bg-gray-700 rounded md:p-4 md:my-4"
          />
          <button
            className="w-full p-3 my-2 bg-red-700 rounded md:p-4 md:my-4 hover:bg-red-800"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </button>
          <p className="font-bold text-red-600">{errorMessage}</p>
          <p
            className="py-2 cursor-pointer md:py-4 hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "Already registered? Sign In Now"
              : "New to Netflix? Sign Up Now"}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
