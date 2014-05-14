moduleForModel('course', 'Course', {
  needs: [
    'adapter:course',
    'serializer:course'
  ]
});

test('create and delete a course', function() {
  var record = this.subject({
    account_id: ENV.accountId
  });
  ok(record);
  stop();
  Ember.run(function() {
    record.save().then(function(result) {
      start();
      ok(result);
      stop();
      Ember.run(function() {
        record.destroyRecord().then(function() {
          start();
        });
      });
    });
  });
});

test('find all courses', function() {
  expect(1);
  var store = this.store();
  stop();
  store.find('course').then(function(courses) {
    start();
    ok(courses, 'got courses');
  });
});

