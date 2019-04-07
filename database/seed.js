const faker = require('faker');
const {
  searchDB,
  SearchInputModel,
  CalendarModel,
  GroupsModel 
} = require('./index.js');

const fakeSearchInputData = [];
const fakeGroupsData = [];
const fakeDataMaker = () => {
  for (let i = 0; i < 100; i += 1) {
    let hostelName = faker.name.firstName();
    let hostelCity = faker.address.city();
    fakeSearchInputData.push(
      {
        name: hostelName,
        city: hostelCity,
        text: `${hostelName} Hostel in ${hostelCity}`,
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
