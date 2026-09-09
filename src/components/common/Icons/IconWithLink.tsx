import { Icon } from '@/components/common/Icons'
import { ItemType } from '@/const/links';

export default function IconWithLink ({ item }: { item: ItemType }): React.ReactNode {
	const { title, url, icon } = item;

	return (
		<a
			aria-label={title}
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={'p-2 mx-1 md:mx-4 transform transition duration-350 hover:scale-110 hover:opacity-70'}
		>
			<Icon name={icon} className='text-2xl md:text-3xl' />
		</a>
	)
}
