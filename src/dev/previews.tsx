import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import {ConsoleComponent} from "../components/practice1/e1/ConsoleComponent.tsx";
import Console from "../components/practice1/E-1-Console/Console.tsx";
import App from "../App.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ConsoleComponent">
                <ConsoleComponent/>
            </ComponentPreview>
            <ComponentPreview path="/Console">
                <Console/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;