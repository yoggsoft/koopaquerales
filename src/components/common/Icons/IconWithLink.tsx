import { Icon } from '@/components/common/Icons'
import { ItemType } from '@/const/links';

export default function IconWithLink ({ item }: { item: ItemType }): React.ReactNode {
	const { title, url, icon } = item;

	return (
		<a aria-label={title} href={url} target="_blank" className={'mx-2 md:mx-6 transform transition duration-350 hover:scale-110 hover:opacity-70'}>
			<Icon name={icon} />
		</a>
	)
}
