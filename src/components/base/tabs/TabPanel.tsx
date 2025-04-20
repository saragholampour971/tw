import {ReactNode} from "react";

type Props = {

  children: ReactNode
  isActive: boolean
}

const TabPanel = (props: Props) => {
  const {children, isActive} = props
  return (
    <div
      className={`h-screen ${
        isActive ? '' : 'hidden'
      }`}
    >
      {children}
    </div>
  );
};

export default TabPanel
