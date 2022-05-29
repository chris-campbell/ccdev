import React from "react";
import AuthorContact from "../authorContact/AuthorContact";
import Description from "../description/Description";

const AuthorDetails = ({ name, description, role }) => {
  return (
    <div>
      <AuthorContact name={name} role={role} />
      <Description description={description} />
    </div>
  );
};

export default AuthorDetails;
