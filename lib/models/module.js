import { Model, attr, belongsTo } from 'ember-data';

var Module = Model.extend({

  // need this to do anything
  course_id: null,

  name: attr()

});

export default Module;

