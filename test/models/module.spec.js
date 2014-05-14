moduleForModel('module', 'Module', {
  needs: [
    'serializer:module',
    'adapter:module'
  ]
});

test('create and delete a module', function() {
  expect(3);
  var store = this.store();
  var model = this.subject({
    name: 'test module',
    courseId: ENV.courseId
  });
  stop();
  Ember.run(function() {
    model.save().then(function(result) {
      start();
      ok(result.get('id'), 'got an id');
      equal(result, model);
      stop();
      Ember.run(function() {
        result.destroyRecord().then(function() {
          start();
          ok(true);
        });
      });
    });
  });
});

test('finds all modules for a course', function() {
  expect(1);
  var store = this.store();
  stop();
  store.findQuery('module', {
    courseId: ENV.courseId
  }).then(function(modules) {
    start();
    ok(modules, 'got modules');
  });
});


