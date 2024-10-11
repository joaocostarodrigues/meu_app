import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)

    if (!permissao) {
        return (
            <View></View>
        )
    }


    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textpermission}>Você precisa dar permissão para utilização da câmera</Text>
                <Button title='pedir permissao' onPress={pedirPermissao} />
            </View>
        )
    }
    const tirar = async()=>{
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        })
        setFoto(foto)
        console.log(foto)
    }

    return (
        <CameraView
            facing="front"
            style={styles.camera}
            ref={cameraRef}>
        </CameraView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textpermission: {
        textAlign: 'center'
    },
    camera: {
        flex: 1
    }
}) 