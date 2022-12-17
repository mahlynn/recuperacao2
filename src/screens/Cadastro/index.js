import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Gradient } from '../../components/Gradient';
import { Container, Title } from './styles';
import { MyButton } from '../../components/MyButton';
import { MeuInput } from '../../components/MeuInput';
import { useNavigation } from "@react-navigation/native";
import { Api } from "../../services/index.js";

export const CadastroProduto = () => {

    const navigation = useNavigation();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    const cadastrar = () => {
        const data = {
            title: title,
            price: price,
            description: description,
            image: image,
            category: category,
        };

        Api.post("/products", data)
           .then((response) => {
            console.log(response);
           })
           .catch(err => console.log(err));  
    };
    
    return (
        <Container>
            <Title>C A D A S T R O</Title>

            <MeuInput
                onChange={(valor) => setTitle(valor)}
                placeholder={'Título'}
                autoCapitalize={"words"}
            />
            <MeuInput
                onChange={(valor) => setPrice(valor)}
                placeholder={'Preço'}
                autoCapitalize={"words"}
                placeholderTextColor={'gray'}
            />
            <MeuInput
                onChange={(valor) => setDescription(valor)}
                placeholder={'Descrição'}
                placeholderTextColor={'gray'}
                autoCapitalize={"words"}
            />
            <MeuInput
                onChange={(valor) => setImage(valor)}
                placeholder={'Foto'}
                placeholderTextColor={'gray'}
                autoCapitalize={"words"}
            />
            <MeuInput
                onChange={(valor) => setCategory(valor)}
                placeholder={'Categoria'}
                placeholderTextColor={'gray'}
                autoCapitalize={"words"}
            />

            <MyButton
                onPress={cadastrar}
                myText={"CADASTRAR"}
            />
            
            <StatusBar style="auto" />
            <MyButton
                onPress={() => navigation.navigate("Home")} 
                myText={"VOLTAR"}
            />
        </Container>
    );
}