const faker = require('faker');
const {
  searchDB,
  SearchInputModel,
  Calendar,
  Groups } = require('./index.js');

// possibly drop these tables and write new ones

const fakeSearchInputData = [];
const fakeGroupsData = [];
const fakeDataMaker = () => {
  for (let i = 0; i < 100; i += 1) {
    fakeSearchInputData.push(
      {
        name: faker.name.firstName(),
        city: faker.address.city(),
      },
    );

    fakeGroupsData.push(
      { groups: faker.random.number(80) },
    );
  }
};
const fakeCalendarData = [];
const fakeCalMaker = () => {
  for (let i = 0; i < 100; i += 1) {
    for (let j = 1; j <= 28; j += 1) {
      const fakeEntry = { unavailable: [] };
      if (Math.random() > 0.75) {
        fakeEntry.unavailable.push(i);
      }
      fakeCalendarData.push(fakeEntry);
    }
  }
};

fakeDataMaker();
fakeCalMaker();
const insertSeachInputData = () => {
  SearchInputModel.create(fakeSearchInputData)
    .then(() => searchDB.disconnect());
};
insertSeachInputData();
