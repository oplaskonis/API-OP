const axios = require("axios");

test("full list of posts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  expect(response.status).toBe(200);
  expect(response.data.length).toBeGreaterThan(0);
});

test("post 1", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty("id", 1);
  expect(response.data).toHaveProperty("title");
  expect(response.data).toHaveProperty("body");
});

test("new post", async () => {
  const newPost = {
    title: "Olena",
    body: "Olena is a good student",
    userId: 1,
  };
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  expect(response.status).toBe(201);
  expect(response.data).toHaveProperty("id");
  expect(response.data).toHaveProperty("title", "Olena");
  expect(response.data).toHaveProperty("body", "Olena is a good student");
  expect(response.data).toHaveProperty("userId", 1);
});

test("comments for post 1", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments",
    { params: { postId: 1 } }
  );
  expect(response.status).toBe(200);
  expect(response.data.length).toBeGreaterThan(0);
});

test("new comment", async () => {
  const newComment = {
    name: "Olena",
    email: "Olena@ex.com",
    body: "Olena is a very good student",
    postId: 1,
  };
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/comments",
    newComment
  );
  expect(response.status).toBe(201);
  expect(response.data).toHaveProperty("id");
  expect(response.data).toHaveProperty("name", "Olena");
  expect(response.data).toHaveProperty("email", "Olena@ex.com");
  expect(response.data).toHaveProperty("body", "Olena is a very good student");
  expect(response.data).toHaveProperty("postId", 1);
});
