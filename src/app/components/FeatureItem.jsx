import React from "react";

const FeatureItem = ({ feature }) => {
  return (
    <div className="w-[22%]">
      <h3 className="text-black ml-20 text-2xl font-normal">{feature.title}</h3>
      <h3 className="text-black ml-20 text-xl font-normal mt-6">
        {feature.subtitle}
      </h3>
      <p className="text-black/60 ml-20">{feature.description}</p>
    </div>
  );
};

export default FeatureItem;