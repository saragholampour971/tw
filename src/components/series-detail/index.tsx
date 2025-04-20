import React from 'react';
import Tabs from "src/components/base/tabs";
import {description, descriptionInfo, genresList, tabsInfo} from "src/components/constant";
import MovieCover from "src/components/base/MovieCover";
import MovieData from "src/components/series-detail/components/MovieData";
import titleName from "src/assets/title.png";

const SeriesDetail = () => {
  return (
    <>
      <MovieCover>
        <MovieData
          bigNameImage={titleName}
          name={"هانیبال | hannibal"}
          shortInfos={descriptionInfo}
          genres={genresList}
          movieDescription={description}/>
      </MovieCover>
      <div className={'mobile-content-layout md:content-layout'}>
        <Tabs tabs={tabsInfo} defaultTab={0}/>
      </div>
    </>
  );
};

export default SeriesDetail;
