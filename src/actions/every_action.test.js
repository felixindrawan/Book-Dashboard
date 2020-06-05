import { fetchData } from "./every_action";

const firstPromise = [];

test('onload promise', () => {
  return fetchData().then(data => {
    expect(data).toBe(firstPromise);
  });
});
