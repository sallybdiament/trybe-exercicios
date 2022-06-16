import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {  
    const { pokemon: {name, type, averageWeight, image}} = this.props;
        return (
    <div className='pokemon'>
<h1> {name} </h1>
<p> {type} </p>
<p> {`${averageWeight.value} ${averageWeight.measurementUnit}`} </p>
<img src= {image} alt='' />
    </div>
    )}
}

Pokemon.propTypes = {
pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
        value: PropTypes.number.isRequired,
        measurementUnit: PropTypes.string.isRequired,
    }),
}),
}

export default Pokemon;
