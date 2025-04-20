import React, {ReactElement} from 'react';
import cover from "src/assets/hero-bg.jpg";
import mobileCover from "src/assets/hero-bg-mobile.jpg";

type Props = {
  children?: ReactElement | ReactElement[]

} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const MovieCover = (props: Props) => {
  const {children, ...divProps} = props
  return (
    <div className={'min-h-[216px] md:min-h-[586px] h-auto relative'}>
      <div
        className={"w-full h-full md:absolute md:inset-0 image-container relative " +
          divProps.className
        }
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={mobileCover}
          />
          <source
            media="(min-width: 769px)"
            srcSet={cover}
          />
          <img
            src={cover}
            alt="cover"
            className="w-full h-full object-cover object-left md:object-center"
            loading="lazy"
          />
        </picture>
        {/*- drop shadow*/}
        <div className={'absolute left-0 top-0 bottom-0 right-0 bg-opacity-[70%]' +
          'bg-black bg-gradient-to-t from-black from-0% to-20%'
        }/>
      </div>
      {children}
    </div>
  );
};

export default MovieCover;
