import React, { useContext } from "react";
import { Background, Container, Title, ViewProduct, CardProduct, TextProduct, ViewButton, TouchableOpacityx, ContainerBrabo, Container2 } from "./styles"
import { MyButton } from "../../components/MyButton"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from 'react';
import { Api } from "../../services";
import { Ionicons } from "@expo/vector-icons";
import { IdContext } from "../../context/index.js";

export const ListaProducts = () => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const { setId } = useContext(IdContext)

    const obterProducts = () => {
        Api.get("/products")
            .then(response => {
                setProducts([...response.data]);
            })
            .catch(error => alert(error));
    };

    const deleteItem = (id) => {
        Api.delete(`/products/${id}`)
            .then(() => {
                alert("Produto deletado!");
                navigation.navigate("ListaProducts");
            });
    };

    useEffect(() => {
        obterProducts();
    }, []);

    return (

        <Container2>
            <Background />

            <Container>

                <Title>LISTA DE PRODUTOS</Title>

                <ViewProduct>
                    {products.map(product => (
                        <CardProduct key={product.id}>

                            <ContainerBrabo>
                                <TouchableOpacityx onPress={() => deleteItem(product.id)}>
                                    <Ionicons name="trash-outline"></Ionicons>
                                </TouchableOpacityx>
                                <TouchableOpacityx onPress={() => editarItem(product.id)}>
                                    <Ionicons name="build-outline"></Ionicons>
                                </TouchableOpacityx>
                            </ContainerBrabo>

                            <TextProduct>
                                {product.title}
                            </TextProduct>
                            <TextProduct>
                                {product.price}
                            </TextProduct>
                            <TextProduct>
                                {product.description}
                            </TextProduct>
                            <TextProduct>
                                {product.category}
                            </TextProduct>
                        </CardProduct>
                    ))}

                    <ViewButton>
                        <MyButton
                            onPress={() => navigation.navigate("Home")}
                            myText={"VOLTAR"}
                        />
                    </ViewButton>
                </ViewProduct>
            </Container>
        </Container2>
    )
};
