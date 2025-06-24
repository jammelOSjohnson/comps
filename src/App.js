import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "khdhkidf",
      label: "Can i User React on a project?",
      content: "You can use React in any project.",
    },
    {
      id: "lifdfdn",
      label: "Can i User React on a project?",
      content: "You can use React in any project.",
    },
    {
      id: "gflg",
      label: "Can i User React on a project?",
      content: "You can use React in any project.",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
