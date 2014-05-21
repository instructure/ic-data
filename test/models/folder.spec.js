moduleForModel('folder', 'Folder', {
  needs: [
    'model:course',
    'adapter:course',
    'serializer:course',
    'adapter:folder',
    'serializer:folder',
  ]
});
/*
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
*/

//course_id/folders/root
test('can access the root folder of a course', function() {
  expect(1);
  var store = this.store();
  stop();
  store.find('course').then(function(courses) {
    courses.objectAt(0).get('folder').then(function(rootFolder){
      start();
      ok(rootFolder, 'got root folder');
    });
  });
});

test('can find a folder by itself', function() {
  expect(1);
  var store = this.store();
  stop();
  store.findQuery('folder', {courseId: ENV.courseId, root:true}).then(function(folder) {
    start();
    ok(folder, 'got folder');
  });
});
