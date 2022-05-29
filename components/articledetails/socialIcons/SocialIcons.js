import socialIcons from "./imports";
import * as S from "./styles/styles";

const SocialIcons = ({ url, title }) => {
  const iconSize = 30;
  return (
    <S.Icons>
      <socialIcons.FacebookShareButton url={url} quote={title}>
        <socialIcons.FacebookIcon size={iconSize} round />
      </socialIcons.FacebookShareButton>

      <socialIcons.FacebookMessengerShareButton
        url={url}
        appId={process.env.messengerId}
      >
        <socialIcons.FacebookMessengerIcon size={iconSize} round />
      </socialIcons.FacebookMessengerShareButton>

      <socialIcons.TwitterShareButton url={url} title={title}>
        <socialIcons.TwitterIcon size={iconSize} round />
      </socialIcons.TwitterShareButton>

      <socialIcons.WhatsappShareButton url={url} title={title} separator=":: ">
        <socialIcons.WhatsappIcon size={iconSize} round />
      </socialIcons.WhatsappShareButton>

      <socialIcons.EmailShareButton url={url} subject={title} body="body">
        <socialIcons.EmailIcon size={iconSize} round />
      </socialIcons.EmailShareButton>
    </S.Icons>
  );
};

export default SocialIcons;
