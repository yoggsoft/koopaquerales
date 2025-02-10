import Image from "next/image";
import { IconWithLink } from "@/components/Icons";
import { IconNameType } from "@/components/Icons/IconIndex";

export type ItemType = {
  title: item,
  url: string,
  icon: IconNameType
};

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
  'ytmusic';

const SOCIAL: Array<ItemType> = [
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
];

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
              SOCIAL.map((item: ItemType, key: number) => <IconWithLink key={key} item={item} />)
            }
          </div>
        </div>
      </section>
  </>
  );
}
