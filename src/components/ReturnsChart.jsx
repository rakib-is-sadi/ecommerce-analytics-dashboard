import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useMediaQuery from "../hooks/useMediaQuery";

const data = [
  { month: "Jan", returns: 40 },
  { month: "Feb", returns: 30 },
  { month: "Mar", returns: 33 },
  { month: "Apr", returns: 43 },
  { month: "May", returns: 35 },
  { month: "Jun", returns: 49 },
];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-[8px] bg-surface-2 px-3 py-1 text-[14px] font-medium text-ink">
      {payload[0].value}%
    </div>
  );
};

const ReturnsChart = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const isSmall = useMediaQuery("(max-width: 639px)");
  const tickStyle = { fill: "#898989", fontSize: isSmall ? 11 : 12 };

  return (
    <div className="h-full rounded-[16px] bg-[linear-gradient(135deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.85)_50%,rgba(255,255,255,0.06)_140%)] p-6 backdrop-blur-sm max-sm:p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[20px] leading-[140%] max-sm:text-[18px]">Returns</h2>

        <div className="relative">
          <select className="cursor-pointer appearance-none rounded-[8px] bg-surface-2 py-2 pl-4 pr-10 text-[14px] text-muted outline-none max-sm:pl-3 max-sm:pr-9 max-sm:text-[12px]">
            <option>Jan - Jun '22</option>
            <option>Jul - Dec '22</option>
          </select>
          <ChevronDown
            size={16}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted max-sm:right-3"
          />
        </div>
      </div>

      <div className="mt-6 h-[300px] w-full max-sm:mt-4 max-sm:h-[230px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <defs>
              <linearGradient id="barNormal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3a8f72" />
                <stop offset="100%" stopColor="#1f3f3d" />
              </linearGradient>
              <linearGradient id="barActive" x1="0" y1="0" x2="1" y2="0">
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
              dataKey="month"
              tickMargin={isSmall ? 12 : 16}
              padding={{ left: 0, right: 0 }}
              axisLine={false}
              tickLine={false}
              tick={tickStyle}
            />
            <YAxis
              width={isSmall ? 26 : 30}
              tickMargin={isSmall ? 8 : 12}
              domain={[10, 60]}
              ticks={[10, 20, 30, 40, 50, 60]}
              axisLine={false}
              tickLine={false}
              tick={tickStyle}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar
              dataKey="returns"
              barSize={isSmall ? 18 : 22}
              radius={[4, 4, 0, 0]}
              onMouseEnter={(_, i) => setActiveIndex(i)}
            >
              {data.map((d, i) => (
                <Cell
                  key={d.month}
                  fill={i === activeIndex ? "url(#barActive)" : "url(#barNormal)"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReturnsChart;