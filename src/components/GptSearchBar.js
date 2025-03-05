import {lang} from '../utils/languageConstants'
const GptSearchBar = () => {
  return (
    <div className="pt-[7%] flex justify-center">
        <form className="grid w-1/2 grid-cols-12 bg-black">
            <input type="text" className="col-span-9 p-4 m-4" placeholder={lang?.en?.gptSearchPlaceholder} />
            <button className="col-span-3 px-4 py-2 m-4 text-white bg-red-700 rounded-lg">{lang?.en?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar