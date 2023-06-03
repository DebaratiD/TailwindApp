import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col m-0 bg-white text-gray-800
                  dark:bg-gray-900 dark:text-white shadow-lg">
                    
        <SideBarIcon icon={<FaFire size="28" />} />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="25" />} />
        <SideBarIcon icon={<FaPoo size="23" />} />
        <SideBarIcon icon={<BsGearFill size="23" />} />
    </div>
  );
};

//group is to add tooltip to the buttons
// use windows key and period(.) to add emoji in the code

const SideBarIcon = ({ icon, text=' tooltip 💡'}) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
        {text}
    </span>
  </div>
);

export default SideBar;
