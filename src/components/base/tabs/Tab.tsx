type Props = {
  label: string
  isActive: boolean
  onClick: VoidFunction
}


const Tab = (props: Props) => {
  const {label, isActive, onClick} = props
  return (
    <h6
      className={`cursor-pointer relative text-white px-8 py-2 shrink-0
      font-medium rounded-t-lg transition-colors duration-200 ${
        isActive
          ? 'active-tab-line bg-gradient-to-t from-red-light from-0% to-black to-100%'
          : null
      }`}
      onClick={onClick}
    >
      {label}
    </h6>
  );
};

export default Tab
