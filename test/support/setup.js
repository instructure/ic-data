emq.globalize();

var ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:8080',
  namespace: 'api/v1'
});

var registry = {
  'adapter:application': ApplicationAdapter,
  'adapter:classic': ic.data.ClassicAdapter,
  'model:course': ic.data.Course,
  'adapter:course': ic.data.CourseAdapter
};

function registerUnit(fullName, Klass) {
  registry[fullName] = Klass
}

setResolver(Ember.DefaultResolver.extend({
  resolve: function(fullName) {
    return registry[fullName] || this._super.apply(this, arguments);
  }
}).create());

