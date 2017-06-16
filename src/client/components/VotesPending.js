import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const VotesPending = (props) => {
  const pendingVotes = props.pendingVotes;
  if (pendingVotes.length !== 0) {
    // TODO define the link where the user go to see the votes pending to be
    // submitted
    return <Link to={`to_be_defined`}><button className="btn btn-default">{pendingVotes.length}</button></Link>;
  }
  return null;
};

VotesPending.propTypes = {
  pendingVotes: PropTypes.object
};

export default VotesPending;
