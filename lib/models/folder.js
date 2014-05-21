import { Model, attr } from 'ember-data';

var Folder = Model.extend({
  name: attr(),

  conclude: function() {
    // DELETE to url with {event: 'conclude'}
    // TODO: how?
    //this.destroyRecord({event: 'conclude'});
  }
});

export default Folder;

