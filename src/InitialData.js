export const InitialData = {
    tasks: {
        "tarea-1": { id: "tarea-1", content: "Crear la lista de tareas" },
        "tarea-2": { id: "tarea-2", content: "Crear Componentes" },
        "tarea-3": { id: "tarea-3", content: "Seleccionar paleta de colores" },
        "tarea-4": { id: "tarea-4", content: "Implementar Funcionalidades" },
    },
    columns: {
        "columna-1": {
            id: "columna-1",
            title: "Tareas pendientes",
            tasksIds: ["tarea-1", "tarea-2", "tarea-3"]
        },
    },
    orderColumns: ["columna-1"]
}