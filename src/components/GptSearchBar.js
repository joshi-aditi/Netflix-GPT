import React from "react";
import languageConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const lang = useSelector((store)=>store.config.lang);
  return (
    <div className=" pt-[8%] flex justify-center">
      <form className="bg-black grid w-[60%] grid-cols-12">
        <input
          className="mx-2 my-4 px-4 py-2 col-span-9"
          type="text"
          placeholder={languageConstants[lang].searchPlaceholder}
        ></input>
        <button className="col-span-3 mx-5 my-4 py-2 px-1 bg-red-700 text-white rounded-lg font-semibold">{languageConstants[lang].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
