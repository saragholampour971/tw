import React, {ReactNode, useState, Suspense} from 'react';
import TabPanel from "src/components/base/tabs/TabPanel";
import Tab from "src/components/base/tabs/Tab";

type Props = {
  tabs: {
    label: string
    content: ReactNode
  }[]
  defaultTab?: number
  onchangeTab?: (tabIndex: number) => void
}

const Tabs = (props: Props) => {
  const {tabs, onchangeTab, defaultTab} = props
  const [activeTab, setActiveTab] = useState<number>(defaultTab || 0);
  const [mountedTabs, setMountedTabs] = useState<Set<number>>(new Set([defaultTab || 0]));


  return (
    <div className="w-full mt-10 space-y-5">
      <div className={'line-after mb-3 overflow-x-auto'}>
        <div className="flex w-full relative ">
          {tabs.map((tab, index) => (
            <Tab
              key={`tab-title-${index}`}
              label={tab.label}
              isActive={activeTab === index}
              onClick={() => {
                setActiveTab(index)
                setMountedTabs(prev => new Set(prev).add(index));
                onchangeTab?.(index)
              }}
            />
          ))}
        </div>
      </div>
      {tabs.map((tab, index) => {
        if (!mountedTabs.has(index)) return null;

        return (
          <Suspense fallback={<div key={`loading-${index}`}>Loading...</div>} key={`tab-panel-${index}`}>
            <TabPanel isActive={activeTab === index}>
              {tab.content}
            </TabPanel>
          </Suspense>
        );
      })}
    </div>
  );
};

export default Tabs;
