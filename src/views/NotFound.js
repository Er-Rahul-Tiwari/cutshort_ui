import React from "react";
import { Link } from "react-router-dom";
import './notFound.scss';

const Index = () => {
  return (
    <div className='notFound'>
      <h1>Sorry!</h1>
      <h2>Page not found</h2>
      {/* TO REDIRECT NOTFOUND */}
      <Link to="/" className="">
        Go to Home Page
      </Link>
    </div>
  );
};

export default Index;
