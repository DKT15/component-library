import React from "react";
import "./App.css";
import Banner from "../components/Banner/Banner";
// import Badge from "../components/Badge/Badge";

function App() {
  return (
    <main>
      <Banner color="green">Congratulations!</Banner>
      <Banner color="yellow">Attention</Banner>
      <Banner color="red">There is not a problem with your application</Banner>
      <Banner color="blue">Update available</Banner>
    </main>
  );
}

// THIS LINKS TO THE BADGE COMPONENT.
// function App() {
//   return (
//     <main>
//       <Badge color="green">Badge</Badge>
//       <Badge color="red">Badge</Badge>
//       <Badge color="yellow">Badge</Badge>
//       <Badge color="gray">Badge</Badge>
//       <Badge color="blue">Badge</Badge>
//       <Badge color="indigo">Badge</Badge>
//       <Badge color="purple">Badge</Badge>
//       <Badge color="pink">Badge</Badge>
//     </main>
//   );
// }

export default App;
