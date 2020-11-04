import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <h1 data-ns-test="project-name">EcoLife</h1>
      <p data-ns-test="project-description">
        A Ecommerce website for Environment friendly products
      </p>
      <h1 data-ns-test="project-name">InterviewPrep</h1>
      <p data-ns-test="project-description">
        A website which contains all the blogs related to web developement
      </p>
    </>
  );
};

export default App;
