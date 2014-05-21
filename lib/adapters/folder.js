import BaseAdapter from './base';

var FolderAdapter = BaseAdapter.extend({
  findQuery: function(store, type, query){
    var url;
    if (query.root){
      url = this.urlPrefix()+'/courses/' + query.courseId + '/folders/root';
    }
    var courseId = query.courseId;
    delete query.courseId;
    delete query.root;
    return this.ajax(url, 'GET', query).then( function(folder){
      folder.courseId = courseId;
      return [folder];
    });
  },


 find: function(store, type, id) {
    var record = store.getById(type, id);
    var url = this.urlPrefix()+'/courses/'+record.get('courseIdProperty')+'/modules/'+record.get('id');
    if (record.get('isRoot')){
      url = this.urlPrefix()+'/courses/'+record.get('courseIdProperty')+'/folders/root';
    }
    var courseId = record.get('courseIdProperty');
    return this.ajax(url, "GET").then( function(folders){
      if (!Array.isArray(folders)) {
        folders.course_id = courseId;
        return folders;
      }

      folders.forEach( function(folder){
        folders.course_id = courseId;
      });
      return folders;
    });
  },
  /*
  createRecord: function(store, type, record) {
    var data = {};
    var serializer = store.serializerFor(type.typeKey);
    var url = this.urlPrefix()+'/accounts/'+record.get('account_id')+'/courses';
    record.set('account_id', null);
    serializer.serializeIntoHash(data, type, record, { includeId: true });
    return this.ajax(url, "POST", { data: data });
  },

  deleteRecord: function(store, type, record) {
    var id = record.get('id');
    var data = { event: 'delete' };
    return this.ajax(this.buildURL(type.typeKey, id), "DELETE", {data: data});
  }
  */
});

export default FolderAdapter;

