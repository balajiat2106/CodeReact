import React from "react";
import ParentComp from "./components/ParentComp";
import Ref from "./components/Ref";
import ClasswithRef from "./components/ClasswithRef";
import ParentRef from "./components/ParentRef";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      {/* <ParentComp/> */}
      {/* <Ref/> */}
      {/* <ClasswithRef/> */}
      {/* <ParentRef/> */}
      {/* <PortalDemo/> */}
      <ErrorBoundary>
        <Hero heroName="Balaji" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Sanjeev" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Hello" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
