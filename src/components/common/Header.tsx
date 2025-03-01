import Image from 'next/image';
import { Icon } from '@/components/common/Icons';
import { SOCIAL, STORES } from '@/const/links';

export default function Header () {
  return (
    <header className='top-0 fixed z-10 w-full'>
      <div className='w-full p-4 min-w-[320px] flex justify-between z-10 h-16 md:h-24 items-center backdrop-blur-sm'>
        <div className='inline-flex grow-0'>
          <div className='inline-flex gap-2 md:gap-4'>
            {
              SOCIAL.map((item, key) => 
                <a
              key={key}
              aria-label={item.title}
              href={item.url}
              target='_blank'
              className={'transform transition duration-350 hover:scale-110 hover:opacity-70'}
              title={item.title}
              >
                  <Icon className='w-2 md:w-6' name={item.icon} />
                </a>
              )
            }
          </div>
        </div>
        <div className='flex justify-center max-sm:w-full grow-1'>
          <Image
            className='w-[120px] md:w-[180px] lg:w-[240px]'
            src='/img/koopa-querales-logo.png'
            title='Koopa Querales'
            alt='koopa-querales-logo'
            width={893}
            height={249}
          />
        </div>
        <div className='inline-flex grow-0'>
          <div className='inline-flex gap-2 md:gap-4'>
            {
              STORES.map((item, key) => 
                <a
              key={key}
              aria-label={item.title}
              href={item.url}
              target='_blank'
              className={'transform transition duration-350 hover:scale-110 hover:opacity-70'}
              title={item.title}
              >
                  <Icon className='w-2 md:w-6' name={item.icon} />
                </a>
              )
            }
          </div>
        </div>
      </div>
    </header>
  );
}
