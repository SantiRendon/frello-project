import "./App.css";
import { InitialData } from "./InitialData";
import { Column } from "./Components/Column";
import { DragDropContext } from "@hello-pangea/dnd";
import { useState } from "react";

function App() {
  const [data, setData] = useState(InitialData);

  return (
    <>
      <div className="flex">
        <DragDropContext>
          {data.orderColumns.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.tasksIds.map((taskId) => data.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
      </div>
    </>
  );
}

export default App;
