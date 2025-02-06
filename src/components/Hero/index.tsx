import Image from "next/image";

export default function Hero() {
  return (
    <div className='hero'>
      <Image
        src="/img/header-bg.jpg"
        width={100}
        height={100}
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
            className="logo"
            src="/img/koopa-querales-logo.png"
            title="Koopa Querales"
            alt="koopa-querales-logo"
            width={100}
            height={100}
          />
        </h1>
        <div className="header-icons">
          {/* {% for store in site.stores %}
            <a aria-label="{{ store.title }}" href="{{ store.url }}" target="_blank">
              <i class="icon fa fa-{{ store.title }}" aria-hidden="true"></i>
            </a>
          {% endfor %} */}
        </div>
        <div className="">
          <iframe
            src="https://open.spotify.com/follow/1/?uri=spotify:artist:26SaZCIwAtd9q93VhE7y60&size=detail&theme=dark"
            width="300"
            height="56"
            scrolling="no"
            style={ {border: 'none', overflow: 'hidden' }}
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}
