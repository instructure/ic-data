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

test('can find a folder by itself as a root', function() {
  expect(1);
  var store = this.store();
  stop();
  //https://github.com/emberjs/data/pull/1831 to deal with zombie records that are gonna be left around
  Ember.run(function(){
    store.find('folder', Math.random(), {courseId: ENV.courseId, isRoot:true}).then(function(folder) {
      start();
      ok(folder, 'got folder');
    });
  });
});
test('can find child folders from a root folder', function() {
  expect(1);
  var store = this.store();
  stop();
  //https://github.com/emberjs/data/pull/1831 to deal with zombie records that are gonna be left around
  Ember.run(function(){
    store.find('folder', Math.random(), {courseId: ENV.courseId, isRoot:true}).then(function(folder) {
      folder.get('folders').then(function(folders){
        start();
        equal(folders.get('length'), 3, 'succesfully accessed child folders');
      });
    });
  });
});

test('the folder path access works', function() {
  var path = "course files/folder 1";
  expect(1);
  var store = this.store();
  stop();
  //https://github.com/emberjs/data/pull/1831 to deal with zombie records that are gonna be left around
  Ember.run(function(){
    store.findQuery('folder', {fullName: path, courseId:ENV.courseId }).then(function(folders) {
      start();
      equal(folders.get('lastObject').get('name'), 'folder 1', 'folder succesfully retrieved');
    });
  });
});
