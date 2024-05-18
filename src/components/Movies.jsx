import { useState, useEffect } from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import SearchBox from "./SearchBox";

function Movies() {
	const [sortColumn, setsortColumn] = useState({
		path: "title",
		order: "asc",
	});
	const [movies, setMovies] = useLocalStorage("movies", [
		{ id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
		{
			id: 2,
			title: "The Shawshank Redemption",
			genre: "Drama",
			rating: 9.3,
		},
		{ id: 3, title: "The Godfather", genre: "Crime", rating: 9.2 },
		{ id: 4, title: "The Dark Knight", genre: "Action", rating: 9.0 },
		{ id: 5, title: "Pulp Fiction", genre: "Crime", rating: 8.9 },
		{ id: 6, title: "Fight Club", genre: "Drama", rating: 8.8 },
		{ id: 7, title: "Forrest Gump", genre: "Drama", rating: 8.8 },
		{ id: 8, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
	]);
	const [search, setSearch] = useState("");
	const [filtered, setFiltered] = useState(movies);

	useEffect(() => {
		setFiltered(movies);
	}, [movies]);

	const handleSort = (path) => {
		if (path === sortColumn.path) {
			let newOrder = sortColumn.order === "asc" ? "desc" : "asc";
			setsortColumn((prev) => ({ ...prev, order: newOrder }));
		} else {
			setsortColumn({ path: path, order: "asc" });
		}
	};

	const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

	const [likedMovies, setLikedMovies] = useState([]);

	const handleLike = (id) => {
		if (likedMovies.includes(id)) {
			setLikedMovies(likedMovies.filter((item) => item !== id));
		} else {
			setLikedMovies([...likedMovies, id]);
		}
	};

	const handleDelete = (id) => {
		setMovies(movies.filter((movie) => movie.id !== id));
		if (likedMovies.includes(id)) {
			setLikedMovies(likedMovies.filter((item) => item !== id));
		}
	};

	const handleSearch = (query) => {
		setSearch(query);
		if (query) {
			const newFiltered = movies.filter((m) =>
				m.title.toLowerCase().startsWith(query.toLowerCase())
			);
			setFiltered(newFiltered);
		} else {
			setFiltered(movies);
		}
	};

	return (
		<div>
			<h2 className="m-4">Movies Table</h2>
			<Link to="/new-movie" className="link btn btn-primary mb-4">
				New Movie
			</Link>
			<SearchBox value={search} onChange={handleSearch} />
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
					{sorted.map((movie) => (
						<tr key={movie.id}>
							<td>{movie.title}</td>
							<td>{movie.genre}</td>
							<td>{movie.rating}</td>
							<td>
								<button
									className={`btn btn-outline-danger mr-2 ${
										likedMovies.includes(movie.id)
											? "liked"
											: ""
									}`}
									onClick={() => handleLike(movie.id)}
									style={{
										color: likedMovies.includes(movie.id)
											? "var(--bs-btn-hover-color)"
											: "",
										backgroundColor: likedMovies.includes(
											movie.id
										)
											? "var(--bs-btn-hover-bg)"
											: "",
										borderColor: likedMovies.includes(
											movie.id
										)
											? "var(--bs-btn-hover-border-color)"
											: "",
									}}
								>
									<FontAwesomeIcon icon={faHeart} />
									Like
								</button>
								<button
									className="btn btn-outline-warning"
									onClick={() => handleDelete(movie.id)}
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
