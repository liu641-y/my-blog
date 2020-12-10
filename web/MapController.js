var timeUtil = require("../util/TimeUtil");
var mapDao = require("../dao/mapDao");

function setMap(tagid, blogid){
    mapDao.insertMap(tagid, blogid, timeUtil.getNow(), timeUtil.getNow());
}

module.exports.setMap = setMap;