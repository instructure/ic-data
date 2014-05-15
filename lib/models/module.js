import { Model, attr, belongsTo } from 'ember-data';

var Module = Model.extend({

  // need this to do anything
  course_id: attr(),

  //TODO HACKS, FIX
  //Add merging support to adapterDidCommit
  courseIdProperty: function(){
    var id = this.get('course_id');
    if (id){
      this.set('courseIdCache', id);
      return id;
    }
    return this.get('courseIdCache');
  }.property('course_id'),

  name: attr(),

});

export default Module;

