const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Create a detailed report of the monthly sales.",
        taskDate: "2024-10-01",
        category: "Sales"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements with the new client.",
        taskDate: "2024-09-25",
        category: "Meetings"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Submit Project Proposal",
        taskDescription: "Submit proposal for the upcoming project.",
        taskDate: "2024-09-28",
        category: "Projects"
      }
    ]
  },
  {
    id: 2,
    firstName: "Fatima",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Inventory",
        taskDescription: "Ensure all items are correctly listed in the system.",
        taskDate: "2024-10-03",
        category: "Inventory"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Customer Follow-up",
        taskDescription: "Follow up with pending customer inquiries.",
        taskDate: "2024-09-27",
        category: "Customer Service"
      }
    ]
  },
  {
    id: 3,
    firstName: "Omar",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop Website Features",
        taskDescription: "Implement new features for the company website.",
        taskDate: "2024-10-05",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review code submitted by junior developers.",
        taskDate: "2024-09-30",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update Documentation",
        taskDescription: "Ensure all project documentation is up to date.",
        taskDate: "2024-09-29",
        category: "Documentation"
      }
    ]
  },
  {
    id: 4,
    firstName: "Ayesha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct Market Research",
        taskDescription: "Research market trends and customer preferences.",
        taskDate: "2024-10-04",
        category: "Marketing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Marketing Campaign",
        taskDescription: "Develop a marketing campaign for the new product launch.",
        taskDate: "2024-10-10",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Finalize Advertising Budget",
        taskDescription: "Create a budget for the advertising campaign.",
        taskDate: "2024-09-28",
        category: "Finance"
      }
    ]
  },
  {
    id: 5,
    firstName: "Hassan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Plan Team Building Event",
        taskDescription: "Organize a team-building event for the department.",
        taskDate: "2024-10-12",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Conduct Performance Reviews",
        taskDescription: "Evaluate employee performance for the year.",
        taskDate: "2024-09-20",
        category: "HR"
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    firstName: "Aisha",
    email: "admin@example.com",
    password: "123"
  }
];


  export const setLocalStorage = () =>{
    localStorage.setItem('employess', JSON.stringify(employees));
    localStorage.setItem('Admin', JSON.stringify(admin));
  } 
  export const getLocalStorage = () => {
    const employeeData = JSON.parse(localStorage.getItem('employess', employees));
    const adminData = JSON.parse(localStorage.getItem('Admin', admin));
     return {employeeData, adminData}
  } 
