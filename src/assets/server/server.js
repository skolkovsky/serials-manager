const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const sortedSerialByCountOnPage = {};

function proccessSerials(countSerialsOnPage, pageNumber = 1, serials, genre, premiere) {
	const serialsLength = serials.length;
	if (serialsLength < countSerialsOnPage) {
		return {
			countPages: 1,
			serials,
		};
	} else {
		const serialsFilteredByGenre = !!genre ? filterSerialsByGenre(serials, genre) : serials;
		const serialsFilteredByPremiere = !!premiere ? filterSerialsByPremiere(serialsFilteredByGenre, premiere) : serialsFilteredByGenre;
		const serialsLength = serialsFilteredByPremiere.length;
		const serialsPartByCountOnPage = serialsFilteredByPremiere.filter((value, index) => index < countSerialsOnPage);
		const countPages = calculateCountPages(countSerialsOnPage, serialsLength);
		return {
			countPages,
			serials: serialsPartByCountOnPage,
			premiereYears: gettingPremiereYears(serialsPartByCountOnPage),
		};
	}
}

const separateSerialsByPageNumber = (serials, countSerialsOnPage) => {
	let sourceSerials = Object.assign([], serials);
	let pageNumber = 1;
	while (sourceSerials.length) {
		const partOfSerial = sourceSerials.splice(0, countSerialsOnPage);
		sortedSerialByCountOnPage[pageNumber] = (partOfSerial);
		pageNumber++;
	}
};

const calculateCountPages = (countSerialsOnPage, serialsLength) => {
	const result = serialsLength / countSerialsOnPage;
	const wholeNumber = Math.round(result);
	return result - wholeNumber > 0 ? wholeNumber + 1 : result;
};

const gettingPremiereYears = (serials) => {
	const setPremierYears = new Set();
	serials.forEach((element) => setPremierYears.add(element.premiereYear));
	return Array.from(setPremierYears);
};

const filterSerialsByPremiere = (serials, premiere) => serials.filter((serial) => serial.premiereYear.toString() === premiere);

const filterSerialsByGenre = (serials, reqGenre) => serials.filter((serial) => serial.genres.some((genre) => genre.toLowerCase() === reqGenre.toLowerCase()));

app.get("/api/get/serials", (req, res) => {
	console.log(req.query);
	const countSerialsOnPage = req.query.countSerials;
	const pageNumber = req.query.pageNumber;
	const genre = req.query.genre;
	const premiere = req.query.premiere;
	const serials = JSON.parse(fs.readFileSync("./serials.json", "utf-8")).serials;
	res.set("Access-Control-Allow-Origin", "*");
	separateSerialsByPageNumber(serials, countSerialsOnPage);
	res.send(proccessSerials(countSerialsOnPage, pageNumber, serials, genre, premiere));
});

app.listen(port, () => console.log("Server is started on port " + port));
