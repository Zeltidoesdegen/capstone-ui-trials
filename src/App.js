import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage";
import MainBody from './pages/mainbody';
import UserContext from './components/ContextProvider';
import IngredientsPickerMain from './pages/IngredientsPicker'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './layouts/ModalFood';


function App() {
  return (
    <ChakraProvider>
      <body>
        <BrowserRouter>
          <UserContext.Provider>
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/mainMenu" element={<MainBody />}></Route>
              <Route path="/Pick_Ingredients" element={<IngredientsPickerMain />}></Route>
              <Route path="/Random_Recipe" element={<Home></Home>}></Route>
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </body>
    </ChakraProvider>
  )
}

export default App;
