import React, {ReactElement} from 'react';

type Props = {
  data: {
    svg?: ReactElement
    label: ReactElement | string
  }[]
}
const ShortDescription = (props: Props) => {
  const {data} = props

  return (
    <div className={'flex flex-wrap'}>
      {props.data.map((node, index) =>
        <>
          <div
            className={'flex items-center gap-x-2 text-gray-medium leading-5'}
            key={`short-desc-${index}`}
          >
            {typeof node.label == 'string' ?
              <span className={'text-[12px] font-medium'}>{node.label}</span>
              : node.label}

            {node.svg}
          </div>
          {index === data.length - 1 ? null : <span className={'mx-2'}>.</span>}
        </>)}
    </div>
  );
};

export default ShortDescription;
