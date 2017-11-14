let faker = require('faker');

function createRandomMovieMsg() {
  let movies = [];
  for (let id = 0; id < 15; id++) {
    let url = faker.image.image();
    let title = faker.company.companyName();
    let content = faker.lorem.sentence();
    let autor1 = faker.name.firstName();
    let autor2 = faker.name.firstName();
    let score = (Math.random() * 10).toFixed(1);
    movies.push({
      "id": id,
      "url": url,
      "title": title,
      "content": content,
      "autor":autor1+'/'+autor2,
      "score": score,
    })
  }
  return {
    "movies": movies
  }
}
module.exports = createRandomMovieMsg;
