import React from "react";
import Navbar from "./template/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./template/Footer";
import HomePage from "./pages/homePage/HomePage";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import MovieDetailPage from "./pages/movieDetailPage/MovieDetailPage";
import SeatLayout from "./pages/seatLayout/SeatLayout";
import MyBookingPage from "./pages/myBookingPage/MyBookingPage";
import FavoritePage from "./pages/favoritePage/FavoritePage";
import { Toaster } from "react-hot-toast";

const App = () => {
  // kiểm tra admin
  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/movie/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookingPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
