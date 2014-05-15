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

