emq.globalize();

ic.data.BaseAdapter.reopen({
  host: ENV.proxyHost
});

var registry = {
  'adapter:base': ic.data.BaseAdapter,
  'model:course': ic.data.Course,
  'adapter:course': ic.data.CourseAdapter
};

setResolver(Ember.DefaultResolver.extend({
  resolve: function(fullName) {
    return registry[fullName] || this._super.apply(this, arguments);
  }
}).create());

