import React from 'react';
import Button from "src/components/base/Button";
import {DesLikeSvg, DownloadSvg, LikeSvg, PlaySvg} from "src/icon-pack/icons";
import SvgSaveSvg from "src/icon-pack/icons/SaveSvg";


type Props = {
  onPlay?: VoidFunction
  onDownload?: VoidFunction
  onSave?: VoidFunction
  onLike?: VoidFunction
  onDesLike?: VoidFunction
}

const ActionButtons = (props: Props) => {
  const {onPlay, onLike, onDesLike, onSave, onDownload} = props
  return (
    <div className={'flex items-center gap-x-4 pt-8 gap-y-4 w-full flex-wrap justify-center md:justify-start'}>
      <Button variant={'primary'} className={'bg-red-primary py-3 w-full md:w-[96px]'}
              icon={<PlaySvg className={'ml-2'}
              />}
              onClick={onPlay}

      >
        پخش
      </Button>
      <div className={'gap-x-2 flex'}>
        <Button variant={'outline'} className={'w-10 h-10'}
                icon={<DownloadSvg width={24} height={24}
                                   onClick={onDownload}
                />}/>
        <Button variant={'outline'} className={'w-10 h-10'}
                icon={<SvgSaveSvg width={24} height={24}/>}
                onClick={onSave}
        />
      </div>
      <div className={'flex gap-x-2'}>
        <Button variant={'outline'} className={'w-10 h-10'}
                icon={<LikeSvg width={24} height={24}
                               onClick={onLike}
                />}/>
        <Button variant={'outline'} className={'w-10 h-10'}
                icon={<DesLikeSvg width={24} height={24}/>}
                onClick={onDesLike}
        />
      </div>

    </div>
  );
};

export default ActionButtons;
