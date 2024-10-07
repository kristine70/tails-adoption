'use client';
import { FC } from 'react';
import { paths } from '../navigation';
import { useRouter } from 'next/navigation';

export const Header: FC = () => {
  const router = useRouter();
  return (
    <div className=''>
      {paths.map(pathObj => {
        return (
          <div key={pathObj.path} onClick={() => router.push(pathObj.path)}>
            {pathObj.name}
          </div>
        );
      })}
    </div>
  );
};
