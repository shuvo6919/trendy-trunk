import React, { useContext, useEffect, useState } from "react";
import "./addProduct.css";
import { MainContext } from "../../../Provider/MainProvider";
const AddProduct = () => {
  const { successAlert } = useContext(MainContext);
  const [topLevelCategory, setTopLevelCategory] = useState("Men");
  const [secondLevelCategory, setSecondLevelCategory] = useState("Clothing");
  const [thirdLevelCategory, setThirdLevelCategory] = useState("Watch");
  const [quality, setQuality] = useState("Trendy");
  const topLevelCategories = ["Men", "Women"];
  const secondLevelCategories = [
    "Clothing",
    "Shoes",
    "Cosmetics",
    "Accesories",
    "none",
  ];
  const thirdLevelCategories = [
    "Watch",
    "Kurta",
    "Jeans",
    "Shirts",
    "Tshirts",
    "Saree",
    "Lehnga",
    "Tops",
    "Gouns",
    "none",
  ];
  const qualities = [
    "Trendy",
    "Fashionable",
    "Stylish",
    "Iconic",
    "Popular",
    "Asthetic",
    "OneColor",
  ];

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const color = form.color.value;
    const photoURL = form.photo.value;
    const price = form.price.value;
    const discount = form.discount.value;
    const description = form.description.value;
    const s = form.s.value;
    const m = form.m.value;
    const l = form.l.value;
    const xl = form.xl.value;
    const size = { s, m, l, xl };

    const product = {
      title,
      color,
      photoURL,
      price,
      discount,
      description,
      topLevelCategory,
      secondLevelCategory,
      thirdLevelCategory,
      quality,
      size,
    };
    form.reset();
    fetch(`http://localhost:5000/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        successAlert("Successfully added the product");
      });
  };

  return (
    <form onSubmit={handleAddProduct}>
      <h2 className="title">Add your product</h2>
      <div className="add-product-container">
        <section className="">
          <h4>Top Level Category</h4>
          <select onChange={(e) => setTopLevelCategory(e.target.value)}>
            {topLevelCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </section>
        <section className="">
          <h4>Second Level Category</h4>
          <select onChange={(e) => setSecondLevelCategory(e.target.value)}>
            {secondLevelCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </section>
        <section className="">
          <h4>Third Level Category</h4>
          <select onChange={(e) => setThirdLevelCategory(e.target.value)}>
            {thirdLevelCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </section>
        <section className="">
          <h4>Quality</h4>
          <select onChange={(e) => setQuality(e.target.value)}>
            {qualities.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </section>
        <section>
          <h4>Title</h4>
          <input type="text" name="title" placeholder="Product title" />
        </section>
        <section>
          <h4>Color</h4>
          <input type="text" name="color" placeholder="Product color" />
        </section>
        <section>
          <h4>Price</h4>
          <input type="text" name="price" placeholder="Product price" />
        </section>
        <section>
          <h4>Discount</h4>
          <input
            defaultValue={10}
            type="text"
            name="discount"
            placeholder="Product discount"
          />
        </section>
        <section>
          <h4>Description</h4>
          <input
            type="text"
            name="description"
            placeholder="Product description"
          />
        </section>
        <section>
          <h4>Photo</h4>
          <input type="text" name="photo" placeholder="Photo URL" />
        </section>
        <section className="size">
          <h4>Size</h4>
          <div>
            <div>
              <p>S</p>
              <input
                defaultValue={10}
                type="text"
                name="s"
                placeholder="Quantity"
              />
            </div>
            <div>
              <p>M</p>
              <input
                defaultValue={10}
                type="text"
                name="m"
                placeholder="Quantity"
              />
            </div>
            <div>
              <p>L</p>
              <input
                defaultValue={10}
                type="text"
                name="l"
                placeholder="Quantity"
              />
            </div>
            <div>
              <p>XL</p>
              <input
                defaultValue={10}
                type="text"
                name="xl"
                placeholder="Quantity"
              />
            </div>
          </div>
        </section>
        <section></section>
      </div>
      <input type="submit" value="Add Product" className="button" />
    </form>
  );
};

export default AddProduct;
