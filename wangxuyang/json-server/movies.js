//movie.js
var faker = require('faker')

function generateMovies() {
  var movie = []

  for (var id = 0; id < 10; id++) {
    var title = faker.random.word()
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var desc = faker.company.bs()
    var score = Math.floor(Math.random()*10+1)
    var image = faker.image.avatar()

    movie.push({
      "id": id,
      "src": image,
      "title": title,
      "desc": desc,
      "dubbing": firstName + '/' + lastName,
      "score": score+'分'
    })
  }

  return {
    "movie": movie
  }
}

// 如果你要用json-server的话，就需要export这个生成fake data的function
module.exports = generateMovies
