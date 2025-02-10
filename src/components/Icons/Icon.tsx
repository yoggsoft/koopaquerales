import { IconIndex } from '@/components/Icons';

export default function Icon ({ name, ...props }: {name: string, className?: string, size?:number | string}) {
  const {
    className: classNameProp,
    ...others
  } = props;

  return (
    <span
      className={classNameProp}
      {...others}
      style={{fontSize: 52}}
    >
      {IconIndex[name]}
    </span>
  )
}
