"use server"

async function readTodos() {
    try {
        return await prisma.todo.findMany();
    } catch (error) {
        console.error(error);
        throw new Error("Failed to read todos");
    }
}