import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", selic: 13.75, ipca: 5.77 },
  { month: "Fev", selic: 13.75, ipca: 5.60 },
  { month: "Mar", selic: 13.75, ipca: 4.65 },
  { month: "Abr", selic: 13.75, ipca: 4.18 },
  { month: "Mai", selic: 13.75, ipca: 3.94 },
  { month: "Jun", selic: 13.75, ipca: 3.16 },
  { month: "Jul", selic: 13.25, ipca: 3.99 },
  { month: "Ago", selic: 13.25, ipca: 4.24 },
  { month: "Set", selic: 12.75, ipca: 5.19 },
  { month: "Out", selic: 12.25, ipca: 4.82 },
  { month: "Nov", selic: 12.25, ipca: 4.68 },
  { month: "Dez", selic: 11.75, ipca: 4.62 },
];

export const EconomicChart = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Evolução dos Indicadores Econômicos
      </h3>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="month"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--border))" }}
            />
            <YAxis
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--border))" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
            />
            <Legend
              wrapperStyle={{ paddingTop: "20px" }}
              formatter={(value) => (
                <span style={{ color: "hsl(var(--muted-foreground))" }}>{value}</span>
              )}
            />
            <Line
              type="monotone"
              dataKey="selic"
              name="Selic (%)"
              stroke="hsl(var(--chart-selic))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-selic))", strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="ipca"
              name="IPCA (%)"
              stroke="hsl(var(--chart-ipca))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-ipca))", strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
