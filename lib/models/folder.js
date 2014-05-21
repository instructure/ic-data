import { Model, attr, belongsTo, hasMany } from 'ember-data';
import { copy } from 'ember';

var Folder = Model.extend({

  parentFolder: belongsTo('folder'),

  folders: hasMany('folder', { inverse: 'parentFolder' }),

  files: hasMany('file'),

  context_type: attr('string'),

  context_id: attr('number'),

  files_count: attr('number'),

  position: attr('number'),

  folders_url: attr('string'),

  files_url: attr('string'),

  full_name: attr('string'),



  folders_count: attr('number'),

  name: attr('string'),

  created_at: attr('date'),

  updated_at: attr('date'),

  lock_at: attr('date'),

  unlock_at: attr('date'),

  hidden: attr('boolean'),

  hidden_for_user: attr('boolean'),

  locked: attr('boolean'),

  locked_for_user: attr('boolean'),

});

export default Folder;

