export const blogPosts = [
  {
    slug: "first-automation",
    coverSource: "https://unsplash.com/photos/a-robot-arm-works-in-a-factory-setting-nM71nHjH4Vk",
    category: "Automation",
    title: "How to choose your first automation",
    summary: "Pick one repeatable workflow with a clear owner, a visible cost, and a simple way to tell whether it worked.",
    sections: [
      {
        heading: "Start with a repeated task",
        body: "Write down what starts the workflow, who touches it, and what counts as done. Work that follows a predictable path, such as routing inbound inquiries, is easier to test than a process that changes with every request."
      },
      {
        heading: "Measure the current workflow",
        body: "Track how many requests arrive in a typical week, how long people spend on each one, and how often a handoff fails. Keep enough detail to compare results after the pilot."
      },
      {
        heading: "Test the handoff",
        body: "Run the new workflow on a small set of requests. Decide where people should review unusual cases, and give the team a way to stop or reverse the automation if it behaves unexpectedly."
      }
    ]
  },
  {
    slug: "ai-agent-vs-workflow",
    coverSource: "https://unsplash.com/photos/cable-network-M5tzZtFCOfs",
    category: "AI",
    title: "When to use an AI agent instead of a workflow",
    summary: "Use rules for predictable steps and reserve AI for parts of the job that require interpreting information.",
    sections: [
      {
        heading: "Write the rules down first",
        body: "If a request should always go to the account owner, express that rule directly. A workflow will be easier to test and troubleshoot when it has a known input and a single decision path."
      },
      {
        heading: "Identify the judgment call",
        body: "An agent can help when the system has to interpret a free-form message or find relevant information across several sources. Define what evidence it can use and when it needs to ask for a review."
      },
      {
        heading: "Combine the two",
        body: "An agent can suggest a category while a workflow applies the routing rules. That keeps ownership, escalation, and logging consistent even when the input is messy."
      }
    ]
  },
  {
    slug: "what-goes-into-an-mvp",
    coverSource: "https://unsplash.com/photos/a-wall-with-a-bunch-of-sticky-notes-on-it-fQOyF0D0cDU",
    category: "Product",
    title: "What belongs in the first version of an MVP?",
    summary: "Define one user journey worth testing and give users a complete way to finish it.",
    sections: [
      {
        heading: "Start with a product question",
        body: "Decide what you want to learn from early users. For example, will teams use a shared dashboard to review and approve requests? That is specific enough to shape the first release."
      },
      {
        heading: "Build one complete journey",
        body: "For the dashboard example, a user needs to enter a request, send it for review, and see the result. Custom themes and advanced reports can wait until feedback shows they matter."
      },
      {
        heading: "Plan how you will learn",
        body: "Watch where people stop, ask what they expected at that point, and capture what they try to do next. Use that evidence to update the scope for the next release."
      }
    ]
  },
  {
    slug: "chrome-extension-or-web-app",
    coverSource: "https://unsplash.com/photos/a-close-up-of-a-computer-screen-with-code-numbers-EWLHA4T-mso",
    category: "Product",
    title: "Chrome extension or web app?",
    summary: "Choose the interface based on where the work happens and what information users need in front of them.",
    sections: [
      {
        heading: "Follow the user’s current workflow",
        body: "A Chrome extension can help when someone repeatedly copies permitted details from a page they are viewing. A web app suits work that needs its own dashboard, history, and collaboration tools."
      },
      {
        heading: "Keep permissions focused",
        body: "For an extension, request access only to the sites and actions needed for the specific workflow. Explain what the extension reads and give users a clear way to trigger or confirm consequential actions."
      },
      {
        heading: "Link experiences where it helps",
        body: "A lightweight extension can collect a user-approved entry while a web app handles assignment, reporting, and administration. Keep each interface focused on the part it handles best."
      }
    ]
  },
  {
    slug: "writing-a-useful-prd",
    coverSource: "https://unsplash.com/photos/person-writing-bucket-list-on-book-RLw-UC03Gwc",
    category: "Process",
    title: "How to write a useful product requirements document",
    summary: "Give the team enough context to make decisions and enough detail to know when the first release is ready.",
    sections: [
      {
        heading: "Explain the user and the job",
        body: "Describe who has the problem, what they do today, and what changes if the project works. Include the constraints that matter, such as which systems the product needs to connect to."
      },
      {
        heading: "Make acceptance criteria observable",
        body: "Instead of asking for a simple approval system, write that a reviewer can approve or reject an assigned request and that the requester can see the decision and its timestamp."
      },
      {
        heading: "Record decisions as they change",
        body: "Keep unresolved questions visible and update the document when a decision changes the scope. The PRD should reflect what the team is building."
      }
    ]
  },
  {
    slug: "measure-after-launch",
    coverSource: "https://unsplash.com/photos/laptop-computer-on-glass-top-table-hpjSkU2UYSU",
    category: "Operations",
    title: "What to measure after launching an automation",
    summary: "Track completion, exceptions, and people’s experience to decide what to improve next.",
    sections: [
      {
        heading: "Choose a few measures tied to the goal",
        body: "If the goal is faster routing, track time to assignment and compare it with your manual baseline. If the goal is fewer missed requests, count unassigned cases and track where they disappear."
      },
      {
        heading: "Review exceptions with the people handling them",
        body: "Look at the cases the system sends to review. Ask whether escalation was appropriate and what information the reviewer needed to resolve the case."
      },
      {
        heading: "Turn findings into a backlog",
        body: "Group improvements by user impact and effort. After each change, review the same measures so you can see whether it solved the problem you set out to address."
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
