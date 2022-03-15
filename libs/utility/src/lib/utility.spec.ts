import { echo } from './utility';

describe('utility', () => {
  it('should work', async () => {
    expect(await echo('utility')).toEqual('utility');
  });
});
