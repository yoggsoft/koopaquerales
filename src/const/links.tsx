export type item =
  'facebook' |
  'instagram' |
  'youtube' |
  'tiktok' |
  'amazon' |
  'apple' |
  'applemusic' |
  'deezer' |
  'spotify' |
  'soundcloud' |
  'ytmusic'
;

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


export type ItemType = {
  title: item,
  url: string,
  icon: IconNameType
};

export const SOCIAL: Array<ItemType> = [
	{
		title: 'facebook',
		url: 'https://www.facebook.com/koopaquerales',
		icon: 'facebook'
	},
	{
		title: 'youtube',
		url: 'https://www.youtube.com/c/koopaquerales',
		icon: 'youtube'
	},
	{
		title: 'instagram',
		url: 'https://www.instagram.com/koopaquerales',
		icon: 'instagram'
	},
	{
		title: 'tiktok',
		url: 'https://www.tiktok.com/@koopaquerales',
		icon: 'tiktok'
	}
] as const;

export const STORES = [
  {
    title: 'Stream on Apple Music',
    icon: 'applemusic',
    url: 'https://itunes.apple.com/be/artist/koopa-querales/1423135500'
  },
  {
    title: 'Stream on Amazon Music',
    icon: 'amazonmusic',
    url: 'https://music.amazon.com/search/koopa+querales'
  },
  {
    title: 'Stream on Spotify',
    icon: 'spotify',
    url: 'https://open.spotify.com/artist/26SaZCIwAtd9q93VhE7y60'
  },
  {
    title: 'Listen on Soundcloud',
    icon: 'soundcloud',
    url: 'https://soundcloud.com/koopaquerales'
  },
  {
    title: 'Stream on YouTube Music',
    icon: 'ytmusic',
    url: 'https://play.google.com/store/music/artist/Koopa_Querales?id=Ahcnhnktgwajxjblxn2ulnd3c4a'
  }
] as const;
