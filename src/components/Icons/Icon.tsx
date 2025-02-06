import { IconIndex } from '@/components/Icons';

export default function Icon ({ name, ...props }: {name: string}) {
  return (
    <div style={{ fontSize: 70 }} {...props}>
      {IconIndex[name]}
    </div>
  )
}
