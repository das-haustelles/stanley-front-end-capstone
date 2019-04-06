const faker = require('faker');
const {
  searchDB,
  SearchInputModel,
  CalendarModel,
  GroupsModel 
} = require('./index.js');

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
  for (let i = 0; i <= 11; i += 1) {
    const fakeEntry = { unavailable: [] };

    for (let k = 1; k <= 29; k += 1) {
      if (Math.random() > 0.75) {
        fakeEntry.unavailable.push(k);
      }
    }
    fakeCalendarData.push(fakeEntry);
    console.log("fakeCalendarData = ", fakeCalendarData);
  }
};

fakeDataMaker();
fakeCalMaker();
const insertSeachInputData = () => {
  SearchInputModel.create(fakeSearchInputData)
    .then(() => CalendarModel.create(fakeCalendarData))
    .then(() => searchDB.disconnect());
};
insertSeachInputData();

// const insertCalendarData = () => {
//   CalendarModel.create(fakeCalendarData)
//     .then(() => searchDB.disconnect());
// };
// insertCalendarData();
