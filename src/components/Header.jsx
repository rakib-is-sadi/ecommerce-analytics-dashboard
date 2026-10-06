import { Search, Bell, Menu } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between max-xl:flex-wrap max-xl:gap-4">
      <div className="flex items-center gap-4 max-sm:gap-3">
        <button
          onClick={onMenuClick}
          className="flex size-[44px] shrink-0 cursor-pointer items-center justify-center rounded-[11px] bg-black/40 backdrop-blur-sm lg:hidden"
        >
          <Menu size={22} />
        </button>
        <h1 className="text-[28px] font-bold max-lg:text-[24px] max-sm:text-[20px]">
          Dashboard Overview
        </h1>
      </div>

      <div className="flex items-center gap-4 max-xl:w-full max-sm:gap-3">
        <div className="relative max-xl:min-w-0 max-xl:flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-ink"
          />
          <input
            type="text"
            placeholder="Search for anything"
            className="h-[55px] w-[425px] rounded-[11px] bg-black/40 pl-12 pr-4 text-[16px] font-normal leading-[140%] text-ink backdrop-blur-sm outline-none placeholder:text-ink/80 max-xl:w-full max-sm:h-[48px] max-sm:text-[14px]"
          />
        </div>

        <button className="relative flex size-[55px] shrink-0 cursor-pointer items-center justify-center rounded-[11px] bg-black/40 backdrop-blur-sm max-sm:size-[48px]">
          <Bell size={24} />
          <span className="absolute right-3 top-3 size-2 rounded-full bg-danger" />
        </button>
      </div>
    </header>
  );
};

export default Header;