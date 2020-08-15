import React from "react";
import {
  SocialLink,
  SocialProvider,
} from "@mui-treasury/components/socialLink";
import { useRoundSocialLinkStyles } from "@mui-treasury/styles/socialLink/round";

const SocialLinks = () => {
  return (
    <SocialProvider useStyles={useRoundSocialLinkStyles}>
      <SocialLink
        brand={"FacebookCircle"}
        href={"https://www.facebook.com/siriwat.kunaporn/"}
      />
      <SocialLink brand={"Twitter"} href={"https://twitter.com/siriwatknp"} />
      <SocialLink brand={"Instagram"} href={""} />
      <SocialLink
        brand={"LinkedIn"}
        href={"https://www.linkedin.com/in/siriwat-kunaporn-1b4095158/"}
      />
      <SocialLink brand={"GooglePlus"} />
    </SocialProvider>
  );
};

export default SocialLinks;
