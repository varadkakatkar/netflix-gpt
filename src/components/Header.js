
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
export const Header = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            navigate("/error")
            
          });
    }

    return (
        <div className="absolute z-20 flex justify-between w-screen px-8 py-2 bg-gradient-to-b from from-black">
            <img 
            className="w-44"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
            <div className="flex p-4">
                <img alt="user-icon"
                className="w-12 h-12"
                src="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"/>
                <button className="font-bold text-white" onClick={handleSignOut}>Sign Out </button>
            </div>
        </div>
    )
}

