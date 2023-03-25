import React from "react";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import AuthorPage from "../../pages/AuthorPage/AuthorPage";
import CompaniesPage from "../../pages/CompaniesPage/CompaniesPage";
import ArticlesPage from "../../pages/ArticlesPage/ArticlesPage";
import './app.css';
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AuthorPage />} path="/author" />
        <Route element={<CompaniesPage />} path="/companies" />
        <Route element={<ArticlesPage />} path="/articles" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
      <Footer/>
    </div>
  );
}
