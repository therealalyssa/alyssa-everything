import React from "react";

//Object destructuring

// function Person({ name, age }) {
//   console.log(Person);
//   return (
//     <h1>
//       Hi I'm {name}, I am {age} years old
//     </h1>
//   );
// }

// export default Person;

function Person(props) {
  console.log(props);
  return (
    <h1>
      Hi I'm {props.name}, I am {props.age} years old.
    </h1>
  );
}

export default Person;
