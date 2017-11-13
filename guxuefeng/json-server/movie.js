var faker = require('faker')
function generateMovies () {
  var movies = []
  for (var id = 0; id < 10; id++) {
    var path = faker.image.fashion();
    var title = faker.name.title();
    var message = faker.name.jobTitle();
    var actor = faker.name.firstName();
    var score = (Math.random() * 10).toFixed(1);

    movies.push({
      "id": id,
      "path": path,
      "title": title,
      "message": message,
      "actor": actor,
      "score": score,
    })
  }

  return { "movies": movies }
}

module.exports = generateMovies
