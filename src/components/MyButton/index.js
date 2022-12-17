import React from "react";
import { Botao, BotaoTexto } from "./styles";

export const MyButton = (props) => {
    return (
        <Botao onPress={props.onPress} >
            <BotaoTexto>{props.myText}</BotaoTexto>
        </Botao>
    )
}