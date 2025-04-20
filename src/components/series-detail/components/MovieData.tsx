import React, {ReactElement} from 'react';
import ShortDescription from "src/components/series-detail/components/ShortDescription";
import GenreList from "src/components/series-detail/components/GenreList";
import ActionButtons from "src/components/series-detail/components/ActionButtons";

type Props = {
  bigNameImage: string
  name: string
  shortInfos: {
    svg?: ReactElement
    label: string
  }[]
  genres: string[]
  movieDescription: string
  // -----------
  onPlay?: VoidFunction
  onDownload?: VoidFunction
  onSave?: VoidFunction
  onLike?: VoidFunction
  onDesLike?: VoidFunction
}

const MovieData = (props: Props) => {
  const {
    genres, movieDescription, name, bigNameImage, shortInfos, onDownload, onSave, onLike, onDesLike, onPlay,
  } = props

  return (
    <div
      className="relative px-4 md:px-10 space-y-2 z-20 md:py-[75px] w-full h-full
         content-between text-white m-auto md:max-w-maxWidth">
      <img src={bigNameImage} alt={'title'} className={'hidden md:block'}/>
      <h3 className={'font-bold leading-7 gap-x-1 text-center md:text-start'}>
        {name}
      </h3>
      <ShortDescription data={shortInfos}/>

      <GenreList genres={genres}/>

      <ActionButtons
        onSave={onSave}
        onLike={onLike}
        onPlay={onPlay}
        onDesLike={onDesLike}
        onDownload={onDownload}
      />

      <p className={'text-4 font-normal leading-6 w-full md:max-w-[50%] pt-4'}>
        {movieDescription}
      </p>
    </div>
  );
};

export default MovieData;
