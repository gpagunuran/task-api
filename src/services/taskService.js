import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(query = {}) {
  const filters = {};
  if (query.completed !== undefined) {
    filters.completed = query.completed === 'true';
  }
  return taskRepository.findAll(filters);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
