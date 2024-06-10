import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products2.css";

const Products2 = () => {
  const [data, setData] = useState([]);
  const [filter,setFilter]=useState("")
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");

  const getdata = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const alldata = () => {
    setData(data);
    console.log(data, "userdata");
  };

  const filtering = () => {
    let ratingproduct = data.filter((ele) => ele.rating.rate > 4);
    setData(ratingproduct)
    setFilter("");
    console.log(ratingproduct);
  };

  const pricing = () => {
    let price = data.filter((ele) => ele.price > 500);
    setPrice(price);
    setData(price);
    console.log(price);
  };

  const reseting = () => {
    getdata();  
    setPrice("");
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container">
      <div className="buttons">
        <button className="btn" onClick={alldata}>Total Item={data.length}</button>
        <button onClick={filtering} className="btn">Filter by Rating={filter.length}</button>
        <button className="btn" onClick={pricing}>Filter by Price={price.length}</button>
        <button className="btn" onClick={reseting}>Reset Data</button>
        <input
        type="text"
        placeholder="Search anything"
        onChange={(e) => setSearch(e.target.value)}
        />
        <button id="searchbtn">Search</button>
        </div>
      <h1 style={{textAlign:"center"}}>There are some products in list</h1>
      <div className="cards-container">
        {data.map((e, index) => (
          <div key={e.id || index} className="card">
            <img src={e.image} alt={e.title} />
            <h3>{e.title.slice(0, 20) + "....."}</h3>
            <h4>Price: ${e.price}</h4>
            <h5>Rating: {e.rating.rate}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products2;
