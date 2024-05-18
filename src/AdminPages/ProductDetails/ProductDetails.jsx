import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./productDetails.css";
import { MainContext } from "../../Provider/MainProvider";
import Swal from "sweetalert2";
const ProductDetails = () => {
  const { deleteAlert } = useContext(MainContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const productID = useParams().id;
  console.log(productID);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        fetch(`http://localhost:5000/product/${product._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/admin/products");
          });
      }
    });
  };

  return (
    <div className="product-details-container">
      <div className="img-part">
        <img src={product.photoURL} alt="" />
      </div>
      <div className="details-part">
        <h2>{product.title}</h2>
        <h3>Price: BDT {product.price}</h3>
        <p>{product.description}</p>
        <h3>In Stock:</h3>
        <div className="in-stock">
          <h4> S: {product.size?.s} pc</h4>
          <h4> M: {product.size?.m} pc</h4>
          <h4> L: {product.size?.l} pc</h4>
          <h4> XL: {product.size?.xl} pc</h4>
        </div>
        <h3>Category : {product.thirdLevelCategory}</h3>
        <div>
          <Link to={`/admin/product_edit/${productID}`}>
            <button className="edit-button">Edit</button>
          </Link>

          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
