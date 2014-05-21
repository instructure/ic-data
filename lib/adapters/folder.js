import BaseAdapter from './base';

var FolderAdapter =  BaseAdapter.extend({
  createRecord: function(store, type, record) {
    debugger
  },

  deleteRecord: function(store, type, record) {
    debugger
  },

  find: function(store, type, id) {
    debugger
  },

  findQuery: function(store, type, query){
    // handles searching for a folder based on the full path to it
    // ends up at FoldersController#resolve_path
    // see: https://canvas.beta.instructure.com/doc/api/files.html#method.folders.resolve_path
    if ('fullPath' in query) {
      // something like: /api/v1/courses/:course_id/folders/by_path/*full_path
      var url = this.buildURL(type.typeKey /* I wish I could pass: contextString */) + '/by_path/' + query.fullPath
      return this.ajax(url, 'GET');
    }
  }
});

export default FolderAdapter;

