describe('triangle_identifier', function() {
  it('When side_c > (side_a + side_b) program returns not a triangle when it is not a triangle.', function() {
    expect(triangleIdentifier(2, 2, 5)).to.equal('These sides can not make a triangle.');
  });
  it('When side_b > (side_c + side_a) program returns not a triangle when it is not a triangle.', function() {
    expect(triangleIdentifier(2, 5, 2)).to.equal('These sides can not make a triangle.');
  });
  it('When side_a > (side_b + side_c) program returns not a triangle when it is not a triangle.', function() {
    expect(triangleIdentifier(5, 2, 2)).to.equal('These sides can not make a triangle.');
  });
  it('Correctly identifies when a triangle is scalene.', function() {
    expect(triangleIdentifier(2, 3, 4)).to.equal('This triangle is scalene.');
  });
  it('Correctly identifies when a triangle is equilateral.', function() {
    expect(triangleIdentifier(1, 1, 1)).to.equal('This triangle is equilateral.');
  });
  it('When side_a === side_b identifies when a triangle is isosceles.', function() {
    expect(triangleIdentifier(6,6,8)).to.equal('This triangle is isosceles.');
  });
  it('When side_b === side_c identifies when a triangle is isosceles.', function() {
    expect(triangleIdentifier(8,6,6)).to.equal('This triangle is isosceles.');
  });
  it('When side_c === side_a identifies when a triangle is isosceles.', function() {
    expect(triangleIdentifier(6,8,6)).to.equal('This triangle is isosceles.');
  });
});
