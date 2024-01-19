import React from 'react';

const LanguageButtons = ({ langs, activeButton, setActiveButton }) => {
  return (
    <div className='flex justify-center items-center rounded-md'>
      {langs.map((lang) => (
        <button
          className={`px-2 ${activeButton === lang.id ? "bg-[#2e2e2e]" : "bg-black"} ${
            lang.id === "secondary" ? "rounded-tr-md rounded-br-md" : "rounded-tl-md rounded-bl-md"
          }`}
          key={lang.id}
          onClick={() => setActiveButton(lang.id)}
        >
          {lang.lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageButtons;