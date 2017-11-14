var faker = require('faker');

function getMvMessage() {
    var mvMessage = []
    for (var id = 0; id < 10; id++) {
        var text1 = faker.company.companyName();
        var text2 = faker.company.companyName();
        var name1 = faker.name.firstName();
        var name2 = faker.name.firstName();
        var score = (Math.random() * 10).toFixed(1);

        mvMessage.push({
            "id": id,
            "src": '../../res/images/image' + (Math.random() * 30).toFixed(0) + '.jpg',
            "text1": text1,
            "text2": text2,
            "text3": name1 + '/' + name2,
            "score":score
        })
    }

    return {
        "mvMessage": mvMessage
    }
}

module.exports = getMvMessage