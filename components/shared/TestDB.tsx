"use client";

import { createUser } from "@/lib/actions/user.actions";
import React from "react";
import { Button } from "../ui/button";

async function createDBuser() {
  const user = {
    clerkId: "123",
    email: "3456789@qq.com",
    username: "123456",
    firstName: "shao",
    lastName: "xing",
    photo: "abc.jpg",
  };

  const newUser = await createUser(user);
}

const TestDB = () => {
  return <Button onClick={createDBuser}>Hello</Button>;
};

export default TestDB;
