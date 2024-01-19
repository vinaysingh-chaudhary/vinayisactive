import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FiCopy } from "react-icons/fi";
import LanguageButtons from "./Buttons/LanguageButtons";
import langs from "./Data/Lang";
import {copyToClipboard} from "../CodeSnippet/Utilities/copyToClipboard"

const CodeSnippet = ({ primaryLang, secondaryLang, snippetName }) => {
  const [activeButton, setActiveButton] = useState("primary");
  const activeLang = activeButton === "primary" ? primaryLang : secondaryLang; 
  const langSyntax = activeButton === "primary" ? langs[0].language : langs[1].language; 

  return (
    <div className="w-[95%] lg:w-[70%] xl:w-[50%]  overflow-hidden bg-black border-2 border-customdark rounded-xl sm:hover:shadow-[0px_0px_22px_5px_rgba(111,_190,_234,_0.18)] transition-shadow duration-300 ease-in-ou">
      <div className=" p-2 flex justify-between items-center bg-customdark rounded-lg text-white">
        <p>▸ {snippetName}</p>

        <div className=" flex justify-between items-center gap-1 text-sm ">
          <LanguageButtons
            langs={langs}
            setActiveButton={setActiveButton}
            activeButton={activeButton}
          />

          <button 
              className="px-2 transition-transform duration-300 ease-in-out transform hover:scale-150"
              onClick={() => copyToClipboard(activeLang)}
              >
            <FiCopy />
          </button>
        </div>
      </div>

      <SyntaxHighlighter
        language={langSyntax}
        style={atomOneDark}
        customStyle={{ backgroundColor: "#000000" }}
        showLineNumbers
      >
        {activeLang}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
