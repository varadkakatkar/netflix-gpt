
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store =>store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // navigate("/");
          }).catch((error) => {
            navigate("/error")
            
          });
    }
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
            navigate("/browse")
          } else {
            dispatch(removeUser());
            navigate("/")
          }
        });

        // return ()=> unsubscribe()
      }, []);
    return (
        <div className="absolute z-20 flex justify-between w-full px-8 py-2 bg-gradient-to-b from from-black">
            <img 
            className="w-44"
            src={LOGO} alt="logo"/>
            {user && <div className="flex p-4">
                <img alt="user-icon"
                className="w-12 h-12"
                src={user.photoURL}/>
                <button className="font-bold text-white" onClick={handleSignOut}>Sign Out </button>
            </div>}
        </div>
    )
}

