import { Model, attr, belongsTo } from 'ember-data';

var Module = Model.extend({

  // need this to do anything
  courseId: attr(),

  //TODO HACKS, FIX
  //Add merging support to adapterDidCommit
  courseIdProperty: function(){
    var id = this.get('courseId');
    if (id){
      this.set('courseIdCache', id);
      return id;
    }
    return this.get('courseIdCache');
  }.property('courseId'),

  name: attr(),
  setupData: function(data, partial){
    this._super(data, partial);
  }

});

export default Module;

