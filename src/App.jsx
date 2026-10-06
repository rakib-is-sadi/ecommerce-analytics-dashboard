import { useState } from "react";
import Asidebar from "./components/Asidebar";
import Header from "./components/Header";
import ProductsTable from "./components/ProductsTable";
import ReturnsChart from "./components/ReturnsChart";
import StatCard from "./components/StatCard";
import SalesChart from "./components/SalesChart";
import shade from "./assets/photos/shade.png";

const stats = [
  {
    title: "Today's Revenue",
    value: "₹15,00,000",
    change: 4.8,
    up: true,
    data: [52, 58, 62, 55, 42, 30, 24, 28, 35, 30, 45, 62, 75, 80],
  },
  {
    title: "Today's Orders",
    value: "7,506",
    change: 3.5,
    up: false,
    data: [35, 42, 52, 58, 50, 62, 70, 55, 60, 52, 45, 38, 25, 22],
  },
  {
    title: "Today's Visitors",
    value: "17,058",
    change: 9.3,
    up: true,
    data: [48, 52, 46, 50, 44, 38, 30, 40, 52, 48, 62, 72, 66, 68],
  },
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Asidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <main className="relative min-w-0 flex-1 bg-surface bg-[linear-gradient(135deg,transparent_50%,rgba(255,255,255,0.07)_100%)]">
        <div className="absolute inset-x-0 top-0 h-[210px] bg-linear-to-r from-brand-from to-brand-to opacity-90" />
        <div className="absolute inset-x-0 top-0 h-[210px] bg-linear-to-b from-transparent to-black/10" />
        <div className="absolute inset-x-0 top-0 h-[210px] bg-linear-to-r from-black/30 via-transparent to-black/70" />

        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[210px] mix-blend-overlay contrast-150"
          style={{
            backgroundImage: `url(${shade})`,
            backgroundRepeat: "repeat",
            backgroundSize: "400px",
          }}
        />

        <div className="relative mx-auto max-w-[1160px] p-6 max-sm:p-4">
          <Header onMenuClick={() => setIsOpen(true)} />

          <div className="mt-10 grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-xl:gap-6 max-xl:[&>*:last-child]:col-span-2 max-sm:mt-6 max-sm:grid-cols-1 max-sm:gap-4 max-sm:[&>*:last-child]:col-span-1">
            {stats.map((s) => (
              <StatCard key={s.title} {...s} />
            ))}
          </div>

          <div className="mt-8 grid grid-cols-[2fr_1fr] gap-4 max-xl:grid-cols-1 max-sm:mt-6">
            <div className="min-w-0">
              <SalesChart />
            </div>
            <div className="min-w-0">
              <ReturnsChart />
            </div>
          </div>

          <div className="mt-8 max-sm:mt-6">
            <ProductsTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;