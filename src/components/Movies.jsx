import { useState } from "react";
import React from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";
import NewMovie from "./newMovie";

function Movies() {
	const [sortColumn, setsortColumn] = useState({
		path: "title",
		order: "asc",
	});

	const [movies, setMovies] = useState([
		{ title: "Inception", genre: "Sci-Fi", rating: 8.8 },
		{ title: "The Shawshank Redemption", genre: "Drama", rating: 9.3 },
		{ title: "The Godfather", genre: "Crime", rating: 9.2 },
		{ title: "The Dark Knight", genre: "Action", rating: 9.0 },
		{ title: "Pulp Fiction", genre: "Crime", rating: 8.9 },
		{ title: "Fight Club", genre: "Drama", rating: 8.8 },
		{ title: "Forrest Gump", genre: "Drama", rating: 8.8 },
		{ title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
	]);

	const handleSort = (path) => {
		if (path === sortColumn.path) {
			let newOrder = sortColumn.order === "asc" ? "desc" : "asc";
			setsortColumn((prev) => ({ ...prev, order: newOrder }));
		} else {
			setsortColumn({ path: path, order: "asc" });
		}
	};

	const sorted = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);

	const [likedMovies, setLikedMovies] = useState([]);

	const handleLike = (index) => {
		if (likedMovies.includes(index)) {
			setLikedMovies(likedMovies.filter((item) => item !== index));
		} else {
			setLikedMovies([...likedMovies, index]);
		}
	};

	const handleDelete = (index) => {
		setMovies(movies.filter((_, i) => i !== index));
		// Если фильм, который удаляем, был лайкнут, удаляем его из списка лайкнутых
		if (likedMovies.includes(index)) {
			setLikedMovies(likedMovies.filter((item) => item !== index));
		}
	};

	return (
		<div>
			<h2 className="m-4">Movies Table</h2>
			<Link to="/new-movie" className="link btn btn-primary mb-4">New Movie</Link>
			<table className="table table-striped table-bordered">
				<thead className="thead-dark">
					<tr>
						<th onClick={() => handleSort("title")}>Title</th>
						<th onClick={() => handleSort("genre")}>Genre</th>
						<th onClick={() => handleSort("rating")}>Rating</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{sorted.map((movie, index) => (
						<tr key={index}>
							<td>{movie.title}</td>
							<td>{movie.genre}</td>
							<td>{movie.rating}</td>
							<td>
								<button
									className={`btn btn-outline-danger mr-2 ${
										likedMovies.includes(index)
											? "liked"
											: ""
									}`}
									onClick={() => {
										const newLikedMovies =
											likedMovies.includes(index)
												? likedMovies.filter(
														(item) => item !== index
												  )
												: [...likedMovies, index];
										setLikedMovies(newLikedMovies);
									}}
									style={{
										color: likedMovies.includes(index)
											? "var(--bs-btn-hover-color)"
											: "",
										backgroundColor: likedMovies.includes(
											index
										)
											? "var(--bs-btn-hover-bg)"
											: "",
										borderColor: likedMovies.includes(index)
											? "var(--bs-btn-hover-border-color)"
											: "",
									}}
								>
									<FontAwesomeIcon icon={faHeart} />
									Like
								</button>

								<button
									className="btn btn-outline-warning"
									onClick={() => handleDelete(index)}
								>
									<FontAwesomeIcon icon={faTrash} />
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Movies;
