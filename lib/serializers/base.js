import { RESTSerializer } from 'ember-data';

var BaseSerializer =  RESTSerializer.extend({
  normalizePayload: function(primaryType, payload){
    var data = {};
    if (Array.isArray(payload)) {
      data[primaryType.typeKey+'s'] = payload;
    } else {
      data[primaryType.typeKey] = payload;
    }
    return data;
  },

  extractMeta: function(store, type, payload){
    this._super(store, type, payload);
  }
});

export default BaseSerializer;

