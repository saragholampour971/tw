import React from 'react';
import {Link} from "react-router";
import {measureMemory} from "vm";
import {PlaySvg} from "src/icon-pack/icons";

type Props = {
  image: any
  duration: string
  to: string
  title: string
  subtitle: string
}

const EpisodePreview = (props: Props) => {
  const {image, to, subtitle, title, duration} = props
  return (
    <Link to={to} className={'w-full md:w-[calc(25%-1rem)] md:space-y-2 flex md:block gap-2'}>
      <div className={'relative group'}>
        <img
          className={'rounded-1 min-w-[150px] w-[9rem] md:w-full'}
          loading={'lazy'}
          alt={title}
          src={image}
        />
        {/*-- duration*/}
        <div className={'absolute left-2 bottom-2 text-xs text-white bg-black bg-opacity-[90%] pt-1 px-1'}>{duration}
        </div>

        {/*--play*/}
        <div
          className={'p-3 rounded-full bg-black bg-opacity-[60%] hidden group-hover:flex' +
            ' -translate-x-[50%] -translate-y-[50%] absolute top-[50%] left-[50%]'}>
          <PlaySvg/>
        </div>
      </div>
      <div>
        <p className={'text-xs text-gray-medium font-medium leading-5 mb-1'}>{title}</p>
        <p className={'text-[0.7rem] text-gray-dark font-medium leading-4'}>{subtitle}</p>

      </div>
    </Link>
  );
};

export default EpisodePreview;
