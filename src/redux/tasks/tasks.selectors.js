import { createSelector } from "reselect";
import { formatDate } from "../../utils/formatDate";
import getMonth from "../../utils/getMonth";
import { getNextDay } from "../../utils/getNextDay";
import getYear from "../../utils/getYear";

const selectTasks = (state) => state.allTasks;

//select all tasks
export const selectAllTasks = createSelector(
  [selectTasks],
  (tasks) => tasks.allTasks
);
//select loading state
export const selectLoadingState = createSelector(
  [selectTasks],
  (tasks) => tasks.loading
);

// select error state
export const selectErrorState = createSelector(
  [selectTasks],
  (tasks) => tasks.errorMessage.message
);
//select completed tasks
export const selectCompletedTasks = createSelector(
  [selectAllTasks],
  (tasks) => {
    console.log(tasks);
    return tasks?.filter((task) => task.status === "completed");
  }
);

//select inprogress tasks
export const selectPendingTasks = createSelector([selectAllTasks], (tasks) =>
  tasks?.filter((task) => task.status === "inprogress")
);

//select select tasks marked to complete today
export const selectTodayTasks = createSelector([selectAllTasks], (tasks) => {
  const today = formatDate();
  console.log(today, "today");
  return tasks?.filter((task) => task.date === today);
});

//select tasks marked to complete tomorow
export const selectTomorowTasks = createSelector([selectAllTasks], (tasks) => {
  const tomorw = formatDate(getNextDay());
  console.log(tomorw, "tomorow");
  return tasks?.filter((task) => task.date === tomorw);
});

// select this month tasks
export const selectThisMonthTasks = createSelector(
  [selectAllTasks],
  (tasks) => {
    const currentmonth = getMonth();
    const currentyear = getYear();

    return tasks?.filter(
      (task) =>
        getMonth(task.date) === currentmonth &&
        getYear(task.date) === currentyear
    );
  }
);

//select by importance level -normal
export const selectNormaltasks = createSelector([selectAllTasks], (tasks) =>
  tasks.filter((task) => task.importance === "Normal")
);
//select by importance level -low
export const selectLowTasks = createSelector([selectAllTasks], (tasks) =>
  tasks.filter((task) => task.importance === "Low")
);
//select by importance level -important
export const selectImportantTasks = createSelector([selectAllTasks], (tasks) =>
  tasks.filter((task) => task.importance === "Important")
);
//select by importance level -critical
export const selectCriticalTasks = createSelector([selectAllTasks], (tasks) =>
  tasks.filter((task) => task.importance === "Critical")
);

// count completed tasks
export const countTasks = (taskType) =>
  createSelector([taskType], (tasks) => tasks.length);
