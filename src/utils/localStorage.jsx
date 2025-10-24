const employees = [
  {
    id: 1,
    name: "Aarav Mehta",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Compile and summarize sales and expenses for the month.",
        taskDate: "2025-10-22",
        category: "Reporting"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Participate in the weekly project meeting with the team.",
        taskDate: "2025-10-15",
        category: "Meeting"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Follow-up",
        taskDescription: "Failed to contact client for project feedback.",
        taskDate: "2025-10-18",
        category: "Communication"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update Inventory List",
        taskDescription: "Check stock availability and update records in system.",
        taskDate: "2025-10-21",
        category: "Inventory"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Presentation Slides",
        taskDescription: "Design slides for upcoming client pitch.",
        taskDate: "2025-10-24",
        category: "Design"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Backup company database to secure cloud storage.",
        taskDate: "2025-10-19",
        category: "Maintenance"
      },
      {
        taskNumber: 4,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Marketing Campaign",
        taskDescription: "Email delivery failed due to invalid recipient list.",
        taskDate: "2025-10-16",
        category: "Marketing"
      }
    ]
  },
  {
    id: 3,
    name: "Rohan Verma",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Software Bug Fix",
        taskDescription: "Resolve login authentication issue reported by QA.",
        taskDate: "2025-10-20",
        category: "Development"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Reviewed PRs for the latest frontend updates.",
        taskDate: "2025-10-18",
        category: "Code Review"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Migration",
        taskDescription: "Migration delayed due to network failure.",
        taskDate: "2025-10-19",
        category: "Infrastructure"
      },
      {
        taskNumber: 4,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Dark Mode",
        taskDescription: "Implement dark theme toggle in user dashboard.",
        taskDate: "2025-10-25",
        category: "UI Enhancement"
      },
      {
        taskNumber: 5,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Tested REST APIs for new employee endpoints.",
        taskDate: "2025-10-17",
        category: "Testing"
      }
    ]
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Plan Social Media Strategy",
        taskDescription: "Outline content strategy for the next marketing campaign.",
        taskDate: "2025-10-21",
        category: "Marketing"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Poster",
        taskDescription: "Create promotional poster for upcoming product launch.",
        taskDate: "2025-10-22",
        category: "Design"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Upload Blog Post",
        taskDescription: "Published new blog on company website.",
        taskDate: "2025-10-19",
        category: "Content"
      }
    ]
  },
  {
    id: 5,
    name: "Rahul Nair",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Onboard New Interns",
        taskDescription: "Guide new interns through workflow and tools.",
        taskDate: "2025-10-20",
        category: "HR"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Payroll Processing",
        taskDescription: "Completed salary disbursement for this month.",
        taskDate: "2025-10-15",
        category: "Finance"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Vendor Payment",
        taskDescription: "Payment delayed due to missing invoice verification.",
        taskDate: "2025-10-17",
        category: "Accounts"
      },
      {
        taskNumber: 4,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Performance Review",
        taskDescription: "Prepare reports for quarterly performance review.",
        taskDate: "2025-10-25",
        category: "HR"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Admin Manager",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
setLocalStorage()
export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees")) || [];
  const adminData = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees: employeesData, admin: adminData };
};
