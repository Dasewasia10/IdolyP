import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data, endpoint }) => {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    const name = data.name.split(" ").join("_");
    navigate(`/${endpoint}/${name}`);
  };

  if (endpoint === "idol") {
    const { name, image } = data;
    const icon = image[0].icon;

    return (
      <div className="w-auto cursor-pointer rounded-full border-4 border-gray-700 bg-gray-200 bg-opacity-80 p-4 text-gray-700 shadow-md hover:border-gray-200 hover:bg-gray-700 hover:text-gray-200">
        <div
          className="card space-y-4"
          onClick={() => navigateToDetail(data.id)}
        >
          <img src={icon} alt="Group Icon" />
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>
      </div>
    );
  }

  if (endpoint === "card") {
    const { name, image, type, title, ability, quote, initial } = data;
    const full = image[0].full;

    const starInitial = [];

    for (let i = 0; i < initial; i++) {
      const star = "★";
      starInitial.push(
        <p id={`initial-${i}`} key={i}>
          {star}
        </p>
      );
    }

    return (
      <div
        className="w-60 max-w-lg cursor-pointer rounded-lg border-4 border-gray-700 bg-gray-200 bg-opacity-80 text-gray-700 shadow-md hover:border-gray-200 hover:bg-gray-700 hover:text-gray-200"
        style={{
          backgroundImage: `url(${full})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div
          className="relative flex flex-col items-center space-y-4 overflow-hidden"
          onClick={() => navigateToDetail(data.id)}
          style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 1)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.textShadow =
              "2px 2px 4px rgba(255, 255, 255, 1)";
          }}
        >
          <div className="flex flex-col justify-center bg-gray-200 bg-opacity-50 p-4 hover:bg-gray-800 hover:bg-opacity-50">
            <h2 className="text-xl font-semibold">{name}</h2>
            <h2>{title}</h2>
            <p>
              {type} - {ability}
            </p>
            <div className="flex flex-row justify-center text-3xl">
              {starInitial}
            </div>
            <p className="rounded-md border-2 border-gray-800 p-2 hover:border-gray-200">
              {quote}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Card;
