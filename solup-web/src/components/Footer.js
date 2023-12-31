import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function NavBar () {
  return (
    <div>
      <ul className="navBarList">
        <Link to="/loan-management" className="navItem">
          <img src={`${process.env.PUBLIC_URL}/nav1.png`} alt="대출"/>
          <div>대출</div>
        </Link>
        <Link to="/revenue-analysis-view" className="navItem">
          <img src={`${process.env.PUBLIC_URL}/nav2.png`} alt="매출"/>
          <div>매출</div>
        </Link>
        <Link to="/home" className="navItem">
          <img src={`${process.env.PUBLIC_URL}/nav3.png`} alt="홈"/>
          <div>홈</div>
        </Link>
        <Link to="/employee-management" className="navItem">
          <img src={`${process.env.PUBLIC_URL}/nav4.png`} alt="직원"/>
          <div>직원</div>
        </Link>
        <Link to="/custom-products" className="navItem">
          <img src={`${process.env.PUBLIC_URL}/nav5.png`} alt="상품"/>
          <div>상품</div>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;