import React from "react";

const ErrorPage = () => {
  const errorStyle = {
    textAlign: "center",
    padding: "50px",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "80vh",
  };
  
  return (
    <div style={errorStyle}>
      <h1 style={{ fontSize: "3em", marginBottom: "30px", color: "red" }}>
        404 Error: Page Not Found
      </h1>
      <p style={{ fontSize: "1.2em" }}>
        Oops! The page you are looking for cannot be found. Please check the URL
        or try searching for the page.
      </p>
    </div>
  );
};

export default ErrorPage;
