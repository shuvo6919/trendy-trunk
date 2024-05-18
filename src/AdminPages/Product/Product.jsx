import { useContext } from "react";
import { MainContext } from "../../Provider/MainProvider";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import "./product.css";
import demoPic from "../../assets/images/Crea el diseño de una T-shirt para mujer.jpg";
const Product = () => {
  const products = useLoaderData();
  // const { title, photoURL, price, thirdLevelCategory, color, size } = products;
  // const quantity =
  //   parseInt(size.s) + parseInt(size.m) + parseInt(size.l) + parseInt(size.xl);
  const navigate = useNavigate();
  const handleDetails = (id) => {
    console.log("clicked=", id);
    navigate(`/admin/product_details/${id}`);
  };
  return (
    <div className="product-container">
      <Link to={"/admin/products/add_product"} className="button">
        Add Product +
      </Link>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Color</th>
              <th>Category</th>
              <th>Total sales</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr onClick={() => handleDetails(product._id)} key={product._id}>
                <td className="product-name">
                  <img src={product.photoURL} alt="" />
                  <p>{product.title}</p>
                </td>
                <td>{product.price}</td>
                <td>
                  {parseInt(product.size?.s) +
                    parseInt(product.size?.m) +
                    parseInt(product.size?.l) +
                    parseInt(product.size?.xl)}
                </td>
                <td>{product.color}</td>
                <td>{product.thirdLevelCategory}</td>
                <td>0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
