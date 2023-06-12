import { recordFetcher, fetcher } from './fetcher';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'mocked data' }),
  }),
) as jest.Mock;

describe('recordFetcher', () => {
  it('shoudl retern correct response', async () => {
    expect(await recordFetcher('users', 'diab', 10, 30)).toEqual({
      data: 'mocked data',
    });
  });

  it('shoudl retern correct response without sendin per page param', async () => {
    expect(await recordFetcher('users', 'diab', 10)).toEqual({
      data: 'mocked data',
    });
  });
});

describe('recordFetcher', () => {
  it('shoudl retern correct response', async () => {
    expect(await fetcher('users')).toEqual({
      data: 'mocked data',
    });
  });
});
