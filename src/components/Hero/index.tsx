import Image from "next/image";
import { Icon } from "@/components/Icons";

export type StoreType = {
  title: string,
  url: string,
  icon: string
};

export type store =
  'amazon' |
  'apple' |
  'deezer' |
  'spotify' |
  'soundcloud' |
  'ytmusic';

const STORES: Array<StoreType> = [
  {
    title: 'Apple Music',
    icon: 'SiApplemusic',
    url: 'https://itunes.apple.com/be/artist/koopa-querales/1423135500'
  },
  {
    title: 'amazon',
    icon: 'SiAmazonmusic',
    url: 'https://music.amazon.com/search/koopa+querales'
  },
  {
    title: 'Spotify',
    icon: 'FaSpotify',
    url: 'https://open.spotify.com/artist/26SaZCIwAtd9q93VhE7y60'
  },
  {
    title: 'Soundcloud',
    icon: 'FaSoundcloud',
    url: 'https://soundcloud.com/koopaquerales'
  },
  {
    title: 'YouTube Music',
    icon: 'SiYoutubemusic',
    url: 'https://play.google.com/store/music/artist/Koopa_Querales?id=Ahcnhnktgwajxjblxn2ulnd3c4a'
  }
];

function StoreIcon ({ store }: { store: StoreType }): React.ReactNode {
  const { title, url, icon } = store;

  return (
    <a aria-label={title} href={url} target="_blank" className={'mx-6'}>
      <Icon name={icon} />
    </a>
  )
}

export default function Hero() {
  return (
    <>
      <section className='grid'>
        <Image
          src="/img/header-bg.jpg"
          width={1785}
          height={958}
          className="image-bg grayscale w-full"
          alt="koopa-querales-hero"
          title="Koopa Querales"
        />
        <div className="container p-6 mx-auto">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/img/koopa-querales-logo.png"
              title="Koopa Querales"
              alt="koopa-querales-logo"
              width={893}
              height={249}
            />
          </div>
        </div>
        <div className="container mx-auto p-6">
          <div className="flex justify-center items-center gap-2">
            {
              STORES.map((store: StoreType, key: number) => <StoreIcon key={key} store={store} />)
            }
          </div>
        </div>
      </section>
      <section className="grid">
      <div className="container mx-auto p-6">
        <div className="flex justify-center items-center gap-2" style={{height: 380}}>
          <iframe
            src="https://open.spotify.com/embed/artist/26SaZCIwAtd9q93VhE7y60?theme=0"
            width="100%"
            height="380"
            allow="encrypted-media"
            ></iframe>
        </div>
      </div>
    </section>
  </>
  );
}
