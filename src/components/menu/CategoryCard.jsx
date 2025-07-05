"use client";

import { useRouter } from "next/navigation";
import React from "react";

const CategoryCard = ({ title, image, description }) => {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to category page
    const path = "/category/" + title;
    router.push(path);
  };

  return (
    <div
      className="card bg-dark text-white overflow-hidden rounded-4 shadow-sm position-relative hover-scale"
      style={{
        aspectRatio: "1 / 1",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <img
        src={image}
        alt={title}
        className="w-100 h-100"
        style={{
          objectFit: "cover",
          borderRadius: "1rem",
        }}
      />
      <div className="position-absolute bottom-0 start-0 w-100 p-3 card-overlay">
        <div className="d-flex flex-column h-100 justify-content-end">
          <h5 className="fw-bold text-white mb-1 card-title">{title}</h5>
          {description && (
            <p className="text-white-50 mb-0 card-description product-description">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
