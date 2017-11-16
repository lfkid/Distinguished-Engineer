let faker = require('faker');

function createRandomMovieMsg() {
  let movies = [];
  let waitItemArr =[];
  for (let id = 0; id < 15; id++) {
    //let url = faker.image.image();
    let urlIndex = (Math.random() * 10).toFixed(0);
    let title = faker.company.companyName();
    let content = faker.lorem.sentence();
    let autor1 = faker.name.firstName();
    let autor2 = faker.name.firstName();
    let score = (Math.random() * 10).toFixed(1);
    movies.push({
      "id": id,
      "url": '../../asserts/images/about/'+urlIndex+'.jpg',
      "title": title,
      "content": content,
      "autor":autor1+'/'+autor2,
      "score": score,
    });

    let waitUrlIndex = (Math.random() * 10).toFixed(0);
    let waitTitle = faker.company.companyName();
    let waitContent = faker.lorem.sentence();
    let waitAutor1 = faker.name.firstName();
    let waitAutor2 = faker.name.firstName();
    let waitScore = (Math.random() * 10).toFixed(1);

    waitItemArr.push({
      "id": id,
      "url": '../../asserts/images/about/'+waitUrlIndex+'.jpg',
      "title": waitTitle,
      "content": waitContent,
      "autor":waitAutor1+'/'+waitAutor2,
      "score": waitScore,
    })
  }
  return {
    "movies": movies,
    "waitItemArr":waitItemArr
  }
}
module.exports = createRandomMovieMsg;
