import React from "react";
import Navigation from "./src/Navigation";
import { CoopProvider } from "./src/Provider/CoopProvider";

export default function App() {
  return (
    <CoopProvider>
      <Navigation />
    </CoopProvider>
  );
}
