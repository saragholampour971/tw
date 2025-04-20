import React from 'react';
import EpisodePreview from "src/components/series-detail/components/EpisodePreview";

type Props = {
  data: {
    image: string
    duration: string
    to: string
    title: string
    subtitle: string
  }[]
}

const EpisodesList = (props: Props) => {
  const {data} = props
  return (
    <div className={'flex flex-wrap gap-4'}>
      {data.map(EpisodePreview)}
    </div>
  );
};

export default EpisodesList;
