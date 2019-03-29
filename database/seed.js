const {searchDB, SearchInputModel, Calendar, Groups} = require ('./index.js');
const faker = require('faker');

const fakeDataMaker = function () {
    for (var i = 0; i < 100; i++) {
        fakeSearchInputData.push(
            { name: faker.name.firstName(),
              city: faker.address.city() }
        )
        fakeGroupsData.push(
            {groups: faker.random.number(80)}
        )

    }
}
const fakeCalMaker = function () {
    for (var i = 0; i < 100; i++) {
        for (var j = 1; j <= 28; j++) {
            var fakeEntry = {unavailable: []}
            if (Math.random() > .75) {
                fakeEntry.unavailable.push(i);
            }
        }
        fakeCalendarData.push(fakeEntry)
    }
}

const fakeSearchInputData = [];
const fakeCalendarData = [];
const fakeGroupsData = []
fakeDataMaker();
fakeCalMaker();
const insertSeachInputData = function () {
    SearchInputModel.create(fakeSearchInputData)
        .then(() => searchDB.disconnect());
}
insertSeachInputData();

