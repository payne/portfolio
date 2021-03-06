import {
  formatPercentage
} from 'portfolio/helpers/format-percentage';

module('FormatPercentageHelper');

test('it formats percentages correctly', function() {
  equal(formatPercentage(0.42), '42%', ".42 is converted into 42%");
  equal(formatPercentage(0.420), '42%', ".420 is converted into 42%");
  equal(formatPercentage(0.421), '42.1%', ".421 is converted into 42.1%");
  equal(formatPercentage(0.4204), '42%', ".4204 is converted into 42%");
  equal(formatPercentage(0.4215), '42.2%', ".4215 is converted into 42.2%");
  equal(formatPercentage(0.999999), '100%', ".999999 is converted into 42.1%");
});
