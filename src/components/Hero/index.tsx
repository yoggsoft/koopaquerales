import Image from "next/image";
import { Icon } from "@/components/Icons";

import { StoreType } from "@/app/@types";

const STORES: Array<StoreType> = [
  {
    title: 'amazon',
    icon: 'SiAmazonmusic',
    url: 'https://music.amazon.com/search/koopa+querales'
  },
  {
    title: 'Apple Music',
    icon: 'SiApplemusic',
    url: 'https://itunes.apple.com/be/artist/koopa-querales/1423135500'
  },
  {
    title: 'Spotify',
    icon: 'FaSpotify',
    url: 'https://open.spotify.com/artist/26SaZCIwAtd9q93VhE7y60'
  },
  {
    title: 'YouTube Music',
    icon: 'SiYoutubemusic',
    url: 'https://play.google.com/store/music/artist/Koopa_Querales?id=Ahcnhnktgwajxjblxn2ulnd3c4a'
  },
  {
    title: 'Soundcloud',
    icon: 'FaSoundcloud',
    url: 'https://soundcloud.com/koopaquerales'
  }
];

function StoreIcon ({ store }: { store: StoreType }): React.ReactNode {
  const { title, url, icon } = store;

  return (
    <a aria-label={title} href={url} target="_blank" className={'m-6'}>
      <Icon name={icon} />
    </a>
  )
}

export default function Hero() {
  return (
    <div className='hero'>
      <Image
        src="/img/header-bg.jpg"
        width={1785}
        height={958}
        className="image-bg"
        alt="koopa-querales-hero"
        title="Koopa Querales"
      />
      <div className="header">
        <h1
          id="site-title"
          className="page-title display-type-logo text-fit"
        >
          <Image
            className={`logo`}
            src="/img/koopa-querales-logo.png"
            title="Koopa Querales"
            alt="koopa-querales-logo"
            width={893}
            height={249}
          />
        </h1>
        <div className="header-icons">
          {
            STORES.map((store: StoreType, key: number) => <StoreIcon key={key} store={store} />)
          }
        </div>
      </div>
    </div>
  );
}
