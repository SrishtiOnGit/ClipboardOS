import "./problem.css";

const Problem = () => {
  const problems = [
    {
      title: "Code Snippets",
      description: "Copied 3 days ago",
    },
    {
      title: "Links",
      description: "https://example.com",
    },
    {
      title: "AI Prompts",
      description: "Create a React Login Page...",
    },
    {
      title: "Notes",
      description: "Startup Ideas..",
    },
  ];
  return (
    <div className="problems">
      <h1>
        Your clipboard forgets. <span>ClipboardOS doesn't.</span>.
      </h1>
      <p className="description">
        Every day, we copy code snippets, AI prompts, links, commands, notes,
        and ideas. A few minutes later, they're gone forever. ClipboardOS turns
        your clipboard into a searchable knowledge base.
      </p>
      <div className="problem-container">
        {problems.map((problem, index) => (
          <div className="problem" key={index}>
            <h2>{problem.title}</h2>
            <p>{problem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problem;
