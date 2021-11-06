export const markCompleted = (allTasks, itemToComplete) => {
  return allTasks?.map((each) => {
    if (each.id === itemToComplete.id) {
      return { ...itemToComplete, status: "completed" };
    }

    return each;
  });
};

export const removeTask = (allTasks, taskToRemove) => {
  return allTasks.filter((each) => each.id !== taskToRemove.id);
};
