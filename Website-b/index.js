const express = require("express");
const app = express();
const port = 5174;
const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
  const response = await fetch("http://localhost:5173/event");
  const body = await response.text();

  console.log(body);
  res.json("web-b");
});

app.get("/trigger", async (req, res) => {
  try {
    const data = {
      secret: "123",
    };

    const response = await fetch("http://localhost:5173/event", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log(responseData);

    res.json("Webhook event triggered");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at on port ${port}`);
});