"use server";

async function updateTodo(id, completed) {
  try {
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { completed: !completed },
    });
    return updatedTodol
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update todo");
  }
}
