/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-promise-executor-return */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
    image: "ocean-8",
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
    image: "midnight-sun",
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
    image: "les-indestructibles-2",
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
    image: "sans-un-bruit",
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
    image: "creed-II",
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
    image: "pulp-fiction",
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
    image: "pulp-fiction",
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    image: "seven",
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    image: "inception",
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
    image: "gone-girl",
  },
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
