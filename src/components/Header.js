import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/appConfigSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, password, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            password: password,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // return ()=> unsubscribe()
  }, []);
  const handleGptSeachClick = () => {
    // Toggle GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-20 flex justify-between w-full px-8 py-2 bg-gradient-to-b from from-black">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          {showGptSearch && (
            <select
              className="p-2 m-2 text-white bg-gray-900"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.indentifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button
            className="px-4 py-2 mx-4 my-2 text-white bg-purple-900 rounded-xl"
            onClick={handleGptSeachClick}
          >
            {showGptSearch?"Home Page": "GPT Search"}
          </button>

          <img alt="user-icon" className="w-12 h-12" src={user.photoURL} />

          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out{" "}
          </button>
        </div>
      )}
    </div>
  );
};
