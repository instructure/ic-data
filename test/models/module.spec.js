moduleForModel('course', 'Course', {
  needs: [
    'adapter:module'
  ]
});

test('create a module', function() {
  expect(1);
  var store = this.store();
  ok(true);
});

