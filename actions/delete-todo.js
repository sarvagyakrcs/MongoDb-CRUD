"use server";

async function deleteTodo(id) {
  try {
    await prisma.todo.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete todo");
  }
}
