import { Draggable } from "@hello-pangea/dnd";

export function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="border p-2 mb-2 rounded-md active:bg-lime-600 active:text-black"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
}
