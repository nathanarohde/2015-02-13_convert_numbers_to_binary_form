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
  $('form#triangle_side_input_form').submit(function(event) {
    var side_a_input = parseFloat($('input#side_a_input').val());
    var side_b_input = parseFloat($('input#side_b_input').val());
    var side_c_input = parseFloat($('input#side_c_input').val());

    if ((!(/^\d*\.?\d*$/.test(side_a_input))) || (!(/^\d*\.?\d*$/.test(side_b_input))) || (!(/^\d*\.?\d*$/.test(side_c_input)))) {
      $('.output').text('Invalid Entry: Non numeric characters');
    } else {
      var triangle_identifier_output = triangleIdentifier(side_a_input,side_b_input,side_c_input);
      $('.output').text(triangle_identifier_output);
    }

    $('#result').show();
    event.preventDefault();

  });
});
