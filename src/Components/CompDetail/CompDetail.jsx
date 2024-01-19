import React from "react";
import CodeButton from "../Buttons/CodeButton";
import SocialButton from "../Buttons/SocialButton";

const CompDetail = ({ compDetails, code, social }) => {
  const { username, platform, socials } = social;

  return (
    <div className=" lg:w-3/5 xl:w-2/5 w-[90%] mt-10 text-white lg:text-center xl:text-left">
      <p className="text-3xl md:text-4xl mb-3">{compDetails.component}</p>
      <p className="text-[#a8a8a8] mb-3">{compDetails.desc}</p>

      <div className="flex justify-start lg:justify-center xl:justify-start gap-3">
        <CodeButton url={code} />
        <SocialButton
          username={username.twitter}
          platform={platform[0]}
          url={socials.twitter}
        />
      </div>
    </div>
  );
};

export default CompDetail;
