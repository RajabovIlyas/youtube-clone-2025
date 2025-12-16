import Button from '../../shared/ui/button';
import AccountIcon from '../../shared/ui/icons/AccountIcon';
import MicrofonIcon from '../../shared/ui/icons/MicrofonIcon';
import SearchIcon from '../../shared/ui/icons/SearchIcon';
import YoutubeIcon from '../../shared/ui/icons/YoutubeIcon';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <div>
        <a className="p-4 flex items-center gap-2">
          <YoutubeIcon className="w-8 h-8" /> Youtube
        </a>
      </div>
      <div className="hidden md:flex items-center  gap-4">
        <div className="flex items-center ">
          <input
            placeholder="Search"
            className="w-[clamp(100px,35vw,500px)] border-r-0 border border-gray-300 rounded-l-full p-[15px]"
          />
          <Button className="rounded-l-none">
            <SearchIcon />
          </Button>
        </div>
        <Button>
          <MicrofonIcon />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button className="block md:hidden">
          <SearchIcon />
        </Button>
        <a>
          <AccountIcon className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Header;
