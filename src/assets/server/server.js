const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

function proccessSerials(countSerialsOnPage, pageNumber = 1, serials, genre = "all") {
	const serialsLength = serials.length;
	if (serialsLength < countSerialsOnPage) {
		return {
			countPages: 1,
			serials,
		};
	} else {
		if (genre !== "all") {
			const serialsFilteredByGenre = filterSerialsByGenre(serials, genre);
			let serialsLength = serialsFilteredByGenre.length;
			const serialsPartByCountOnPage = serialsFilteredByGenre.filter((value, index) => index < countSerialsOnPage);
			const countPages = calculateCountPages(countSerialsOnPage, serialsLength);
			return {
				countPages,
				serials: serialsPartByCountOnPage,
			};
		} else {
			const serialsPartByCountOnPage = serials.filter((value, index) => index < countSerialsOnPage);
			const countPages = calculateCountPages(countSerialsOnPage, serialsLength);
			return {
				countPages,
				serials: serialsPartByCountOnPage,
			};
		}
	}
}

const calculateCountPages = (countSerialsOnPage, serialsLength) => {
	const result = serialsLength / countSerialsOnPage;
	const wholeNumber = Math.round(result);
	return result - wholeNumber > 0 ? wholeNumber + 1 : result;
};

const filterSerialsByGenre = (serials, reqGenre) => {
	return serials.filter((serial) => serial.genres.some((genre) => genre.toLowerCase() === reqGenre.toLowerCase()));
};

app.get("/api/get/serials", (req, res) => {
	console.log(req.query);
	const countSerialsOnPage = req.query.countSerials;
	const pageNumber = req.query.pageNumber;
	const genre = req.query.genre;
	const serials = JSON.parse(fs.readFileSync("./serials.json", "utf-8")).serials;
	res.set("Access-Control-Allow-Origin", "*");
	res.send(proccessSerials(countSerialsOnPage, pageNumber, serials, genre));
});

app.listen(port, () => console.log("Server is started on port " + port));
