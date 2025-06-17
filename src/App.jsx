import { useState } from "react";
import Home from "./pages/home/Home";
import RootLayOut from "./components/roots/RootLayOut";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


import Contact from "./pages/contacts/Contact";
import ImportExportServices from "./pages/service/ImportExportServices";
import CrossBorderPermits from "./pages/service/CrossBorderPermits";
import VehicleRegistration from "./pages/service/VehicleRegistration";
;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />}></Route>
  
        <Route path="/import-export-services" element={<ImportExportServices/>}></Route>
        <Route path="/cross-border-permits" element={<CrossBorderPermits/>}></Route>
        <Route path="/vehicle-registrations" element={<VehicleRegistration/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
