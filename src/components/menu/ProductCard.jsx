"use client";

import React from "react";
import { incrementProductView } from "@/services/productService";

const ProductCard = ({ id, title, image, description, price }) => {
  // Format price with proper decimal places
  const formatPrice = (price) => {
    // Handle null, undefined, empty string, or NaN
    if (price === null || price === undefined || price === "" || isNaN(price)) {
      return "₺0.00";
    }

    // Convert to number and format
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
      return "₺0.00";
    }

    return `₺${numericPrice.toFixed(2)}`;
  };

  const handleCardClick = async () => {
    if (id) {
      try {
        await incrementProductView(id);
      } catch (error) {
        console.error("Failed to increment view count:", error);
      }
    }
  };

  return (
    <div
      className="card bg-dark text-white overflow-hidden rounded-4 shadow-sm position-relative hover-scale"
      style={{
        aspectRatio: "1 / 1",
        cursor: "pointer",
      }}
      onClick={handleCardClick}
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

      {/* Price badge positioned at top-right */}
      {price !== undefined && price !== null && price !== "" && (
        <div
          className="position-absolute top-0 end-0 m-3"
          style={{ zIndex: 10 }}
        >
          <span className="badge product-price fs-6 shadow">
            {formatPrice(price)}
          </span>
        </div>
      )}

      <div className="position-absolute bottom-0 start-0 w-100 p-3 card-overlay">
        <div className="d-flex flex-column h-100 justify-content-end">
          <h5 className="fw-bold text-white mb-1 card-title">{title}</h5>
          {description && (
            <p className="text-white-50 mb-2 card-description product-description">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
