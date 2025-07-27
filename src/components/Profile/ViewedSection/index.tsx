import React from "react";
import PropertyGrid from "../PropertyGrid_BDS";

const ViewedSection = ({ properties }: { properties: any[] }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Đã Xem</h1>
      <PropertyGrid properties={properties} />
    </>
  );
};

export default ViewedSection;
