import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="flex p-10 md:p-20 gap-5 flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <img
          className="w-full xl:w-4/5"
          src="https://i.ibb.co/BGtFpnH/Rectangle-20078.png"
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="font-extrabold text-2xl">Our Services</h1>
        <p className="text-sm mt-2">
          Empowering Lives through Comprehensive Medical Excellence: Your
          Trusted Health Center, Committed to Providing Advanced Care,
          Compassion, and Personalized Solutions for Optimal Well-being and
          Healing, Tailored to Meet Your Unique Healthcare Needs.
        </p>
        <Tabs
          onSelect={(e) => {
            setSelectedIndex(e);
          }}
          defaultIndex={selectedIndex}
          className="mt-5"
        >
          <TabList className="flex justify-between mb-2 px-1">
            <Tab
              className={`h-full cursor-pointer px-4 border border-[#F7A582] py-3 rounded-md ${
                selectedIndex === 0 && "bg-[#F7A582]"
              }`}
            >
              Cavity Protection
            </Tab>
            <Tab
              className={`h-full cursor-pointer px-4 border border-[#F7A582] py-3 rounded-md ${
                selectedIndex === 1 && "bg-[#F7A582]"
              }`}
            >
              Cosmetic Dentisty
            </Tab>
          </TabList>

          <TabPanel>
            <img
              className="mb-4 w-full"
              src="https://i.ibb.co/zr3SYLH/Rectangle-10.png"
              alt=""
            />
            <h1 className="text-xl font-bold">Electro Gastrology Therapy</h1>
            <p className="mt-2">
              Electro Gastrology Therapy is an innovative medical treatment that
              combines the principles of electrotherapy and gastroenterology to
              address various digestive system disorders.
            </p>
            <p>
              With it is precise and gentle approach, Electro Gastrology Therapy
              offers potential benefits such as pain reduction, improved
              digestion
            </p>
            <button className="py-2 px-4 border border-[#F7A582] hover:bg-[#F7A582] cursor-pointer mt-3 rounded">
              More Details
            </button>
          </TabPanel>
          <TabPanel>
            <img
              className="mb-4 w-full rounded-md"
              src="https://i.ibb.co/L1c5fHt/implants-1.jpg"
              alt=""
            />
            <h1 className="text-xl font-bold">Electro Gastrology Therapy</h1>
            <p className="mt-2">
              Electro Gastrology Therapy is an innovative medical treatment that
              combines the principles of electrotherapy and gastroenterology to
              address various digestive system disorders.
            </p>
            <p>
              With it is precise and gentle approach, Electro Gastrology Therapy
              offers potential benefits such as pain reduction, improved
              digestion
            </p>
            <button className="py-2 px-4 border border-[#F7A582] hover:bg-[#F7A582] cursor-pointer mt-3 rounded">
              More Details
            </button>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
