import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../redux/actions/auth";

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
   const authLinks = (
      <ul>
         <li>
            <Link to="/create-profile">Job Posting</Link>
         </li>
         <li>
            <Link to="/profiles">Apply</Link>
         </li>
         <li>
            <Link to="/dashboard">
               <i className="fas fa-user"></i>{" "}
               <span className="hide-sm">Dashboard</span>
            </Link>
         </li>
         <li>
            <Link to="/profiles">Expert Support</Link>
         </li>
         <li>
            <a onClick={logout} href="#!">
               <i className="fas fa-sign-out-alt"></i>{" "}
               <span className="hide-sm">Logout</span>
            </a>
         </li>
      </ul>
   );

   const guestLinks = (
      <ul>
         <li>
            <Link to="/register">Sign_up</Link>
         </li>
         <li>
            <Link to="/login">Sign_in</Link>
         </li>
         <li>
            <Link to="/profiles">Job Posting</Link>
         </li>
         <li>
            <Link to="/profiles">Apply</Link>
         </li>
         <li>
            <Link to="/profiles">Expert Support</Link>
         </li>
      </ul>
   );

   return (
      <nav className="navbar bg-dark">
         <h1>
            <Link to="/">
               <i className="fas fa-code"></i> Naukri.com
            </Link>
         </h1>
         <div className="topnav">
            <input type="text" placeholder="Search..." />
            <input type="submit" value="Search" />
         </div>
         {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
         )}
      </nav>
   );
};

Navbar.propTypes = {
   logout: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
   auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
