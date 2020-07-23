import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('create an instance', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });

  it('use ...', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform('toto', 2);
    expect(result).toEqual('to...');
  });

  it('use not ...', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform('toto', 5);
    expect(result).toEqual('toto');
  });

  it('use works with undefined', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform((undefined as unknown) as string);
    expect(result).toBeUndefined();
  });
});
