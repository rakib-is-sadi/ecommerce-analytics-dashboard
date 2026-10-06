import logo from "../assets/logos/logo.png";
import avatar from "../assets/photos/avatar.png";
import { useState } from "react";

import {
  House,
  ChartColumn,
  LayoutGrid,
  ShoppingBasket,
  CreditCard,
  FileText,
  Settings,
  MessageSquare,
  Phone,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { label: "Overview", icon: House },
  { label: "Analytics", icon: ChartColumn },
  { label: "Products", icon: LayoutGrid },
  { label: "Orders", icon: ShoppingBasket },
  { label: "Transactions", icon: CreditCard },
  { label: "Reports", icon: FileText },
];

const otherItems = [
  { label: "Settings", icon: Settings },
  { label: "Messages", icon: MessageSquare, badge: 10 },
  { label: "Help & Support", icon: Phone },
];

const Asidebar = ({ isOpen, onClose }) => {
  const [active, setActive] = useState("Overview");

  const renderItem = (item) => {
    const Icon = item.icon;
    const isActive = active === item.label;
    return (
      <button
        key={item.label}
        onClick={() => {
          setActive(item.label);
          onClose();
        }}
        className={`flex h-[55px] w-full cursor-pointer items-center gap-3 rounded-[4px] px-[16px] text-left transition-colors max-lg:h-[48px] ${
          isActive
            ? "bg-linear-to-r from-brand-from to-brand-to font-bold text-black"
            : "font-normal text-muted hover:bg-white/5 hover:text-ink"
        }`}
      >
        <Icon size={20.5} strokeWidth={1.5} className="shrink-0" />
        <span className="text-[16.5px] leading-[1.4] max-lg:text-[15px]">
          {item.label}
        </span>
        {item.badge && (
          <span className="ml-auto rounded-full bg-danger px-2 text-xs text-white">
            {item.badge}
          </span>
        )}
      </button>
    );
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`sticky top-0 flex h-screen w-85 shrink-0 flex-col border-r border-white/10 bg-surface px-10 max-lg:fixed max-lg:inset-y-0 max-lg:left-0 max-lg:z-50 max-lg:h-dvh max-lg:w-72 max-lg:max-w-[85vw] max-lg:px-6 max-lg:transition-transform max-lg:duration-300 ${
          isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"
        }`}
      >
        <div className="flex-1 overflow-y-auto">
          <a href="/" className="mt-[35px] flex items-center gap-3 max-lg:mt-6">
            <img src={logo} alt="logo" className="h-[34px] w-[34px]" />
            <span className="text-[25px] font-medium max-lg:text-[22px]">
              Pixel Mags
            </span>
          </a>

          <nav className="mt-14 max-lg:mt-8">
            <p className="mb-4 text-[13px] font-medium uppercase leading-[140%] text-muted max-lg:mb-3 max-lg:text-[12px]">
              Menu
            </p>
            <div className="flex flex-col gap-2 max-lg:gap-1.5">
              {menuItems.map(renderItem)}
            </div>

            <p className="mt-10 mb-4 text-[13px] font-medium uppercase leading-[140%] text-muted max-lg:mt-8 max-lg:mb-3 max-lg:text-[12px]">
              Others
            </p>
            <div className="flex flex-col gap-2 max-lg:gap-1.5">
              {otherItems.map(renderItem)}
            </div>
          </nav>
        </div>

        <div className="shrink-0 pb-6 max-lg:pt-4 max-lg:pb-4">
          <a
            href="/"
            className="flex items-center gap-3 rounded-[8px] bg-surface-2 p-4 transition-colors hover:bg-surface-2/60 max-lg:p-3"
          >
            <img
              src={avatar}
              alt=""
              className="size-[49px] shrink-0 rounded-full object-cover max-lg:size-[42px]"
            />
            <div className="flex min-w-0 flex-col gap-2">
              <p className="truncate text-[18px] leading-[140%] max-lg:text-[16px]">
                Rakibul Sadi
              </p>
              <p className="flex items-center gap-1 text-[14px] font-normal leading-[14px] text-muted max-lg:text-[13px]">
                View Profile <ChevronRight size={16} />
              </p>
            </div>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Asidebar;