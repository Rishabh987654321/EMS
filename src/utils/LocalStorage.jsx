const employees = [
  {
    id: 1,
    firstname: "Arjun",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Analyze Quarterly Sales Data",
        description: "Examine quarterly sales data to identify trends, performance metrics, and improvement areas.",
        task_date: "2024-12-18",
        category: "Tech",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Weekly Strategy Meeting",
        description: "Attend the team strategy meeting to provide updates, discuss challenges, and collaborate on refining project .",
        task_date: "2024-12-19",
        category: "Work",
        active: true,
        new_task: false,
        completed: false,
        failed: false,
      },
      {
        title: "Draft Website Design Layout",
        description: "Develop a responsive website layout with user-friendly navigation and modern aesthetics. Create wireframes and mockups for client review.",
        task_date: "2024-12-18",
        category: "Work",
        active: false,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Create YouTube Tutorial",
        description: "Record and upload a detailed tutorial on the latest product feature, including visuals and step-by-step guidance. Share the video to maximize audience reach.",
        task_date: "2024-12-18",
        category: "Work",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        title: "Client Presentation Preparation",
        description: "Prepare a client presentation with updates, performance metrics, and next steps. Align content with client objectives and test visuals for seamless delivery.",
        task_date: "2024-12-18",
        category: "Work",
        active: false,
        new_task: false,
        completed: false,
        failed: true,
      },
    ],
    taskStats: {
      active: 2,
      new_task: 5,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Year-End Performance Review",
        description: "Create a slide deck summarizing team achievements, challenges, and learnings. Highlight key milestones and visually present data to guide future planning.",
        task_date: "2024-12-18",
        category: "Work",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Compliance Document Review",
        description: "Review legal documents for adherence to company policies. Identify inconsistencies, summarize findings, and suggest updates to streamline compliance workflows.",
        task_date: "2024-12-19",
        category: "Work",
        active: false,
        new_task: false,
        completed: false,
        failed: true,
      },
    ],
    taskStats: {
      active: 1,
      new_task: 1,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 3,
    firstname: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Organize Archived Files",
        description: "Sort archived project files, create a structured folder system, and label documents for quick access. Back up files and maintain a detailed log.",
        task_date: "2024-12-18",
        category: "Admin",
        active: true,
        new_task: true,
        completed: true,
        failed: false,
      },
      {
        title: "Finalize Meeting Agenda",
        description: "Coordinate with stakeholders to finalize the meeting agenda, allocate time slots, and share it with participants, ensuring productive discussions.",
        task_date: "2024-12-19",
        category: "Work",
        active: true,
        new_task: false,
        completed: false,
        failed: false,
      },
    ],
    taskStats: {
      active: 2,
      new_task: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstname: "Anjali",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Gather Client Feedback",
        description: "Contact clients to gather feedback on services. Use surveys and calls to summarize insights and identify areas for improving satisfaction and retention.",
        task_date: "2024-12-18",
        category: "Work",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Software Upgrade Implementation",
        description: "Upgrade the project management software, test features, provide team training, and resolve issues to ensure compatibility with existing workflows.",
        task_date: "2024-12-19",
        category: "IT",
        active: true,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
    taskStats: {
      active: 2,
      new_task: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstname: "Sneha",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Product Logo",
        description: "Create a logo for the upcoming product launch. Experiment with colors, typography, and icons, and refine concepts based on feedback.",
        task_date: "2024-12-18",
        category: "Creative",
        active: true,
        new_task: true,
        completed: true,
        failed: false,
      },
      {
        title: "Promotional Blog Writing",
        description: "Write an SEO-optimized blog to promote the new product. Highlight features, benefits, and use cases while incorporating visuals for engagement.",
        task_date: "2024-12-19",
        category: "Creative",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
    taskStats: {
      active: 1,
      new_task: 1,
      completed: 2,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    firstname:"Rishabh",
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    // console.log(employees,admin); 

    return {employees,admin};
}
