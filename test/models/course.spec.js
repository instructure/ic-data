moduleForModel('course', 'Course', {
  needs: [
    'adapter:course'
  ]
});

test('find all courses', function() {
  expect(3);
  var store = this.store();
  stop();
  store.find('course').then(function(courses) {
    start();
    ok(courses, 'got courses');
    equal(courses.get('length'), 1, 'we have one course');
    equal(courses.objectAt(0).get('name'), 'ic-data-testing');
  });
});

