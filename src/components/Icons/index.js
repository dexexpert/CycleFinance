import styled from "styled-components";

/*====== icons =======*/
import {
  IoLogoDiscord,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoTiktok,
} from "react-icons/io5";

const SocialIconWrap = styled.div`
  display: flex;
  color: #ffffff;
  justify-content: center;
`;

const Icon = styled.div`
  cursor: pointer;
  transition: all ease 0.3s;
  transform: scale(1);
  &:hover {
    transform: scale(1.3);
  }
`;

const SocialIcon = (props) => {
  const { type, socialLink } = props;
  console.log(socialLink?.twitter);
  return (
    <Icon className="mx-2">
      {type === "instagram" ? (
        <a href={socialLink?.instagram} target="_blank" rel="noreferrer">
          <IoLogoInstagram size="20" />
        </a>
      ) : type === "discord" ? (
        <a href={socialLink?.discord} target="_blank" rel="noreferrer">
          <IoLogoDiscord size="20" />{" "}
        </a>
      ) : type === "twitter" ? (
        <a href={socialLink?.twitter} target="_blank" rel="noreferrer">
          <IoLogoTwitter size="20" />
        </a>
      ) : (
        <a href={socialLink?.tiktok} target="_blank" rel="noreferrer">
          <IoLogoTiktok size="20" />
        </a>
      )}
    </Icon>
  );
};

const SocialIcons = (props) => {
  const { socialLink, discordStatus } = props;
  return (
    <SocialIconWrap>
      {!socialLink?.instagram === "" ? (
        <SocialIcon type="instagram" socialLink={socialLink} />
      ) : null}
      {discordStatus && <SocialIcon type="discord" socialLink={socialLink} />}
      {!socialLink?.twitter === "" ? (
        <SocialIcon type="twitter" socialLink={socialLink} />
      ) : null}
      {!socialLink?.tiktok === "" ? (
        <SocialIcon type="tiktok" socialLink={socialLink} />
      ) : null}
    </SocialIconWrap>
  );
};

export default SocialIcons;
