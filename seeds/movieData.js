const { Movie } = require("../model");

const moviedata = [
  {
    title: "The Shawshank Redemption",
    rank: "1",
    id: "tt0111161",
    image:"https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Godfather",
    rank: "2",
    id: "tt0068646",
    image: "https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224/",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Godfather: Part II",
    rank: "3",
    id: "tt0071562",
    image: "https://www.imdb.com/title/tt0071562/mediaviewer/rm4159262464/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Pulp Fiction",
    rank: "4",
    id: "tt0110912",
    image:"https://www.imdb.com/title/tt0110912/mediaviewer/rm1959546112/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Good, the Bad and the Ugly",
    rank: "5",
    id: "tt0060196",
    image:"https://www.imdb.com/title/tt0060196/mediaviewer/rm1383786241/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Dark Knight",
    rank: "6",
    id: "tt0468569",
    image:"https://www.imdb.com/title/tt0468569/mediaviewer/rm4023877632/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "12 Angry Men",
    rank: "7",
    id: "tt0050083",
    image:"https://www.imdb.com/title/tt0050083/mediaviewer/rm2927108352/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Schindler's List",
    rank: "8",
    id: "tt0108052",
    image:"https://www.imdb.com/title/tt0108052/mediaviewer/rm1610023168/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    rank: "9",
    id: "tt0167260",
    image:"https://www.imdb.com/title/tt0167260/mediaviewer/rm584928512/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Fight Club",
    rank: "10",
    id: "tt0137523",
    image:"https://www.imdb.com/title/tt0137523/mediaviewer/rm2110056193/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    rank: "11",
    id: "tt0080684",
    image:"https://www.imdb.com/title/tt0080684/mediaviewer/rm3114097664/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    rank: "12",
    id: "tt0120737",
    image:"https://www.imdb.com/title/tt0120737/mediaviewer/rm3592958976/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    rank: "13",
    id: "tt0073486",
    image:"https://www.imdb.com/title/tt0073486/mediaviewer/rm2186479360/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Inception",
    rank: "14",
    id: "tt1375666",
    image:"https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Goodfellas",
    rank: "15",
    id: "tt0099685",
    image:"https://www.imdb.com/title/tt0099685/mediaviewer/rm2091797760/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Star Wars",
    rank: "16",
    id: "tt0076759",
    image:"https://www.imdb.com/title/tt0076759/mediaviewer/rm164871937/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Seven Samurai",
    rank: "17",
    id: "tt0047478",
    image:"https://www.imdb.com/title/tt0047478/mediaviewer/rm1379801345/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Forrest Gump",
    rank: "18",
    id: "tt0109830",
    image:"https://www.imdb.com/title/tt0109830/mediaviewer/rm1954748672/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Matrix",
    rank: "19",
    id: "tt0133093",
    image:"https://www.imdb.com/title/tt0133093/mediaviewer/rm525547776/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    rank: "20",
    id: "tt0167261",
    image:"https://www.imdb.com/title/tt0167261/mediaviewer/rm306845440/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "City of God",
    rank: "21",
    id: "tt0317248",
    image:"https://www.imdb.com/title/tt0317248/mediaviewer/rm1021136128/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Se7en",
    rank: "22",
    id: "tt0114369",
    image:"https://www.imdb.com/title/tt0114369/mediaviewer/rm3116368640/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Silence of the Lambs",
    rank: "23",
    id: "tt0102926",
    image:"https://www.imdb.com/title/tt0102926/mediaviewer/rm3242988544/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Once Upon a Time in the West",
    rank: "24",
    id: "tt0064116",
    image:"https://www.imdb.com/title/tt0064116/mediaviewer/rm1638669825/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Casablanca",
    rank: "25",
    id: "tt0034583",
    image:"https://www.imdb.com/title/tt0034583/mediaviewer/rm1220089088/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Usual Suspects",
    rank: "26",
    id: "tt0114814",
    image:"https://www.imdb.com/title/tt0114814/mediaviewer/rm1975465472/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Raiders of the Lost Ark",
    rank: "27",
    id: "tt0082971",
    image:"https://www.imdb.com/title/tt0082971/mediaviewer/rm2091520257/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Rear Window",
    rank: "28",
    id: "tt0047396",
    image:"https://www.imdb.com/title/tt0047396/mediaviewer/rm2152008192/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "It's a Wonderful Life",
    rank: "29",
    id: "tt0038650",
    image:"https://www.imdb.com/title/tt0038650/mediaviewer/rm3862243328/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Psycho",
    rank: "30",
    id: "tt0054215",
    image:"https://www.imdb.com/title/tt0054215/mediaviewer/rm1902135552/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Léon: The Professional",
    rank: "31",
    id: "tt0110413",
    image:"https://www.imdb.com/title/tt0110413/mediaviewer/rm727457281/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Sunset Blvd.",
    rank: "32",
    id: "tt0043014",
    image:"https://www.imdb.com/title/tt0043014/mediaviewer/rm3057726976/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "American History X",
    rank: "33",
    id: "tt0120586",
    image:"https://www.imdb.com/title/tt0120586/mediaviewer/rm15519489/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Apocalypse Now",
    rank: "34",
    id: "tt0078788",
    image:"https://www.imdb.com/title/tt0078788/mediaviewer/rm938805761/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Terminator 2: Judgment Day",
    rank: "35",
    id: "tt0103064",
    image:"https://www.imdb.com/title/tt0103064/mediaviewer/rm1982141440/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Saving Private Ryan",
    rank: "36",
    id: "tt0120815",
    image:"https://www.imdb.com/title/tt0103064/mediaviewer/rm1982141440/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Memento",
    rank: "37",
    id: "tt0209144",
    image:"https://www.imdb.com/title/tt0209144/mediaviewer/rm655365120/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "City Lights",
    rank: "38",
    id: "tt0021749",
    image:"https://www.imdb.com/title/tt0021749/mediaviewer/rm1151735040/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    rank: "39",
    id: "tt0057012",
    image:"https://www.imdb.com/title/tt0057012/mediaviewer/rm3960095232/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Alien",
    rank: "40",
    id: "tt0078748",
    image:"https://www.imdb.com/title/tt0078748/mediaviewer/rm2032147969/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Modern Times",
    rank: "41",
    id: "tt0027977",
    image:"https://www.imdb.com/title/tt0027977/mediaviewer/rm1482701312/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Spirited Away",
    rank: "42",
    id: "tt0245429",
    image:"https://www.imdb.com/title/tt0245429/mediaviewer/rm4207852801/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "North by Northwest",
    rank: "43",
    id: "tt0053125",
    image:"https://www.imdb.com/title/tt0053125/mediaviewer/rm3518377728/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Back to the Future",
    rank: "44",
    id: "tt0088763",
    image:"https://www.imdb.com/title/tt0088763/mediaviewer/rm554638848/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Life Is Beautiful",
    rank: "45",
    id: "tt0118799",
    image:"https://www.imdb.com/title/tt0118799/mediaviewer/rm2303464448/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Shining",
    rank: "46",
    id: "tt0081505",
    image:"https://www.imdb.com/title/tt0081505/mediaviewer/rm3901111552/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Pianist",
    rank: "47",
    id: "tt0253474",
    image:"https://www.imdb.com/title/tt0253474/mediaviewer/rm902038272/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "Citizen Kane",
    rank: "48",
    id: "tt0033467",
    image:"https://www.imdb.com/title/tt0033467/mediaviewer/rm684416000/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "The Departed",
    rank: "49",
    id: "tt0407887",
    image:"https://www.imdb.com/title/tt0407887/mediaviewer/rm981113088/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
  {
    title: "M",
    rank: "50",
    id: "tt0022100",
    image:"https://www.imdb.com/title/tt0022100/mediaviewer/rm7535104/?ref_=tt_ov_i",
    hasSeenMovie: false,
    hasReview: false,
  },
];

const seedMovie = () => Movie.bulkCreate(moviedata);

module.exports = seedMovie;
