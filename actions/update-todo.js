"use server";

import {prisma} from "@/lib/db"


export async function updateTodo(id, completed) {
  try {
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { completed: !completed },
    });
    return updatedTodo
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update todo");
  }
}
