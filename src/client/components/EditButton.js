import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EditButton = (props) => {
  const poll = props.poll;
  const user = props.user;
  if (user && poll.owner === user._id) {
    return <Link to={`/poll/${poll._id}/edit`}><button className="btn btn-default">Edit</button></Link>;
  }
  return null;
};

EditButton.propTypes = {
  poll: PropTypes.object.isRequired,
  user: PropTypes.object
};

export default EditButton;
