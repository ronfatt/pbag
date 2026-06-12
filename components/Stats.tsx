import { stats } from "@/data/siteContent";

export function Stats() {
  return (
    <div className="absolute inset-x-0 bottom-6 z-20">
      <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-white/20 bg-white/92 p-5 shadow-xl backdrop-blur">
            <div className="text-3xl font-black text-[#138a3d]">{stat.value}</div>
            <p className="mt-1 text-sm font-semibold leading-5 text-[#4c5c50]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
