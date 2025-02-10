import { Icon } from "@/components/Icons";

export default function Footer() {
  const year = (new Date()).getFullYear();
  return (
    <footer>
      <div className="container m-6 mt-12 mb-2 p-2 mx-auto text-center">
        <div className="flex justify-center items-center gap-2">
          <Icon name='code' />&nbsp;with&nbsp;<Icon name='heart' />&nbsp;and&nbsp;<Icon name='github' />
        </div>
      </div>
      <div className="container m-2 p-2 mx-auto text-center">
          <p>
            {year}&nbsp;-&nbsp;Koopa&nbsp;Querales
          </p>
      </div>
    </footer>
  );
}
