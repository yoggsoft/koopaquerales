import Image from "next/image";

export default function Footer() {
  const year = (new Date()).getFullYear();
  return (
    <>
      <footer id="footer">
        <div className="container-padding">
          <div className="header-icons">
            {/* {% for link in site.socials %}
              <a aria-label="{{ link.title }}" href="{{ link.url }}" target="_blank">
                <i className="icon fa fa-{{ link.title }}" aria-hidden="true"></i>
              </a>
            {% endfor %} */}
          </div>
          <div className="footer-signature">
              <span>
                <i className="icon fa fa-code" aria-hidden="true"></i>
                with
                <i className="icon fa fa-heart" aria-hidden="true"></i>
                and
                <i className="icon fa fa-github-alt" aria-hidden="true"></i>
              </span>
              <br/>
              <span>
                {year} - Koopa Querales
              </span>
          </div>
        </div>
      </footer>
      <script src="{{ '/assets/js/app.js' | prepend: site.baseurl }}"></script>
    </>
  );
}
