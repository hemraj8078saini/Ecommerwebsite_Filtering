import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [allproduct, setAllproduct] = useState([]);
  const [filter, setFilter] = useState("");
  const [total, settotal] = useState("");
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setProduct(res.data);
      setAllproduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchrating = () => {
    let ratingproduct = product.filter((ele) => ele.rating.rate > 4);
    setAllproduct(ratingproduct);
    console.log(ratingproduct);
    setFilter(ratingproduct);
  };

  const priceSearch = () => {
    let searchprice = allproduct.filter((ele) => ele.price > 500);
    setAllproduct(searchprice);
    settotal(searchprice);
    console.log(searchprice);
  };

  const handleSeacrh = () => {
    if (search === "") {
      setAllproduct(product);
    } else {
      let searchValue = product.filter((ele) =>
        ele.title.toLowerCase().includes(search)
      );
      setAllproduct(searchValue);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    handleSeacrh();
  };

  const resetdata = () => {
    setAllproduct(product);
    setFilter("");
    settotal("");
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="total_item">
        <button className="btn">Total Item = {product.length}</button>
        <button className="btn">Filter by rating = {filter.length}</button>
        <button className="btn">Filter Price Item = {total.length}</button>
        <button className="btn" onClick={searchrating}>
          Filter by Rating
        </button>
        <button className="btn" onClick={priceSearch}>
          filter by price
        </button>
        <button className="btn" onClick={resetdata}>
          resetdata
        </button>
        <input
          style={{ height: "30px", marginTop: "20px" }}
          value={search}
          className="border-2 border-gray-600 search"
          type=""
          placeholder="search"
          onChange={handleChange}
        />
        <button className="btn" onClick={handleSeacrh}>
          Search
        </button>
      </div>
      <div className="container">
        <div className="main_div">
          {allproduct.map((ele) => {
            return (
              <div key={ele.id} className="map_div">
                <div>
                  <img className="imges" src={ele.image} alt="" />
                </div>
                <div>
                  <h3 className="text-b-600">
                    {ele.title.slice(0, 20) + "....."}
                  </h3>
                </div>
                <div>
                  <h4>Price:- {ele.price}</h4>
                  <h5>Rating:- {ele.rating.rate}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
