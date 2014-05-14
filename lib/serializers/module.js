import BaseSerializer from './base';

var ModuleSerializer = BaseSerializer.extend({
  normalizePayload: function(primaryType, payload) {
    if (Array.isArray(payload)) {
      return { modules: payload };
    } else {
      return { module: payload };
    }
  }

});

export default ModuleSerializer;

