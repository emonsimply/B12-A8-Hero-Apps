import React from "react";

const StatesSection = () => {
  const stats = [
    {
      id: 1,
      title: "Total Downloads",
      value: "29.6M",
      subtitle: "21% More Than Last Month",
    },
    {
      id: 2,
      title: "Total Reviews",
      value: "906K",
      subtitle: "46% More Than Last Month",
    },
    {
      id: 3,
      title: "Active Apps",
      value: "132+",
      subtitle: "31 More Will Launch",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-8 lg:py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Trusted By Millions, Built For You
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center">
        {stats.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-3">
            <h3 className="text-sm opacity-70">{item.title}</h3>
            <p className="text-5xl font-bold">{item.value}</p>
            <p className="text-sm opacity-70">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatesSection;
