import BaseAdapter from './adapters/base';
import BaseSerializer from './serializers/base';

import Course from './models/course';
import CourseAdapter from './adapters/course';
import CourseSerializer from './serializers/course';

import Module from './models/module';
import ModuleAdapter from './adapters/module';
import ModuleSerializer from './serializers/module';

import parseLinkHeader from './parse-link-header';

export {
  BaseAdapter,
  BaseSerializer,

  Course,
  CourseAdapter,
  CourseSerializer,

  Module,
  ModuleAdapter,
  ModuleSerializer,

  parseLinkHeader
};

