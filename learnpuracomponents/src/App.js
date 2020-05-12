import React from "react";
import ParentComp from "./components/ParentComp";
import Ref from "./components/Ref";
import ClasswithRef from "./components/ClasswithRef";
import ParentRef from "./components/ParentRef";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      {/* <ParentComp/> */}
      {/* <Ref/> */}
      {/* <ClasswithRef/> */}
      {/* <ParentRef/> */}
      {/* <PortalDemo/> */}
      <Hero heroName="Balaji" />
      <Hero heroName="Sanjeev" />
      <Hero heroName="Joker" />
    </div>
  );
}

export default App;
