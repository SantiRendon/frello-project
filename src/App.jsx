import "./App.css";
import { InitialData } from "./InitialData";
import { Column } from "./Components/Column";
import { DragDropContext } from "@hello-pangea/dnd";
import { useState } from "react";

function App() {
  const [data, setData] = useState(InitialData);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    
    const column = data.columns[source.droppableId];
    const newTaskIds = Array.from(column.tasksIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      tasksIds: newTaskIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };

    setData(newData);
  };

  return (
    <>
      <div className="flex">
        <DragDropContext onDragEnd={handleDragEnd}>
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
