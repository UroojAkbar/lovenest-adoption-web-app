import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import SignUp from "./Pages/SignupPage";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import Blog from "./Pages/blogs/page";
import Donate from "./Pages/Donate";
import BlogDetail from "./Pages/blogs/[slug]/page";
import HowItWorks from "./Pages/HowItWorks"; // Import the HowItWorks component
import Botnet from "./components/Botnet";
import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/loader/laoder";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import ActivationPage from "./Pages/ActivationPage";
import LnaForm from "./Pages/LnaForm";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fakeDataFetch();
  }, []);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <Botnet />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/donate" element={<Donate />} />
            <Route
              path="/blog"
              element={
             
                  <Blog />
                
              }
            />
            <Route
              path="/blogs/:slug"
              element={
               
                  <BlogDetail />
                
              }
            />
            <Route
              path="/how-it-works"
              element={
                
                  <HowItWorks />
              
              }
            />{" "}
            {/* Add the How It Works route */}
            <Route
              path="/Form"
              element={
                <ProtectedRoute>
                  <LnaForm />
                </ProtectedRoute>
              }
            />
             <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
          </Routes>
        </div>
        <Footer />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './Pages/About';
// import ContactUs from './Pages/ContactUs';
// import SignUp from './Pages/SignupPage';
// import Login from './Pages/Login';
// import Footer from './components/Footer';
// import Blog from './Pages/blogs/page';
// import BlogDetail from './Pages/blogs/[slug]/page';
// import HowItWorks from './Pages/HowItWorks';
// import Botnet from './components/Botnet';
// import Loader from "./components/loader/laoder";
// import Store from "./redux/store";
// import { loadUser } from "./redux/actions/user";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch user data when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         await Store.dispatch(loadUser());
//       } catch (error) {
//         toast.error("Failed to load user data");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return isLoading ? (
//     <Loader />
//   ) : (
//     <Router>
//       <div className="App flex flex-col min-h-screen">
//         <Navbar />
//         <Botnet />

//         <div className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<ContactUs />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/blogs/:slug" element={<BlogDetail />} />
//             <Route path="/how-it-works" element={<HowItWorks />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//       <ToastContainer
//         position="bottom-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </Router>
//   );
// }

// export default App;
