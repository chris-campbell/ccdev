import React from "react";
import AuthorContact from "../authorContact/AuthorContact";
import Description from "../description/Description";

const AuthorDetails = ({ name, description }) => {
  return (
    <div>
      <AuthorContact name={name} />
      <Description description={description} />
    </div>
  );
};

export default AuthorDetails;
