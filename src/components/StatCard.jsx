import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { LineChart, YAxis, Line, ResponsiveContainer } from "recharts";

const StatCard = ({ title, value, change, up, data }) => {
  const id = `spark-${title.replace(/\W/g, "")}`;
  const chartData = data.map((v) => ({ v }));
  const TrendIcon = up ? ArrowUpRight : ArrowDownRight;

  return (
    <div className="flex items-center justify-between gap-3 overflow-hidden rounded-[16px] bg-[linear-gradient(to_top_right,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.8)_55%,rgba(0,0,0,0.2)_100%),linear-gradient(to_top,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.3)_40%,rgba(0,0,0,0)_70%)] p-6 backdrop-blur-sm max-sm:p-4">
      <div className="flex min-w-0 flex-col gap-3 max-sm:gap-2">
        <p className="text-[16px] leading-[140%] text-ink/90 max-sm:text-[14px]">
          {title}
        </p>
        <p className="text-[24px] font-bold leading-[120%] max-sm:text-[22px]">
          {value}
        </p>

        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:gap-x-3 max-sm:gap-y-1">
          <span
            className={`flex items-center gap-1 rounded-[24px] px-2 py-1 text-[14px] max-sm:text-[12px] ${
              up ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
            }`}
          >
            <TrendIcon size={14} />
            {change}%
          </span>
          <span className="whitespace-nowrap text-[12px] font-normal text-muted">
            from yesterday
          </span>
        </div>
      </div>

      <div className="h-[60px] w-[140px] shrink-0 max-xl:w-[110px] max-sm:h-[50px] max-sm:w-[80px] [&_.recharts-surface]:overflow-visible [&_.recharts-line-curve]:[filter:drop-shadow(0_0_6px_rgba(0,201,255,0.6))]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <defs>
              <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#92fe9d" />
                <stop offset="100%" stopColor="#00c9ff" />
              </linearGradient>
            </defs>
            <YAxis hide domain={["dataMin", "dataMax"]} />
            <Line
              type="natural"
              dataKey="v"
              stroke={`url(#${id})`}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatCard;