import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import Input from "./common/input";
import Select from "./common/select";
import Joi from "joi-browser";
import useValidate from "./useValidate";
import { useNavigate } from "react-router-dom";

function NewMovie() {
	const [storedMovies, setStoredMovies] = useLocalStorage("movies", []);

	const schema = {
		title: Joi.string().required().label("Title"),
		genre: Joi.string().required().label("Genre"),
		rate: Joi.number().required().min(0).max(10).label("Rate"),
	};
	const navigate = useNavigate();
  
	const doSubmit = () => {
		// Вызов сервера
		let newMovie = { ...data, rating: data["rate"] };
		delete newMovie.rate;
    const existingMovies = storedMovies ? [...storedMovies] : [];
    existingMovies.push(newMovie);
		setStoredMovies(existingMovies);
	};

	useEffect(() => {
		if (storedMovies) {
			 navigate("/movies", { replace: true });
		}
	}, [storedMovies]);

	const { data, errors, handleChange, handleSubmit, validate } =
		useValidate(schema);

	// Список доступных жанров
	const genres = [
		"Action",
		"Comedy",
		"Drama",
		"Horror",
		"Sci-Fi",
		"Thriller",
	];

	return (
		<div>
			<h1 className="mb-4">Movie Form</h1>
			<form onSubmit={(e) => handleSubmit(e, doSubmit)}>
				<Input
					name={"title"}
					label={"Title"}
					data={data.title}
					onChange={handleChange}
					error={errors.title}
				/>
				<Select
					name={"genre"}
					label={"Genre"}
					data={data.genre}
					options={genres}
					onChange={handleChange}
					error={errors.genre}
				/>
				<Input
					name={"rate"}
					label={"Rate"}
					data={data.rate}
					onChange={handleChange}
					error={errors.rate}
				/>
				<button
					disabled={validate()}
					type="submit"
					className="btn btn-primary"
				>
					Save
				</button>
			</form>
		</div>
	);
}

export default NewMovie;
