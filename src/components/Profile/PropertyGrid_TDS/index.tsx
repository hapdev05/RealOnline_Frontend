import React from "react";
import { ChevronDownIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import SLide1 from "../../../assets/images/baner1.png"
// Interface mô tả cấu trúc của mỗi dự án
interface ProjectCard {
  id: number;
  name: string;
  area: string;
  price: string;
  address: string;
  image: string;
  isHot: boolean;
}

// Props của component ProjectGridTDC
interface ProjectGridTDCProps {
  projects: ProjectCard[];
}

const ProjectGridTDC: React.FC<ProjectGridTDCProps> = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project: ProjectCard) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="relative">
              <img
                src={SLide1}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              {project.isHot && (
                <div className="absolute top-3 left-3">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                    Dự án hot bán
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3">
                {/* <img src={SLide1} alt="Logo TDC" className="w-20 h-10" /> */}
              </div>
              <div className="absolute bottom-3 right-3">
                <button className="bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4" onClick={() => navigate("/duAn")}>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {project.name}
              </h3>
              <div className="text-sm text-gray-600 mb-2">
                <p>{project.area}</p>
                <p className="font-medium text-red-600">{project.price}</p>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{project.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGridTDC;
