type Props = {
  genres: string[]

} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const GenreList = (props: Props) => {
  const {genres, ...divProps} = props

  return <div {...divProps} className={'text-center md:text-start ' + divProps.className}>
    {genres.map((node, index) =>
      <span key={`genre-${index}`} className={'bg-white/[20%] px-1 rounded-[2px]' +
        ' mx-1 inline-block leading-4 py-1 text-[11px] font-medium'}>{node}</span>)}
  </div>
}


export default GenreList
