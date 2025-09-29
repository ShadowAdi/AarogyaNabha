import React from "react";
import { useNavigate } from "react-router-dom";

const FeatureGrid = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Medical Bot",
      subtitle: "",
      image: "/mediBot.png",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      pathTo: "/chatbot",
    },
    {
      title: "Teleconsults",
      subtitle: "",
      image: "/doctor.png",
      bgColor: "bg-gradient-to-br from-green-400 to-green-600",
      pathTo: "/search",
    },
    {
      title: "Multi Lingual",
      subtitle: "",
      image:
        '/translator.png',
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
      pathTo: "/",
    },
    {
      title: "Medicines",
      subtitle: "",
      image: "/Medicines.png",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
      pathTo: "/pharmacist",
    },
  ];

  return (
    <div className="w-full sm:hidden grid grid-cols-2 gap-3 mx-auto px-3 sm:px-3 lg:px-8">
      {features.map((feature, index) => (
        <div
          onClick={() => {
            navigate(feature.pathTo);
          }}
          key={index}
          className={`${feature.bgColor} rounded-2xl p-6 space-y-2 py-4 pb-0 flex flex-col items-center justify-between text-center shadow-lg transform hover:scale-105 transition-transform duration-200 min-h-[140px]`}
        >
          <div className="text-white ">
            <div className="font-bold text-base leading-tight">
              {feature.title}
            </div>
            <div className="font-medium text-sm opacity-90">
              {feature.subtitle}
            </div>
          </div>
          <img
            src={feature.image}
            alt={feature.title}
            className="w-[110px] h-[110px] object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
