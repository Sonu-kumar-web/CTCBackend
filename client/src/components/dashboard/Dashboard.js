import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../redux/actions/profile";

import Spinner from "../layouts/Spinner";

const Dashboard = ({
   getCurrentProfile,
   auth: { user },
   profile: { profile, loading },
}) => {
   useEffect(() => {
      getCurrentProfile();
   }, [getCurrentProfile]);

   // console.log("Dashboard", profile.experience);

   return loading && profile === null ? (
      <Spinner />
   ) : (
      <Fragment>
         <h1 className="large text-primary">Dashboard</h1>
         <p className="lead">
            <i className="fas fa-user"></i> Welcome {user && user.name}
         </p>
         <Fragment>
            <Link to="#" className="btn btn-primary my-1">
               My Profile
            </Link>
            <Link to="#" className="btn btn-primary my-1">
               Job Postings
            </Link>
            <Link to="#" className="btn btn-primary my-1">
               Applications by each Job posting
            </Link>
            <Link to="#" className="btn btn-primary my-1">
               Payment History (if any)
            </Link>
            <Link to="#" className="btn btn-primary my-1">
               Application life cycle
            </Link>
         </Fragment>
      </Fragment>
   );
};

Dashboard.propTypes = {
   getCurrentProfile: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
   auth: state.auth,
   profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
