import express, { Application } from "express";

const app: Application = express();

type UserType = {
  id: number;
  username: string;
  password: string;
};

const users: Array<UserType> = [
  {
    id: 1,
    username: "jiten",
    password: "jiten@123",
  },
  {
    id: 2,
    username: "Rajesh",
    password: "rajesh@123",
  },
  {
    id: 3,
    username: "Chiru",
    password: "chiru@123",
  },
];

app.get("/:id", (req, res) => {
  const userId = Number(req.params.id);
  // for (let index = 0; index < users.length; index++) {
  //   const element = users[index];
  //   if (element.id == userId) {
  //   }
  // }
  const found = users.find((user) => user.id == userId);
  res.json({ data: found });
});

app.listen(5001, () => {
  console.log("Server started on http://localhost:5001");
});
