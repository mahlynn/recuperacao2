import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Gradient } from '../../components/Gradient';
import { Container, Title, Copyright, Background } from './styles';
import { MyButton } from '../../components/MyButton';
import { useNavigation } from "@react-navigation/native";

export const Gerenciar = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <Background />
            <Title>L O J A</Title>

            <MyButton
               onPress={() => navigation.navigate("Cadastro")}
                myText={"CADASTRAR PRODUTO"}
            />

            <MyButton
                onPress={() => navigation.navigate("Listar")}
                myText={"LISTAR PRODUTOS"}
            />

        </Container>
    );
}