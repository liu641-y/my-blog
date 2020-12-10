var tagsDao = require("../dao/TagsDao");
var timeUtil = require("../util/TimeUtil");

function sendTags(data, success) {
  tagsDao.insertTags(data, timeUtil.getNow(), timeUtil.getNow(), success);
}

function getTags(atag, success) {
  tagsDao.queryTags(atag, success);
};

module.exports.sendTags = sendTags;
module.exports.getTags = getTags;