import { IconIndex } from '@/components/Icons';
import { IconNameType } from './IconIndex';

export default function Icon ({ name, ...props }: {name: IconNameType, className?: string, size?:number | string}) {
  const {
    className: classNameProp,
    ...others
  } = props;

  return (
    <span
      className={classNameProp}
      {...others}
      style={{fontSize: 36}}
    >
      {IconIndex[name]}
    </span>
  )
}
