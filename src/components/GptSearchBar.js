import {lang} from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.appConfig.lang);

  return (
    <div className="pt-[7%] flex justify-center">
        <form className="grid w-1/2 grid-cols-12 bg-black">
            <input type="text" className="col-span-9 p-4 m-4" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="col-span-3 px-4 py-2 m-4 text-white bg-red-700 rounded-lg">{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar