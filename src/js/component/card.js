import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div>
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="card-text">
						La superficie de {props.nombre}
						es de {props.superficie}
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	nombre: PropTypes.string,
	superficie: PropTypes.number
};
export default Card;
