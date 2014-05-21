import { RESTAdapter } from 'ember-data';
import parseLinkHeader from '../parse-link-header';

import { String } from 'ember';
var pluralize = String.pluralize;
var camelize = String.camelize;

// we should use the one already in 'compiled/str/splitAssetString' in canvas
function splitAssetString(assetString) {
  var match = assetString.match(/(.*)_(\d+)$/)
  if (match){ return [pluralize(match[1]), match[2]] };
}

export default RESTAdapter.extend({
  namespace: 'api/v1',

  /**
    In the spirit of convention over configuration, if the base API route of
    your model follows canvas's default routing pattern of:
    /api/v1/<context_type>/<context_id>/<plural_form_of_resource_name> then
    you can just

    TODO: DOCUMENT WHAT TO DO HERE

    So, for example say you are on /courses/1/files/ and you do:
    store.find('file', 3)
    it will go to
    /api/v1/courses/1/files/3
    (since ENV.context_asset_string will be already set)
  **/
  pathForType: function(type /* would it make sense to pase assetString option here? */) {
    var assetString = this.contextAssetString || ENV.context_asset_string,
        urlParts = splitAssetString(assetString),
        camelized = pluralize(camelize(type));
    return urlParts.concat(camelized).join('/')
  },



  ajax: function(url, type, hash) {
    var adapter = this;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      hash = adapter.ajaxOptions(url, type, hash);

      hash.success = function(json, status, hxr) {
        json.meta = parseLinkHeader(hxr);
        Ember.run(null, resolve, json);
      };

      hash.error = function(jqXHR, textStatus, errorThrown) {
        Ember.run(null, reject, adapter.ajaxError(jqXHR));
      };

      Ember.$.ajax(hash);
    }, "DS: RestAdapter#ajax " + type + " to " + url);
  }
});

