var binary = function(input_string) {
  var input_number = parseInt(input_string);
  var two_power = 0
  var binary_switch_array = [ ]
  var binary_output = 0

  if (input_number === 0) {
    return binary_output;
  } else {
    while ((Math.pow(2, two_power)) < input_number ) {
      two_power +=1
    }
    for (two_power; two_power >= 0; two_power--) {
      if (input_number >= (Math.pow(2, two_power))) {
        binary_switch_array.push(1);
        input_number -= (Math.pow(2, two_power));
      } else {
        binary_switch_array.push(0);
      }
    }
    binary_output = parseInt(binary_switch_array.join(''));
  }
  return binary_output;
};

$(document).ready(function(event) {
  $('form#number_input_form').submit(function(event) {
    var number_input = parseInt($('input#number_input').val());

    if ((!(/^\d*\.?\d*$/.test(number_input)))) {
      $('.output').text('Invalid Entry: Non numeric characters');
    } else {
      var binary_output_result = binary(number_input);
      $('.output').text(binary_output_result);
    }

    $('#result').show();
    event.preventDefault();

  });
});
