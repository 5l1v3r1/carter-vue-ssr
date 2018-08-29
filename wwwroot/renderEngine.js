const serverBundle = require('./dist/vue-ssr-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

function createRenderer(bundle, template) {
  return require('vue-server-renderer').createBundleRenderer(serverBundle, {
    template: require('fs').readFileSync('./src/index.template.html', 'utf-8'),
    clientManifest
  });
}

module.exports = function RenderEngine() {
  function Render(context, callback) {
    createRenderer().renderToString(context, (err, html) => {
      if (err && err instanceof Error) {
        callback(err, null);
      } else if (err && err.code) {
        callback(null, { code: err.code, response: '' });
      } else {
        callback(null, { code: 200, response: html });
      }
    });
  }
  return {
    Render
  }
}
