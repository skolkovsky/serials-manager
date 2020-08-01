export class Constants {
	//GENRES
	public static readonly HORROR_GENRE: string = 'horror';
	public static readonly COMEDY_GENRE: string = 'comedy';
	public static readonly DRAMA_GENRE: string = 'drama';
	public static readonly CRIME_GENRE: string = 'crime';
	public static readonly DARK_COMEDY_GENRE: string = 'dark comedy';
	public static readonly TRILLER_GENRE: string = 'triller';
	public static readonly ALL_GENRES: Array<string> = new Array<string>(
		Constants.HORROR_GENRE,
		Constants.COMEDY_GENRE,
		Constants.CRIME_GENRE,
		Constants.DRAMA_GENRE,
		Constants.TRILLER_GENRE,
		Constants.DARK_COMEDY_GENRE
	);

	//SYSTEM VARIABLES
	public static readonly DEFAULT_COUNT_SERIALS_ON_PAGE: number = 5;
	public static readonly DEFAULT_PAGE_NUMBER: number = 1;
    public static readonly DEFAULT_GENRE_SERIALS: string = 'all';
}
