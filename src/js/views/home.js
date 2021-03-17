import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/card";

export const Home = () => {
	let planets = [
		{ nombre: "Saturno", superficie: 1000 },
		{ nombre: "Marte", superficie: 2000 },
		{ nombre: "Tierra", superficie: 3000 },
		{ nombre: "Plutón", superficie: 500 }
	];

	return (
		<div className="text-center mt-5">
			<h1>Home</h1>
			{planets.map((item, index) => {
				return <Card key={index} />;
			})}
		</div>
	);
};
