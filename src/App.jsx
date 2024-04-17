import "./App.css";
import { InitialData } from "./InitialData";
import { Column } from "./Components/Column";
import { DragDropContext } from "@hello-pangea/dnd";
import { useState } from "react";

function App() {
  const [data, setData] = useState(InitialData);

  const handleDragEnd = (result) => {
    // Extracting necessary information from the result
    const { destination, source, draggableId } = result;

    // If there's no destination, exit early
    if (!destination) return;

    // If the item is dropped in the same position, do nothing
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    // Get the column where the task originally belonged
    const column = data.columns[source.droppableId];

    // Clone the array of task IDs from the original column
    const newTaskIds = Array.from(column.tasksIds);

    // Remove the ID of the dragged task from its original position
    newTaskIds.splice(source.index, 1);

    // Insert the ID of the dragged task into its new position
    newTaskIds.splice(destination.index, 0, draggableId);

    // Create a new column object with the updated task IDs
    const newColumn = {
      ...column,
      tasksIds: newTaskIds,
    };

    // Create a new data object with the updated column
    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };

    // Update the state with the new data
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
