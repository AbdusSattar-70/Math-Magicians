import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should handle AC button', () => {
    expect(calculate({ total: 5, next: 3, operation: '+' }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should handle number buttons', () => {
    expect(calculate({ total: 5, next: '3', operation: '+' }, '6')).toEqual({
      total: 5,
      next: '36',
      operation: '+',
    });
  });
  it('should handle decimal button', () => {
    expect(calculate({ total: 5, next: '3', operation: '+' }, '.')).toEqual({
      total: 5,
      next: '3.',
      operation: '+',
    });
  });
  it('should handle equals button', () => {
    expect(calculate({ total: 5, next: '3', operation: '+' }, '=')).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });
  it('should handle +/- button', () => {
    expect(calculate({ total: null, next: '5', operation: null }, '+/-')).toEqual({
      total: null,
      next: '-5',
      operation: null,
    });
  });
  it('should handle operation buttons', () => {
    expect(calculate({ total: 5, next: '3', operation: '+' }, '-')).toEqual({
      total: '8',
      next: null,
      operation: '-',
    });
  });
  it('should handle consecutive operation buttons', () => {
    expect(calculate({ total: 5, next: '3', operation: '+' }, '+')).toEqual({
      total: '8',
      next: null,
      operation: '+',
    });
    expect(calculate({ total: 5, next: '3', operation: '+' }, '*')).toEqual({
      total: '8',
      next: null,
      operation: '*',
    });
    expect(calculate({ total: 5, next: '3', operation: '+' }, '/')).toEqual({
      total: '8',
      next: null,
      operation: '/',
    });
  });
});
