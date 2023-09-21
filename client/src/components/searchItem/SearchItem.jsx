import React from "react"; // Import React
import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  // Ensure that the item object is defined and contains necessary properties
  if (!item) {
    return null; // Return null if item is missing
  }

  const {
    photos,
    name,
    distance,
    desc,
    cheapestPrice,
    rating,
    _id,
  } = item;

  return (
    <div className="searchItem">
      <img src={photos && photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{name}</h1>
        <span className="siDistance">{distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air conditioning</span>
        <span className="siFeatures">{desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          {_id && ( // Ensure _id is available before rendering the Link
            <Link to={`/hotels/${_id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
