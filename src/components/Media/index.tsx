import { store } from "../Hero";

type VideoType = {
  title: string,
  videoId: string,
  featured?: boolean,
  links?: Partial<Record<store, string>>
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
  }
];

function VideoItem ({ item }: { item: VideoType }): React.ReactNode {
  const { videoId } = item;

  return (
    <div className="...">
      <iframe
        width="100%"
        height="320"
        src={`https://www.youtube.com/embed/${videoId}?controls=0`}
        allow="modestbranding;encrypted-media;gyroscope;picture-in-picture;"
        allowFullScreen
      />
    </div>
  )
}

export default function Media() {
  return (
    <>
      <section className="grid">
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            {
              VIDEOS.map((video, key) => <VideoItem key={key} item={video} />)
            }
          </div>
        </div>
      </section>
    </>
  );
}
