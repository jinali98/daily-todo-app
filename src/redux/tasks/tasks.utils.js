export const markCompleted = (allTasks, itemToComplete) => {
  return allTasks?.map((each) => {
    if (each.id === itemToComplete.id) {
      const status = each.status === "inprogress" ? "completed" : "inprogress";
      return {
        ...itemToComplete,
        status: status,
      };
    }

    return each;
  });
};

export const removeTask = (allTasks, taskToRemove) => {
  return allTasks.filter((each) => each.id !== taskToRemove.id);
};
