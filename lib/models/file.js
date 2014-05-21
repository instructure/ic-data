import { belongsTo, Model, attr } from 'ember-data';

var File = Model.extend({

  folder: belongsTo('folder'),

  size: attr('number'),

  'content-type': attr('number'),

  url: attr('string'),

  display_name: attr('string'),

  created_at: attr('date'),

  updated_at: attr('date'),

  lock_at: attr('date'),

  unlock_at: attr('date'),

  hidden: attr('boolean'),

  hidden_for_user: attr('boolean'),

  locked: attr('boolean'),

  locked_for_user: attr('boolean'),

  lock_info: attr('string'),

  lock_explanation: attr('string'),

  thumbnail_url: attr('string')


});
export default File;

