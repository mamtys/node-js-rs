/* eslint-disable node/no-unpublished-require */
// it's for dev anyways
const swaggerUI = require('koa2-swagger-ui');
const path = require('path');
const YAML = require('yamljs');

const swaggerDocument = YAML.load(path.join(__dirname, '../../doc/api.yaml'));

module.exports = swaggerUI({
  routePrefix: '/doc',
  swaggerOptions: { swaggerDocument }
});
