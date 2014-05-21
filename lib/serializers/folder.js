import BaseSerializer from './base';

var FolderSerializer = BaseSerializer.extend({
  extractDeleteRecord: function(store, type, payload) {
    // payload is {delete: true} and then ember data wants to go ahead and set
    // the new properties, return null so it doesn't try to do that
    return null;
  },
  normalize: function(type, hash, prop){
    hash.links = hash.links || {};
    var url = hash.folders_url;
    url = url.replace("https://localhost", "http://localhost:8080");
    hash.links.folders = url;
    delete hash.folders_url;
    return this._super(type, hash, prop);
  }

});

export default FolderSerializer;

