
import { IconWithLink } from '@/components/common/Icons';
import { ItemType, item, STORES } from "@/const/links";


type VideoType = {
  title: string,
  videoId: string,
  featured?: boolean,
  links?: Partial<Record<item, string>>
}

const VIDEOS: Array<VideoType> = [
  {
    title: 'whisky',
    videoId: 'sdM8rI0iAfs',
    featured: true,
    links: {
      spotify: 'https://open.spotify.com/album/3q8GPQQzgP1vICX8pYhBJm',
      ytmusic: 'https://music.youtube.com/watch?v=6V-So2_a0X8&si=QAuSBixRvu2Jrppx',
      apple:'https://music.apple.com/us/album/whisky-single/1547974691?uo=4&app=music&at=1001lry3&ct=dashboard',
      amazon: 'http://www.amazon.com/gp/product/B08SHY4THY/?tag=distrokid06-20',
      deezer: 'https://www.deezer.com/album/198416632'
    }
  },
  {
    title: 'tos',
    videoId: 'Vo-y_TN2rgs'
  },
  {
    title: 'isgb',
    videoId: 'C5_uTzBMKW8'
  },
  {
    title: 'lagrimas',
    videoId: '8E3cNmkoBz4'
  },
  {
    title: 'tin',
    videoId: 'Ifp9VFG_eL4'
  },
  {
    title: 'wttj',
    videoId: 'I6Lg9LvF0Ic'
  },
  {
    title: 'whisklive',
    videoId: 'y7nZJWXMbQw'
  },
  {
    title: 'enestanoche',
    videoId: 'qeSgeckncLA'
  },
  {
    title: 'darkness',
    videoId: 'mpXrtPT42sI'
  },
];

function VideoItem ({ item }: { item: VideoType }): React.ReactNode {
  const { title, videoId } = item;

  return (
    <div className="rounded-lg overflow-hidden aspect-video bg-black/40">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&controls=0`}
        title={`${title} — Koopa Querales music video`}
        allow="encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default function Media() {
  return (
    <>
      <section className="grid" aria-labelledby="listen-heading">
        <div className="container mx-auto p-6">
          <h2 id="listen-heading" className="text-3xl font-bold mb-4 text-center">Listen</h2>
          <div className="flex justify-center items-center gap-2" style={{height: 380}}>
            <iframe
              src="https://open.spotify.com/embed/artist/26SaZCIwAtd9q93VhE7y60?theme=0"
              width="100%"
              height="380"
              title="Koopa Querales on Spotify"
              allow="encrypted-media"
              ></iframe>
          </div>
        </div>
        <div className="container mx-auto p-6">
          <div className="flex justify-center items-center flex-col gap-4">
            <span>
              Also Available on:
            </span>
            <div className="flex">
              {
                STORES.map((item: ItemType, key: number) => <IconWithLink key={key} item={item} />)
              }
            </div>
          </div>
        </div>
      </section>
      <section className="grid" aria-labelledby="videos-heading">
        <div className="container mx-auto p-6">
          <h2 id="videos-heading" className="text-3xl font-bold mb-4 text-center">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
            {
              VIDEOS.map((video, key) => <VideoItem key={key} item={video} />)
            }
          </div>
        </div>
      </section>
    </>
  );
}
