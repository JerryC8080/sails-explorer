/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getUser : getUser
};

function getUser(req, res) {
  console.log('getUser running');
  return res.json({username: 'jerryc'});
}


