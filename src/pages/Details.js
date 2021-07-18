import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/context';

const Details = ({ match: { params: { id } } }) => {
  const { data } = useContext(Context);
  return (
    <div>
      {data.filter((hero) => hero.id === Number(id))
        .map((hero) => <p key={hero.id}>{hero.alias}</p>)}
    </div>
  );
};

Details.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Details;
