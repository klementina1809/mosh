import { useState } from "react";
import React from "react";
import _ from "lodash";

function Movies() {
	const [sortColumn, setsortColumn] = useState({
		path: "title",
		order: "asc",
	});

	const movies = [
		{ title: "Фильм 1", genre: "Жанр 1", rating: 8.5 },
		{ title: "Фильм 2", genre: "Жанр 2", rating: 7.8 },
		{ title: "Фильм 3", genre: "Жанр 3", rating: 9.2 },
	];

	const handleSort = (path) => {
		if (path === sortColumn.path) {
			let newOrder = sortColumn.order === "asc" ? "desc" : "asc";
			setsortColumn((prev) => ({ ...prev, order: newOrder }));
		} else {
			setsortColumn({ path: path, order: "asc" });
		}
	};

	const sorted = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);

	return (
		<div>
			<h2>Таблица фильмов</h2>
			<table>
				<thead>
					<tr>
						<th onClick={() => handleSort("title")}>Название</th>
						<th onClick={() => handleSort("genre")}>Жанр</th>
						<th onClick={() => handleSort("rating")}>Оценка</th>
					</tr>
				</thead>
				<tbody>
					{sorted.map((movie, index) => (
						<tr key={index}>
							<td>{movie.title}</td>
							<td>{movie.genre}</td>
							<td>{movie.rating}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
	return <div></div>;
}

export default Movies;
