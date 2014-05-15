import BaseAdapter from './adapters/base';
import BaseSerializer from './serializers/base';

import Course from './models/course';
import CourseAdapter from './adapters/course';
import CourseSerializer from './serializers/course';

import Module from './models/module';
import ModuleAdapter from './adapters/module';
import ModuleSerializer from './serializers/module';

import ModuleItem from './models/module-item';
import ModuleItemSerializer from './serializers/module-item';
import ModuleItemAdapter from './adapters/module-item';

import parseLinkHeader from './parse-link-header';
import DS from 'ember-data';
import Ember from 'ember';
var get = Ember.get;

DS.Store.reopen({
  find: function (type, id, context){
    type = this.modelFor(type);
    var adapter = this.adapterFor(type);

    if(!context){
      return this._super(type,id);
    }
    context.id = id;
    var promise = adapter.findQuery(this, type, context);
    var serializer = this.serializerFor(type);
    var label = "DS: Handle Adapter#findQuery of " + type;

    var record = this.recordForId(type, id);
    record.set('courseId', context.courseId);
    record.set('moduleId', context.moduleId);
    var fetchedRecord = this.fetchRecord(record);

    promise = Promise.cast(promise, label).then(function(adapterPayload) {
       var payload = serializer.extract(store, type, adapterPayload, null, 'findQuery');
    }, null, "DS: Extract payload of findQuery " + type);

    return DS.PromiseObject.create({promise: promise});
  }
});

DS.AdapterPopulatedRecordArray.reopen({
  load: function(data) {
    var store = get(this, 'store'),
        type = get(this, 'type'),
        records = store.pushMany(type, data),
        meta = store.metadataFor(type);

    this.setProperties({
      content: Ember.A(records),
      isLoaded: true,
      meta: Ember.copy(meta)
    });

    // TODO: should triggering didLoad event be the last action of the runLoop?
    Ember.run.once(this, 'trigger', 'didLoad');
  }
});

export {
  BaseAdapter,
  BaseSerializer,

  Course,
  CourseAdapter,
  CourseSerializer,

  Module,
  ModuleAdapter,
  ModuleSerializer,

  ModuleItem,
  ModuleItemSerializer,
  ModuleItemAdapter,

  parseLinkHeader
};

