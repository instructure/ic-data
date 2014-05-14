import BaseAdapter from './adapters/base';
import BaseSerializer from './serializers/base';

import Course from './models/course';
import CourseAdapter from './adapters/course';
import CourseSerializer from './serializers/course';

import Module from './models/module';
import ModuleAdapter from './adapters/module';
import ModuleSerializer from './serializers/module';

import parseLinkHeader from './parse-link-header';
import DS from 'ember-data';
import Ember from 'ember';
var get = Ember.get;

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

  parseLinkHeader
};

