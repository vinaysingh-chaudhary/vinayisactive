import React from 'react'
import CodeSnippet from "../../DemoComponents/CodeSnippet/CodeSnippet";
import Data from "../../DemoComponents/CodeSnippet/Data/Data.json"
import CompDetail from '../../Components/CompDetail/CompDetail';
import social from '../../Database/social.json'

const CodeSnippetPage = () => {
  const { snippetName, primaryLang, secondaryLang, code, compDetails} = Data[0];

  return (
    <div className="flex flex-col xl:flex-row gap-10 xl:gap-0 lg:justify-around items-center xl:items-start py-20 scroll-smooth">
        <CompDetail compDetails={compDetails} code={code} social={social[0]}/>
        <CodeSnippet primaryLang={primaryLang} secondaryLang={secondaryLang} snippetName={snippetName} />
      </div>
  )
}

export default CodeSnippetPage
