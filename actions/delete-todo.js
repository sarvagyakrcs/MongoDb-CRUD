"use server";

import {prisma} from "@/lib/db"


export async function deleteTodo(id) {
  try {
    await prisma.todo.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete todo");
  }
}
