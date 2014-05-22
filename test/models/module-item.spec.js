moduleForModel('moduleItem', 'ModuleItem', {
  needs: [
    'adapter:moduleItem',
    'serializer:moduleItem',
    'model:module',
    'serializer:module',
    'adapter:module'
  ]
});

test('find all moduleItems', function() {
  expect(2);
  var store = this.store();
  stop();
  store.findQuery('moduleItem', {courseId: ENV.course2Id, moduleId:ENV.moduleId}).then(function(moduleItems) {
    start();
    ok(moduleItems, 'got moduleItems');
    equal(moduleItems.get('length'), 3, 'there are 3 moduleItems');
  });
});


test('gets a module and its moduleItems', function() {
  expect(3);
  var store = this.store();
  stop();
  Ember.run(function(){
    store.find('module', ENV.moduleId, {courseId: ENV.course2Id }).then(function(module) {
      start();
      ok(module, 'got module');
      equal(module.get('course_id'), ENV.course2Id);
      stop();
      module.get('items').then(function(items){
        start();
        equal(items.get('length'), 3);
      });
    });
  });
});

test('moduleItems pagination works', function() {
  var serializer = this.container.lookup('serializer:module');
  var oldNormalize = serializer.normalize;
  serializer.normalize = function(type, hash, prop){
    if (hash.items_url.indexOf('per_page') === -1){
      hash.items_url = hash.items_url + '?per_page=2';
    }
    return oldNormalize.call(this, type, hash, prop);
  };
  expect(3);
  var store = this.store();
  stop();
  Ember.run(function(){
    store.find('module', ENV.moduleId, {courseId: ENV.course2Id }).then(function(module) {
      module.get('items').then(function(items){
        start();
        equal(items.get('length'), 2);
        equal(items.get('meta.next'), "http://localhost:8080/api/v1/courses/856526/modules/730216/items?page=2&per_page=2");
        stop();
        items.getNextPage().then(function(moreItems){
          start();
          equal(moreItems.get('length'), 3);
        });
      });
    });
  });
});
