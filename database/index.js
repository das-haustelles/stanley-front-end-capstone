const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/searchBar');
var searchDB = mongoose.connection;

//search input schema
var searchInputSchema = mongoose.Schema({
    name: String,
    city: String,
});

var SearchInputModel = mongoose.model('Input', searchInputSchema);

//check in check out schema
var searchCalendarSchema = mongoose.Schema({
    unavailable: Number,
})

var CalendarModel = mongoose.model('Calendar', searchCalendarSchema);

//groups schema
var searchGroupsSchema = mongoose.Schema({
    groups: Number,
})

var GroupsModel = mongoose.model('Groups', searchGroupsSchema);

searchDB.on('error', console.error.bind(console, 'connection error:'));
searchDB.once('open', function() {
  console.log('database connected fam');
});

module.exports = {
    searchDB: searchDB, 
    SearchInputModel: SearchInputModel, 
    CalendarModel: CalendarModel, 
    GroupsModel: GroupsModel,
}