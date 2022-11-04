import PropTypes, { string } from "prop-types";
import React from 'react'
export default function Profile ({fullName,
    bio,
    profession,
    handleName})  {
  return (
    <div style={{ color: 'white', textAlign: 'center', backgroundColor: 'blue'}}>
      <p>My name is: {fullName}</p>
      <p>I'm doing: {bio}</p>
      <p>I work: {profession}</p>
      <button onClick={()=> handleName (fullName)}>Click for my name</button>
    </div>
  )
}
Profile.defaultProps = {
    fullName: "Name and Prename",
    bio: "My bio",
    profession: "My profession"
}
Profile.propTypes = {
  profession: PropTypes.string
};

