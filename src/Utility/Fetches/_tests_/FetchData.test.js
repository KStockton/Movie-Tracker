import { fetchData } from "../FetchData";

describe("fetchData", () => {
  let mockUrl;
  let mockData;
  beforeEach(() => {
    mockUrl = "www.url.com";
    mockData = {
      page: 1,
      total_results: 7684,
      results: []
    };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    );
  });
  it('calls fetch with the correct params', () => {
      fetchData(mockUrl)
      expect(fetch).toHaveBeenCalledWith(mockUrl)
  })
  it('should return data', async () => {
      const result = await fetchData(mockUrl);
      expect(result).toEqual(mockData)
  })

  it('should throw an error if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      ok: false
    }))

    try {
      await fetchData(mockUrl)
    } catch(error) {
      expect(error.message).toBe('Error retrieving data')
    }
  })
});
