import BaseAdapter from './base';

var ModuleAdapter =  BaseAdapter.extend({
  createRecord: function(store, type, record) {
    var data = {};
    var serializer = store.serializerFor(type.typeKey);
    var url = this.urlPrefix()+'/courses/'+record.get('courseIdProperty')+'/modules';
    serializer.serializeIntoHash(data, type, record, { includeId: true });
    return this.ajax(url, "POST", { data: data });
  },

  deleteRecord: function(store, type, record) {
    var url = this.urlPrefix()+'/courses/'+record.get('courseIdProperty')+'/modules/'+record.get('id');
    return this.ajax(url, "DELETE");
  },

  findQuery: function(store, type, query){
    var url = this.urlPrefix()+'/courses/'+query.courseId+'/modules';
    var courseId = query.courseId;
    delete query.courseId;
    var params = {data: query};
    if (query.url){
      params = null;
      url = query.url;
      //TODO Makes this reasonable
      url = url.replace("https://localhost", "http://localhost:8080");
    }
    return this.ajax(url, 'GET', params).then( function(modules){
      modules.forEach( function(module){
        module.course_id = courseId;
      });
      return modules;
    });
  }
});

export default ModuleAdapter;

