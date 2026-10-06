import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useMediaQuery from "../hooks/useMediaQuery";

const tabs = ["Daily", "Weekly", "Monthly", "Yearly"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const data = [
  { x: 0, sales: 78 },
  { x: 0.4, sales: 85 },
  { x: 0.8, sales: 70 },
  { x: 1.5, sales: 42 },
  { x: 2.1, sales: 55 },
  { x: 2.5, sales: 65 },
  { x: 3.1, sales: 112 },
  { x: 3.6, sales: 100 },
  { x: 4.2, sales: 83 },
  { x: 5.1, sales: 95 },
  { x: 5.6, sales: 80 },
  { x: 6.1, sales: 60 },
  { x: 6.8, sales: 90 },
  { x: 7.7, sales: 133 },
  { x: 8.3, sales: 120 },
  { x: 8.8, sales: 92 },
  { x: 9.1, sales: 97 },
  { x: 9.6, sales: 80 },
  { x: 10.1, sales: 103 },
  { x: 10.5, sales: 118 },
  { x: 10.9, sales: 148 },
  { x: 11, sales: 150 },
];

const SalesChart = () => {
  const [activeTab, setActiveTab] = useState("Yearly");
  const isSmall = useMediaQuery("(max-width: 639px)");

  const xTicks = isSmall
    ? [0, 2, 4, 6, 8, 10]
    : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const tickStyle = { fill: "#898989", fontSize: isSmall ? 11 : 12 };

  return (
    <div className="rounded-[16px] bg-[linear-gradient(135deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.85)_50%,rgba(255,255,255,0.06)_150%)] p-6 backdrop-blur-sm max-sm:p-4">
      <div className="flex items-center justify-between max-sm:flex-wrap max-sm:gap-3">
        <h2 className="text-[20px] leading-[140%] max-sm:text-[18px]">
          Sales Analytics
        </h2>

        <div className="flex items-center gap-2 max-sm:gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer rounded-[4px] px-4 py-2 text-[14px] transition-colors max-sm:px-2.5 max-sm:py-1.5 max-sm:text-[12px] ${
                activeTab === tab
                  ? "bg-white/10 text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 h-[300px] w-full max-sm:mt-4 max-sm:h-[230px] [&_.recharts-surface]:overflow-visible [&_.recharts-line-curve]:[filter:drop-shadow(0_0_6px_rgba(146,254,157,0.5))_drop-shadow(0_0_18px_rgba(0,201,255,0.6))]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="salesLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#92fe9d" />
                <stop offset="100%" stopColor="#00c9ff" />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#ffffff"
              strokeOpacity={0.1}
              strokeDasharray="4 4"
            />
            <XAxis
              dataKey="x"
              type="number"
              domain={[0, 11]}
              ticks={xTicks}
              tickFormatter={(v) => months[v]}
              tickMargin={isSmall ? 12 : 16}
              padding={{ left: isSmall ? 8 : 20, right: isSmall ? 8 : 20 }}
              axisLine={false}
              tickLine={false}
              tick={tickStyle}
            />
            <YAxis
              width={isSmall ? 40 : 50}
              tickMargin={isSmall ? 8 : 12}
              domain={[25, 150]}
              ticks={[25, 50, 75, 100, 125, 150]}
              tickFormatter={(v) => `${v}K`}
              axisLine={false}
              tickLine={false}
              tick={tickStyle}
            />
            <Tooltip
              labelFormatter={(v) => months[Math.round(v)]}
              contentStyle={{
                background: "#111219",
                border: "none",
                borderRadius: 8,
                color: "#fff",
              }}
              formatter={(v) => [`${v}K`, "Sales"]}
            />
            <Line
              type="natural"
              dataKey="sales"
              stroke="url(#salesLine)"
              strokeWidth={3}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;