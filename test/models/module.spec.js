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
    course_id: ENV.courseId
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
    course_id: ENV.courseId
  }).then(function(courses) {
    start();
    ok(courses, 'got courses');
  });
});

