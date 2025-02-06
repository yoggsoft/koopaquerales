import { Icon } from "@/components/Icons";

export default function Footer() {
  const year = (new Date()).getFullYear();
  return (
    <footer id="footer">
      <div className="container-padding">
        <div className="header-icons">
        </div>
        <div className="footer-signature">
            <span>
              <Icon name='MdCode' /> with <Icon name='LuHeart' /> and <Icon name='FaGithub' />
            </span>
            <br/>
            <span>
              {year} - Koopa Querales
            </span>
        </div>
      </div>
    </footer>
  );
}
