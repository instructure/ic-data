import { RESTAdapter } from 'ember-data';

export default RESTAdapter.extend({
  namespace: 'api/v1'
});

