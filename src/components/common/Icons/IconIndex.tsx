import {
  FaCode,
  FaGithub,
  FaSpotify,
  FaSoundcloud,
  FaLinkedin,
  FaFacebookSquare,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaHeart,
  FaCross
} from 'react-icons/fa';

import {
  SiAmazonmusic,
  SiYoutubemusic,
  SiApplemusic
} from 'react-icons/si';

export type IconNameType = 
  'code' |
  'heart' |
  'github' |
  'spotify' |
  'soundcloud' |
  'amazonmusic' |
  'ytmusic' |
  'applemusic' |
  'linkedin' |
  'facebook' |
  'tiktok' |
  'instagram' |
  'youtube' |
  'cross';

export const IconIndex: Record<IconNameType, React.ReactNode> = {
  code: <FaCode />,
  heart: <FaHeart />,
  github: <FaGithub />,
  spotify: <FaSpotify />,
  soundcloud: <FaSoundcloud />,
  amazonmusic: <SiAmazonmusic />,
  ytmusic: <SiYoutubemusic />,
  applemusic: <SiApplemusic />,
  linkedin: <FaLinkedin />,
  facebook: <FaFacebookSquare />,
  tiktok: <FaTiktok />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
  cross: <FaCross />
};

export default IconIndex;
