import { Model, attr } from 'ember-data';

export default Model.extend({
  name: attr(),

  conclude: function() {
    // TODO: how?
    //this.destroyRecord({event: 'conclude'});
  }
});

