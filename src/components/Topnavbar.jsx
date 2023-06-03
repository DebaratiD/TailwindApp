import { CiBrightnessUp, CiDark } from 'react-icons/ci'
import useDarkMode from '../hooks/Darkmode';

const Topnavbar = () => {
    return (
        <div className="topnav-bar">
            <div className="flex w-3/12">
                <NavbarItem i="Home" />
                <NavbarItem i="Navigation"  />
            </div>
            <div className="flex w-1/5 justify-end">
                <NavbarItem i="Hi friend!" onlyText={true}/>
                <ThemeIcon />
            </div>
        </div>
    );
};

//react custom elements should always start with a capital letter
const NavbarItem = ({ i, onlyText }) => (
        <span className={onlyText?"navbar-item-container":"navbar-item-container navbar-item"}>
            {i}
        </span>
);

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode('dark-theme');
    const changeMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={changeMode} className ="navbar-item-container">
            {darkTheme? 
            (<CiDark size="28" className='top-theme-icon'/>):
            (<CiBrightnessUp size="28" className='top-theme-icon'/>)}
        </span>
    );
}

export default Topnavbar;