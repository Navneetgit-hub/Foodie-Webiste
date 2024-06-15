import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = (props) => {

    const OnSearchText = (value) => {
        console.log(value)
        props.onSearch(value)
    }

    return (
        <div className="flex w-2/4 justify-center items-center">
            <div className='flex w-11/12'>
                <input type='text' className="p-2 w-11/12 border-2 rounded-l-lg border-rose-500 focus:border-pink-500 outline-none caret-rose-400" onChange={(e)=> OnSearchText(e.target.value)}></input>
                <button type='submit' className="text-white rounded-r-lg px-4 bg-rose-500 hover:bg-pink-500"><AiOutlineSearch /></button>
            </div>
        </div>
    )
}

export default SearchBar;