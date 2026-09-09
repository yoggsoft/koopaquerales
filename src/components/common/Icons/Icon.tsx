import { IconIndex } from '@/components/common/Icons';
import { IconNameType } from '@/const/links';

export default function Icon ({ name, ...props }: {name: IconNameType, className?: string}) {
  const {
    className: classNameProp,
    ...others
  } = props;

  return (
    <span
      className={classNameProp}
      {...others}
    >
      {IconIndex[name]}
    </span>
  )
}
