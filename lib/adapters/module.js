import BaseAdapter from './base';

var ModuleAdapter =  BaseAdapter.extend({
  createRecord: function(store, type, record) {
    var data = {};
    var serializer = store.serializerFor(type.typeKey);
    var url = this.urlPrefix()+'/courses/'+record.get('course_id')+'/modules';
    serializer.serializeIntoHash(data, type, record, { includeId: true });
    return this.ajax(url, "POST", { data: data });
  },

  deleteRecord: function(store, type, record) {
    var url = this.urlPrefix()+'/courses/'+record.get('course_id')+'/modules/'+record.get('id');
    return this.ajax(url, "DELETE");
  },

  findQuery: function(store, type, query){
    var url = this.urlPrefix()+'/courses/'+query.course_id+'/modules';
    delete query.course_id;
    return this.ajax(url, 'GET', { data: query });
  }
});

export default ModuleAdapter;

