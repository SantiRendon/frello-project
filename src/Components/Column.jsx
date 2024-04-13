import { Task } from "./Task";
import { Droppable } from "@hello-pangea/dnd";

export function Column({ column, tasks }) {
  return (
    <div className="m-2 border rounded-md max-w-[280px] break-words">
      <h3 className="text-2xl p-2">{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="text-xl p-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
