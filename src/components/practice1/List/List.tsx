import {ContainerList} from "./ContainerList.tsx";

export function List() {
    const data = [
        {
            id: 0,
            title: "Mi primera tarea",
            description: "Descripción de mi primera tarea",
            lists: [11, 12, 13, 14, 15]
        },
        {
            id: 1,
            title: "Mi segunda tarea",
            description: "Descripción de mi segunda tarea",
            lists: [11, 12, 13, 14, 15]
        },
        {
            id: 2,
            title: "Mi tercera tarea",
            description: "Descripción de mi tercera tarea",
            lists: [11, 12, 13, 14, 15]
        }
    ]
    return (
        <>
            <ContainerList list={data[0]}/>
            <ContainerList list={data[1]}/>
            <ContainerList list={data[2]}/>
        </>
    );
}

