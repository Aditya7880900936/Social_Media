import "./globals.css";
import React from "react";
import { Routes,Route } from "react-router-dom";
import SigninForm from "./_auth/Forms/SigninForm";
import { Home } from "./_root/Pages";
import SignupForm from "./_auth/Forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";


const App = () => {
  return (
    <main className="flex h-screen">
            <Routes>
                {/* public Routes */}
              <Route element={<AuthLayout/>}>
                <Route path="/sign-in" element={<SigninForm/>} />
                <Route path="/sign-up" element={<SignupForm/>} />
              </Route>



                {/* Private Routes */}
              <Route element={<RootLayout/>}>
              <Route index element = {<Home/>} />
              </Route>

            </Routes>
    </main>
  )
}

export default App
