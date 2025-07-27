import React from "react";
import ProjectGridTDC from "../PropertyGrid_TDS";
import PropertyGrid from "../PropertyGrid_BDS";

interface FavoriteTabsProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  viewedProperties: any[];
  projectProperties: any[];
}

const FavoriteTabs: React.FC<FavoriteTabsProps> = ({
  selectedTab,
  setSelectedTab,
  viewedProperties,
  projectProperties,
}) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Yêu Thích</h1>
      <div className="mb-6 ml-6 w-fit border border-gray-300 rounded-lg overflow-hidden flex">
        <button
          className={`px-4 py-1.5 text-sm font-medium ${
            selectedTab === "Bất động sản"
              ? "bg-[#1B3459] text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => setSelectedTab("Bất động sản")}
        >
          Bất động sản
        </button>
        <button
          className={`px-4 py-1.5 text-sm font-medium ${
            selectedTab === "Dự án"
              ? "bg-[#1B3459] text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => setSelectedTab("Dự án")}
        >
          Dự án
        </button>
      </div>

      <div>
        {selectedTab === "Bất động sản" ? (
          <PropertyGrid properties={viewedProperties} />
        ) : (
          <ProjectGridTDC projects={projectProperties} />
        )}
      </div>
    </>
  );
};

export default FavoriteTabs;
