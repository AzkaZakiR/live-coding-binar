import { useEffect, useState } from "react";
import watchImg from "../../public/images/apple-watch.png";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/products";
import { getUserName } from "../services/auth";


const ProductPage = () => {

  const [products, setProducts] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    })
  })

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(getUserName(token));
    } else {
      window.location.href = "/";
    }
  });
  return (
    <>
      <div className="flex justify-end h-12 bg-blue-600 sticky top-0 text-white items-center px-10">
        <Button type="button" classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex flex-wrap justify-center min-h-screen items-center mt-5">
        {products.length > 0 && products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
            <CardProduct.Footer></CardProduct.Footer>
          </CardProduct>

        ))}

      </div >
    </>
  );
};

export default ProductPage;
