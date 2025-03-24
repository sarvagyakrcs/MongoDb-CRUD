"use server"

import prisma from "@/lib/db"

export async function createTodo(title) {
    try {
        const todo = await prisma.todo.create({
            data: {
                title
            }
        })
    
        return todo
    } catch (error) {
        console.error(error)
        throw new Error("Failed to create todo")
    }
}