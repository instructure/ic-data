moduleForModel('course', 'Course', {
  needs: [
    'adapter:course',
    'serializer:course',
    'model:folder',
    'serializer:folder',
    'adapter:folder',
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
//Folder id = 4051596

test('find all courses', function() {
  expect(1);
  var store = this.store();
  stop();
  store.find('course').then(function(courses) {
    start();
    ok(courses, 'got courses');
  });
});

test('can get a parent of a folder', function() {
  expect(1);
  var store = this.store();
  stop();
  Ember.run(function(){
    store.find('folder', 4051596).then(function(folder) {
      folder.get('parent_folder').then(function(parentFolder){
        start();
        equal(parentFolder.get('name'),"course files", 'we got the parent folder correctly');
      });
    });
  });
});


