import React from "react";
import PropTypes from "prop-types";

const ProfileItem = ({
   profile: { status, company, location, skills, bio },
}) => {
   return (
      <div className="profile bg-light">
         <div>
            <h4>
               Role: {status}{" "}
               {company && (
                  <span>
                     <br />
                     Company: {company}
                  </span>
               )}
            </h4>

            <p>{bio}</p>

            <p className="my-1">{location && <span>{location}</span>}</p>
         </div>
         <div>
            <p>Skills required</p>
            {skills.slice(0, 5).map((skill, index) => (
               <p
                  key={index}
                  className="text-primary"
                  style={{ display: "inline" }}
               >
                  {skill},
               </p>
            ))}
         </div>
      </div>
   );
};

ProfileItem.propTypes = {
   profile: PropTypes.object.isRequired,
};

export default ProfileItem;
