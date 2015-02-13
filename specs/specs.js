describe('triangle_identifier', function() {
  it('Returns 0 if input is "0"', function() {
    expect(binary('0')).to.equal(0);
  });
  it('Returns 1 if input is "1"', function() {
    expect(binary('1')).to.equal(1);
  });
  it('Returns 10 if input is "2"', function() {
    expect(binary('2')).to.equal(10);
  });
  it('Returns 11 if input is "3"', function() {
    expect(binary('3')).to.equal(11);
  });
  it('Returns 111110100 if input is "500"', function() {
    expect(binary('500')).to.equal(111110100);
  });
});
