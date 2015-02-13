var triangleIdentifier = function(side_a, side_b, side_c) {

  var triangle_identifier_result = ' '

  if (((side_a+side_b)<side_c) || ((side_b+side_c)<side_a) || ((side_c+side_a)<side_b)) {
    triangle_identifier_result = 'These sides can not make a triangle.';
  } else if ((side_a === side_b) && (side_b === side_c)){
    triangle_identifier_result = 'This triangle is equilateral.';
  } else if ((side_a === side_b) || (side_b === side_c) || (side_c === side_a)){
    triangle_identifier_result = 'This triangle is isosceles.';
  } else {
    triangle_identifier_result = 'This triangle is scalene.';
  }

  return triangle_identifier_result;

};

$(document).ready(function(event) {

});
