const movies = [
    { title: 'a', year : 2000, rating : 4.5},
    { title: 'a', year : 2000, rating : 4.5},
    { title: 'a', year : 2000, rating : 4.5},
    { title: 'a', year : 2000, rating : 4.5},
];


const titles = movies
     .filter(m => m.year === 2018 && m.rating >= 4)
     .sort((a, b) => a.rating - b.rating)
     .reverse()
     .map(m => m.title)

     console.log(titles);