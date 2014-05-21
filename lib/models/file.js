import { Model, attr } from 'ember-data';

var File = Model.extend({
  name: attr(),

  conclude: function() {
    // DELETE to url with {event: 'conclude'}
    // TODO: how?
    //this.destroyRecord({event: 'conclude'});
  }
});

export default File;

