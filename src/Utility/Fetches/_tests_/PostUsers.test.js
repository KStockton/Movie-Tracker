import { postUsers } from "../PostUsers";

describe("postUsers", () => {
  let mockUrl;
  let mockData = {
    data: {
      id: 142,
      name: "Max Silver",
      password: "Eastwreqwrest1@",
      email: "maxbsilver@gmail.comdsfa"
    },
    message: "Retrieved ONE User",
    status: "success"
  };
  const fetchConfig = (method, body) => ({
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  beforeEach(() => {
    mockUrl = "url";
    mockData = {
        id: 142,
        name: "Max Silver",
        password: "Eastwreqwrest1@",
        email: "maxbsilver@gmail.comdsfa"
      }
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    );
  });
  it("calls fetch with the correct params", () => {
    postUsers(mockUrl);
    expect(fetch).toHaveBeenCalledWith(
      `http://localhost:3000/api/${mockUrl}`,
      fetchConfig()
    );
  });
  it("should return data", async () => {
    const result = await postUsers(`http://localhost:3000/api/${mockUrl}`);
    expect(result).toEqual(mockData);
  });
  it('should throw an error if the response isnt valid', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      ok: false
    }))

    try {
      await postUsers(`http://localhost:3000/api/${mockUrl}`)
    } catch(error) {
      expect(error.message).toBe('response.json is not a function')
    }
  })
});
