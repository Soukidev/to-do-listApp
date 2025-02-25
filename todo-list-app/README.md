# To-Do List Application

This is a simple To-Do List application built with React and Vite. It allows users to add, edit, delete, and mark tasks as completed. The application also implements form validation and uses browser storage to persist tasks between sessions.

## Features

- Add new tasks with name and description
- Edit existing tasks
- Mark tasks as completed or active
- Delete tasks with confirmation
- Form validation for adding/editing tasks
- Persistent storage using localStorage
- Responsive design using Tailwind CSS

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`
   npm run dev
   \`\`\`

4. Open your browser and navigate to \`http://localhost:5173\` to view the application.

## Build for Production

To build the application for production, run:

\`\`\`
npm run build
\`\`\`

This will create a \`dist\` folder with the production-ready files.

## Additional Considerations

- The application uses Tailwind CSS for styling. You can customize the styles by modifying the Tailwind configuration file (\`tailwind.config.js\`) and the CSS file (\`src/index.css\`).
- To add more features, such as filtering tasks or adding due dates, you can extend the existing components or create new ones as needed.
- For larger applications, consider implementing a state management solution like Redux or using React Context for more complex state management.

## License

This project is open source and available under the [MIT License](LICENSE).

Develop a To-Do List Application

Description: Create a simple To-Do List application using React that demonstrates various aspects of state management . The application should allow users to add, edit, delete, and mark tasks as completed. Additionally, implement form validation for adding/editing tasks and utilize browser storage to persist the tasks between sessions.

Deliverables:
A React application that fulfills the requirements outlined below. (check instructions)

Code should be well-structured, with separate components for different parts of the application (e.g., TaskList, TaskForm, TaskItem).
Include comments in the code to explain the purpose of each component and function.
Provide a brief README.md file explaining how to run the application locally and any additional information or considerations.

Instructions

Implement a form for adding new tasks. The form should include input fields for task name and description, and it should perform validation to ensure that both fields are filled before adding a task. 
Display the list of tasks with options to edit, delete, and mark tasks as completed. Completed tasks should be visually distinguished from active tasks.
Allow users to edit task details by clicking on the task. Implement a form pre-filled with task details that enables users to update task name and description.
Provide functionality to delete tasks from the list. Include a confirmation prompt before deleting a task.
Implement browser storage (localStorage or sessionStorage) to persist the tasks between sessions. Ensure that tasks are loaded from storage when the application initializes and saved to storage whenever there is a change in the task list.
Style the application using CSS to make it visually appealing and user-friendly. Use appropriate styling to highlight active and completed tasks.
Optional: Implement additional features such as filtering tasks based on completion status, sorting tasks by priority or due date, or adding due dates to tasks.