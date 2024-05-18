import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import axios from 'axios'

class ListaPost extends Component{
    state={
        listaNoticias: [],
        sinConexion: 0,
    }

    componentDidMount(){
        axios.get("http://localhost:8000/listanoticias")
        .then((response)=>{
            this.setState({listaNoticias:response.data})
        })
        .catch(function(error){
            this.setState({sinConexion: 1})
        })
    }
    render(){
        return(
        <View>
            {this.state.listaNoticias.map(item => {
                return <h3 key={item.id}>{item.titulo}</h3>
                })
            }
        </View>
        )
    }
}

export default ListaPost;

