const RenderEngine = require('./renderEngine');
module.exports = (callback, data) => {
  RenderEngine().Render(data, (err, returnVal) => {
    callback(err, returnVal);
  });
}
