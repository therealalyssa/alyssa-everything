function Car(props) {
  return (
    <div>
      The car is a {props.carName} {props.carModel}
    </div>
  );
}

// Destructuring way of using an object
// function Car({carName}) {
//   return <div>The car is a {carName}</div>;
// }

export default Car;
