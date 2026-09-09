'use client';

import { Icon } from '@/components/common/Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='w-full'>
      <div className=' lg:justify-between'>
        <div className="flex justify-center items-center text-sm">
          <Icon name='code' />&nbsp;by&nbsp;
          <a
            href='https://www.manuelreyes.dev' aria-label='Manuel Reyes'
            className='font-bold'
          >
            manuelreyes.dev
          </a>
        </div>
        <div className="container my-2 px-2 mx-auto text-center">
            <p className='text-xs italic text-gray-400'>
              {year}&nbsp;-&nbsp;Koopa&nbsp;Querales
            </p>
        </div>
      </div>
    </footer>
  );
}
