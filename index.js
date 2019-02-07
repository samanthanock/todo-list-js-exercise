function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(
        `${this.title} has${this.complete ? ' ' : ' not'} been completed`
      );
    },

    markCompleted: function() {
      this.complete = true;
    }
  };

  return task;
}

function logTaskState(task) {
  console.log(
    `${task.title} has${task.complete ? ' ' : ' not '} been completed`
  );
}
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}

const task1 = newTask(
  'Clean cat litter',
  'take all of the poo out of the litter box'
);
const taske2 = newTask('Do laundry');
const tasks = [task1, taske2];

// task1.logState();
// task1.markCompleted();
// task1.logState();

task1.title;
task1.markCompleted();

// logTaskState(task1);
// completeTask(task1);
// logTaskState(task1);

// console.log(tasks);

// Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? ' ' : ' not '}been completed`);
// }

// DRIVER CODE BELOW

// newTask('Clean Cat Litter'); // task 0
// newTask('Do Laundry'); // task 1

// logTaskState(); // Clean Cat Litter has not been completed
// completeTask();
// logTaskState(); // Clean Cat Litter has been completed
