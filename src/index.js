import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
// function Test() {
//   const [rating, setRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="black"
//         size={24}
//         defaultRating={0}
//         maxRating={10}
//         onSetRating={setRating}
//       />
//       <p> awarded {rating}</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} />
    <StarRating maxRating={15} /> */}
    {/* Default value */}
    {/* <StarRating />
    <StarRating
      color="red"
      size={24}
      message={["yuck", "bad", "not bad", "good", "awesome"]}
      defaultRating={2}
    />
    <Test /> */}
  </React.StrictMode>
);
