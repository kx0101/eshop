import bcrypt from "bcrypt";

export const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Liakos Koulaxis",
    email: "liakos.koulaxis@yahoo.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Takis",
    email: "takis@yahoo.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
