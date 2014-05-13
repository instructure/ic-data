moduleForModel('course', 'Course', {
  needs: [
    'adapter:application',
    //'adapter:course'
  ]
});

test('it finds things', function() {
  var store = this.store();
  ok(store, 'got a store');
  var model = this.subject();
  ok(model, 'got a model');
});

test('find all courses', function() {
  expect(1);
  var store = this.store();
  stop();
  store.find('course').then(function(res) {
    start();
    ok(res);
  });
});

