import React from "react";
import "./App.css";
import Testimonial from "../components/Testimonial/index";
import { IoPerson } from "react-icons/io5";
// import Card from "../components/Card/index";
// import { IoIosCloudUpload } from "react-icons/io";
// import Banner from "../components/Banner/Banner";
// import Badge from "../components/Badge/Badge";

// THIS LINKS TO THE TESTIMONIAL COMPONENT.
function App() {
  return (
    <main>
      <Testimonial color="blue">
        <IoPerson />
        <Testimonial.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
          nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
          adipiscing nunc urna, sit.
        </Testimonial.Text>
      </Testimonial>
    </main>
  );
}

// THIS LINKS TO THE CARD COMPONENT.
// function App() {
//   return (
//     <main>
//       <Card>
//         <Card.Icon color="white">
//           <IoIosCloudUpload />
//         </Card.Icon>
//         <Card.Text title="Easy Deployment">
//           Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
//           magna sit morbi lobortis.
//         </Card.Text>
//       </Card>
//     </main>
//   );
// }

// THIS LINKS TO THE BANNER COMPONENT.
// function App() {
//   return (
//     <main>
//       <Banner color="green">Congratulations!</Banner>
//       <Banner color="yellow">Attention</Banner>
//       <Banner color="red">There is not a problem with your application</Banner>
//       <Banner color="blue">Update available</Banner>
//     </main>
//   );
// }

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
