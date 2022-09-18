const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

// app.get("/home", (req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.status(200).send("<h1> Hello, world! </h1>");
// })

// Buscar todos os usuários.
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  }
  catch (error) {
    return res.status(500).send(error.message);
  }
});

// Buscar usuário pelo ID.
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    
    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  }
  catch (error) {
    return res.status(500).send(error.message);
  }
});

// Atualizar usuário.
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  }
  catch (error) {
    res.status(500).send(error.message);
  }
});

// Deletar usuário.
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndDelete(id);

    res.status(200).json(user);
  }
  catch (error) {
    res.status(500).send(error.message);
  }
});

// app.get("/users", (req, res) => {
//   const users = [
//     {
//       name: "John Doe",
//       email: "john@doe.com",
//     },
//     {
//       name: "Jane Doe",
//       email: "jane@doe.com",
//     }
//   ];

//   res.status(200).json(users);
// });

// Criar usuário.
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  }
  catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Listening with Express at port ${port}!`));
