'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { createTodo } from '@/actions/create-todo';
import { deleteTodo } from '@/actions/delete-todo';
import { readTodos } from '@/actions/read-todo';
import { updateTodo } from '@/actions/update-todo';
import toast from 'react-hot-toast';

export default function Home() {
  const { data: todos, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: readTodos,
  });

  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      refetch();
      toast.success('Todo created!');
    },
    onError: () => toast.error('Failed to create todo'),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, completed }) => updateTodo(id, completed),
    onSuccess: () => {
      refetch();
      toast.success('Todo updated!');
    },
    onError: () => toast.error('Failed to update todo'),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      refetch();
      toast.success('Todo deleted!');
    },
    onError: () => toast.error('Failed to delete todo'),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    if (!title) return;
    createMutation.mutate(title);
    e.target.reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            name="title"
            className="flex-1 border px-3 py-2"
            placeholder="Enter a new todo"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2"
          >
            Add
          </button>
        </div>
      </form>

      <ul className="space-y-2">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 border"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => updateMutation.mutate({ id: todo.id, completed: todo.completed })}
                className="h-5 w-5"
              />
              <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                {todo.title}
              </span>
            </div>
            <button
              onClick={() => deleteMutation.mutate(todo.id)}
              className="text-red-500"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}