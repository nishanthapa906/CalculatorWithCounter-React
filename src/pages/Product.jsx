import Box1 from "../components/Box1";
function Product() {
  const getData = (fullName) => {
    console.log(fullName);
  };
  let x = 100;
  return (
    <div>
      Product={x}
      <Box1 x={x} getData={getData} />
    </div>
  );
}
export default Product;
// Product
// box1
// box2
// box3
