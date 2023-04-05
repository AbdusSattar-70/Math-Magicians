import operate from '../logic/operate';

describe('Check operate file', () => {
  it('should add two positive numbers together', () => {
    expect(operate(2, 3, '+')).toEqual('5');
  });

  it('should add two negative numbers together', () => {
    expect(operate(-2, -3, '+')).toEqual('-5');
  });

  it('should add a positive and a negative number together', () => {
    expect(operate(-2, 3, '+')).toEqual('1');
  });

  it('should subtract a positive number from a negative number', () => {
    expect(operate(-2, 3, '-')).toEqual('-5');
  });

  it('should subtract a negative number from a positive number', () => {
    expect(operate(3, -2, '-')).toEqual('5');
  });

  it('should multiply a positive number with a negative number', () => {
    expect(operate(-2, 3, 'x')).toEqual('-6');
  });

  it('should multiply a negative number with a negative number', () => {
    expect(operate(-2, -3, 'x')).toEqual('6');
  });

  it('should divide a positive number by a negative number', () => {
    expect(operate(6, -3, '÷')).toEqual('-2');
  });

  it('should divide a negative number by a positive number', () => {
    expect(operate(-6, 3, '÷')).toEqual('-2');
  });

  it('should handle division by a fractional number', () => {
    expect(operate(5, 0.5, '÷')).toEqual('10');
  });

  it('should find modulo of a positive number with a negative number', () => {
    expect(operate(7, -3, '%')).toEqual('1');
  });

  it('should find modulo of a negative number with a positive number', () => {
    expect(operate(-7, 3, '%')).toEqual('-1');
  });

  it('should handle modulo with dividend zero', () => {
    expect(operate(0, 3, '%')).toEqual('0');
  });

  it('should handle unknown operation', () => {
    expect(() => operate(2, 3, '$')).toThrow("Unknown operation '$'");
  });
});
