const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full mx-3 max-w-sm bg-slate-300 border border-gray-200 rounded-lg shadow flex flex-col justify-between mb-5">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img
        className="p-8 rounded-t-lg h-60 w-full object-cover"
        src={image}
        alt="product image"
      />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 h-[10rem]">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
      </a>
      <div className="flex items-center mt-2.5 mb-5">
        <p>{children.substring(0, 100)}</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="px-5 pb-5">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 ">
          $ 100
        </span>
        <a
          href="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
