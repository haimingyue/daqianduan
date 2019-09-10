const combineRoutes = require('koa-combine-routers');

// var aroutes = require('./aRouter');
import aroutes from './aRouter';
var broutes = require('./bRouter');

module.exports = combineRoutes(
  aroutes,
  broutes
)