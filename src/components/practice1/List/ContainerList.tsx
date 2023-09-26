import React from "react";
import "./container-list.css"

export type Data = {
    list: {
        id: number,
        title: string,
        description: string,
        lists: number[]
    }
}

export function ContainerList({list}: Data) {
    return (
        <>
            <div className="container">
                <li>{list.id}</li>
                <li>{list.title}</li>
                <li>{list.description}</li>
            </div>
        </>
    );
}

