// exporting the staff routes
const staffRoutes = require('./staff_routes');

module.exports = function(app, db) {
  staffRoutes(app, db);
  // Other route groups could go here, in the future
};