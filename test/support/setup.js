emq.globalize();

ic.data.BaseAdapter.reopen({
  host: ENV.proxyHost
});

var registry = {
  'adapter:base': ic.data.BaseAdapter,
  'serializers:base': ic.data.BaseSerializer,

  'model:course': ic.data.Course,
  'adapter:course': ic.data.CourseAdapter,
  'serializer:course': ic.data.CourseSerializer,


  'model:module': ic.data.Module,
  'adapter:module': ic.data.ModuleAdapter,
  'serializer:module': ic.data.ModuleSerializer,

  'model:moduleItem': ic.data.ModuleItem,
  'adapter:moduleItem': ic.data.ModuleItemAdapter,
  'serializer:moduleItem': ic.data.ModuleItemSerializer,
};

setResolver(Ember.DefaultResolver.extend({
  resolve: function(fullName) {
    return registry[fullName] || this._super.apply(this, arguments);
  }
}).create());

