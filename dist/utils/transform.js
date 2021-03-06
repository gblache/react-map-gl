'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
exports.mod = mod;
exports.unprojectFromTransform = unprojectFromTransform;
exports.cloneTransform = cloneTransform;

var _transform = require('mapbox-gl/js/geo/transform');

var _transform2 = _interopRequireDefault(_transform);

var _mapboxGl = require('mapbox-gl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _transform2.default; // Copyright (c) 2015 Uber Technologies, Inc.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// NOTE: Transform is not a public API so we should be careful to always lock
// down mapbox-gl to a specific major, minor, and patch version.

function mod(value, divisor) {
  var modulus = value % divisor;
  return modulus < 0 ? divisor + modulus : modulus;
}

function unprojectFromTransform(transform, point) {
  return transform.pointLocation(_mapboxGl.Point.convert(point));
}

function cloneTransform(original) {
  var transform = new _transform2.default(original._minZoom, original._maxZoom);
  transform.latRange = original.latRange;
  transform.width = original.width;
  transform.height = original.height;
  transform.zoom = original.zoom;
  transform.center = original.center;
  transform.angle = original.angle;
  transform.altitude = original.altitude;
  transform.pitch = original.pitch;
  transform.bearing = original.bearing;
  transform.altitude = original.altitude;
  return transform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy90cmFuc2Zvcm0uanMiXSwibmFtZXMiOlsibW9kIiwidW5wcm9qZWN0RnJvbVRyYW5zZm9ybSIsImNsb25lVHJhbnNmb3JtIiwiZGVmYXVsdCIsInZhbHVlIiwiZGl2aXNvciIsIm1vZHVsdXMiLCJ0cmFuc2Zvcm0iLCJwb2ludCIsInBvaW50TG9jYXRpb24iLCJjb252ZXJ0Iiwib3JpZ2luYWwiLCJfbWluWm9vbSIsIl9tYXhab29tIiwibGF0UmFuZ2UiLCJ3aWR0aCIsImhlaWdodCIsInpvb20iLCJjZW50ZXIiLCJhbmdsZSIsImFsdGl0dWRlIiwicGl0Y2giLCJiZWFyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7UUEyQmdCQSxHLEdBQUFBLEc7UUFLQUMsc0IsR0FBQUEsc0I7UUFJQUMsYyxHQUFBQSxjOztBQWRoQjs7OztBQUdBOzs7O1FBRnFCQyxPLHdCQXZCckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFNTyxTQUFTSCxHQUFULENBQWFJLEtBQWIsRUFBb0JDLE9BQXBCLEVBQTZCO0FBQ2xDLE1BQU1DLFVBQVVGLFFBQVFDLE9BQXhCO0FBQ0EsU0FBT0MsVUFBVSxDQUFWLEdBQWNELFVBQVVDLE9BQXhCLEdBQWtDQSxPQUF6QztBQUNEOztBQUVNLFNBQVNMLHNCQUFULENBQWdDTSxTQUFoQyxFQUEyQ0MsS0FBM0MsRUFBa0Q7QUFDdkQsU0FBT0QsVUFBVUUsYUFBVixDQUF3QixnQkFBTUMsT0FBTixDQUFjRixLQUFkLENBQXhCLENBQVA7QUFDRDs7QUFFTSxTQUFTTixjQUFULENBQXdCUyxRQUF4QixFQUFrQztBQUN2QyxNQUFNSixZQUFZLHdCQUFjSSxTQUFTQyxRQUF2QixFQUFpQ0QsU0FBU0UsUUFBMUMsQ0FBbEI7QUFDQU4sWUFBVU8sUUFBVixHQUFxQkgsU0FBU0csUUFBOUI7QUFDQVAsWUFBVVEsS0FBVixHQUFrQkosU0FBU0ksS0FBM0I7QUFDQVIsWUFBVVMsTUFBVixHQUFtQkwsU0FBU0ssTUFBNUI7QUFDQVQsWUFBVVUsSUFBVixHQUFpQk4sU0FBU00sSUFBMUI7QUFDQVYsWUFBVVcsTUFBVixHQUFtQlAsU0FBU08sTUFBNUI7QUFDQVgsWUFBVVksS0FBVixHQUFrQlIsU0FBU1EsS0FBM0I7QUFDQVosWUFBVWEsUUFBVixHQUFxQlQsU0FBU1MsUUFBOUI7QUFDQWIsWUFBVWMsS0FBVixHQUFrQlYsU0FBU1UsS0FBM0I7QUFDQWQsWUFBVWUsT0FBVixHQUFvQlgsU0FBU1csT0FBN0I7QUFDQWYsWUFBVWEsUUFBVixHQUFxQlQsU0FBU1MsUUFBOUI7QUFDQSxTQUFPYixTQUFQO0FBQ0QiLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE1IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG5cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gTk9URTogVHJhbnNmb3JtIGlzIG5vdCBhIHB1YmxpYyBBUEkgc28gd2Ugc2hvdWxkIGJlIGNhcmVmdWwgdG8gYWx3YXlzIGxvY2tcbi8vIGRvd24gbWFwYm94LWdsIHRvIGEgc3BlY2lmaWMgbWFqb3IsIG1pbm9yLCBhbmQgcGF0Y2ggdmVyc2lvbi5cbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnbWFwYm94LWdsL2pzL2dlby90cmFuc2Zvcm0nO1xuZXhwb3J0IHtUcmFuc2Zvcm0gYXMgZGVmYXVsdH07XG5cbmltcG9ydCB7UG9pbnR9IGZyb20gJ21hcGJveC1nbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2QodmFsdWUsIGRpdmlzb3IpIHtcbiAgY29uc3QgbW9kdWx1cyA9IHZhbHVlICUgZGl2aXNvcjtcbiAgcmV0dXJuIG1vZHVsdXMgPCAwID8gZGl2aXNvciArIG1vZHVsdXMgOiBtb2R1bHVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5wcm9qZWN0RnJvbVRyYW5zZm9ybSh0cmFuc2Zvcm0sIHBvaW50KSB7XG4gIHJldHVybiB0cmFuc2Zvcm0ucG9pbnRMb2NhdGlvbihQb2ludC5jb252ZXJ0KHBvaW50KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVRyYW5zZm9ybShvcmlnaW5hbCkge1xuICBjb25zdCB0cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKG9yaWdpbmFsLl9taW5ab29tLCBvcmlnaW5hbC5fbWF4Wm9vbSk7XG4gIHRyYW5zZm9ybS5sYXRSYW5nZSA9IG9yaWdpbmFsLmxhdFJhbmdlO1xuICB0cmFuc2Zvcm0ud2lkdGggPSBvcmlnaW5hbC53aWR0aDtcbiAgdHJhbnNmb3JtLmhlaWdodCA9IG9yaWdpbmFsLmhlaWdodDtcbiAgdHJhbnNmb3JtLnpvb20gPSBvcmlnaW5hbC56b29tO1xuICB0cmFuc2Zvcm0uY2VudGVyID0gb3JpZ2luYWwuY2VudGVyO1xuICB0cmFuc2Zvcm0uYW5nbGUgPSBvcmlnaW5hbC5hbmdsZTtcbiAgdHJhbnNmb3JtLmFsdGl0dWRlID0gb3JpZ2luYWwuYWx0aXR1ZGU7XG4gIHRyYW5zZm9ybS5waXRjaCA9IG9yaWdpbmFsLnBpdGNoO1xuICB0cmFuc2Zvcm0uYmVhcmluZyA9IG9yaWdpbmFsLmJlYXJpbmc7XG4gIHRyYW5zZm9ybS5hbHRpdHVkZSA9IG9yaWdpbmFsLmFsdGl0dWRlO1xuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuIl19