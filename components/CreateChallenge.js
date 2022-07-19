import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import FloatingButton from './FloatingButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ColorChip = ({color1, color2, style, checked}) => {
    return (
        <LinearGradient 
            useAngle={true}
            angle={25}
            angleCenter={{x: 0.6, y: 0.5}}
            colors={[color1, color2]} 
            style={style==="circle" ? styles.circle : styles.colorchip}>
            {checked && <Icon name="check" size={29} color="#262626"/>}
        </LinearGradient>
    );
}

function CreateChallenge() {
    const [text, onChangeText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <Modal
                isVisible={modalVisible}
                useNativeDriver={true}
                backdropOpacity={0.4}
                onBackButtonPress={() => setModalVisible(false)}
                onBackdropPress={() => setModalVisible(false)}
            >
                <View style={styles.container}>
                    <FloatingButton 
                        icon="close"
                        size={47}
                        bottom={{bottom: 525}} 
                        onPress={() => setModalVisible(false)} 
                    />
                    <View style={styles.block}>
                        <View style={styles.header}>
                            <Text style={[styles.text]}>새로운</Text>
                            <Text style={[styles.text, {color:'#93B4F5'}]}> 챌린지</Text>
                            <Text style={[styles.text]}> 만들기!</Text>
                        </View>
                        <View style={styles.title}>
                            <View style={styles.row}>
                                <Text style={[styles.text, {fontSize:22}]}>이름</Text>
                                <Text style={[styles.subtext]}>챌린지의 이름 입력</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="이름을 입력하세요"
                                placeholderTextColor="#E6E6E6"
                            />
                        </View>
                        <View style={styles.days}>
                            <View style={styles.row}>
                                <Text style={[styles.text, {fontSize:22}]}>기간</Text>
                                <Text style={[styles.subtext]}>챌린지를 수행할 기간 선택</Text>
                            </View>
                            <View style={styles.row}>
                                <Pressable
                                    style={[styles.day_button, {backgroundColor:'#93B4F5'}]}
                                    android_ripple={{color:'#FAFAFA'}}
                                >
                                    <Text style={[styles.text, {color:'white', fontSize:18}]}>30일</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.day_button}
                                    android_ripple={{color:'#FAFAFA'}}
                                >
                                    <Text style={[styles.text, {fontSize:18}]}>100일</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.day_button}
                                    android_ripple={{color:'#FAFAFA'}}
                                >
                                    <Text style={[styles.text, {fontSize:18}]}>365일</Text>
                                </Pressable>
                            </View>
                            <TextInput
                                style={[styles.input, {paddingVertical: 2}]}
                                placeholder="자유롭게 입력 (1~365)"
                                placeholderTextColor="#E6E6E6"
                            />
                        </View>
                        <View style={styles.color}>
                            <View style={styles.row}>
                                <Text style={[styles.text, {fontSize:22}]}>색상</Text>
                                <Text style={[styles.subtext]}>챌린지의 색상 선택</Text>
                            </View>
                            <View style={[styles.row, {height: 110, justifyContent: 'center'}]}>
                                <View style={{flex: 0.4, justifyContent: 'center'}}>
                                    <ColorChip color1="#ff9a9e" color2="#fad0c4" style="circle" />
                                </View>
                                <View style={{flexDirection: 'column', flex:0.6, justifyContent: 'center'}}>
                                    <View style={[styles.row]}>
                                        <ColorChip color1="#ff9a9e" color2="#fad0c4" checked />
                                        <ColorChip color1="#ffecd2" color2="#fcb69f" />
                                        <ColorChip color1="#f6d365" color2="#fda085" />
                                        <ColorChip color1="#fbc2eb" color2="#a6c1ee" />
                                        <ColorChip color1="#f093fb" color2="#f5576c" />
                                    </View>
                                    <View style={[styles.row]}>
                                        <ColorChip color1="#a1c4fd" color2="#c2e9fb" />
                                        <ColorChip color1="#e0c3fc" color2="#8ec5fc" />
                                        <ColorChip color1="#84fab0" color2="#8fd3f4" />
                                        <ColorChip color1="#d4fc79" color2="#96e6a1" />
                                        <ColorChip color1="#96fbc4" color2="#f9f586" />
                                    </View>
                                    <View style={[styles.row]}>
                                        <ColorChip color1="#ebbba7" color2="#cfc7f8" />
                                        <ColorChip color1="#fff1eb" color2="#ace0f9" />
                                        <ColorChip color1="#e6e9f0" color2="#eef1f5" />
                                        <ColorChip color1="#c1dfc4" color2="#deecdd" />
                                        <ColorChip color1="#a7a6cb" color2="#8989ba" />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.button_area}>
                            <Pressable
                                style={styles.button}
                                android_ripple={{color:'#FAFAFA'}}
                            >
                                <Text style={styles.button_text}>만들기</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <FloatingButton 
                icon="add" 
                size={50} 
                onPress={() => setModalVisible(true)} 
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    block: {
        width: '90%',
        height: 550,
        marginBottom: 5,
        borderRadius: 35,
        backgroundColor: "#FAFAFA",
        zIndex: 5,
        elevation: 20,
    },
    header: {
        flex: 0.17,
        // backgroundColor: 'salmon',
        marginHorizontal: 25,
        marginTop: 20,
        flexDirection: "row",
        alignItems: 'center',
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    title: {
        flex: 0.18,
        // borderColor: 'lightblue',
        // borderWidth: 1,
        marginHorizontal: 25,
    },
    days: {
        flex: 0.26,
        // borderColor: 'lightgreen',
        // borderWidth: 1,
        marginHorizontal: 25,
    },
    color: {
        flex: 0.28,
        // borderColor: 'lightpink',
        // borderWidth: 1,
        marginHorizontal: 25,
    },
    button_area: {
        flex: 0.11,
        // borderColor: 'gold',
        // borderWidth: 1,
        marginHorizontal: 25,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'BMJUA_ttf',
        fontSize: 26,
        color:'#262626',
    },
    subtext: {
        color: '#A2A2A2',
        fontFamily: 'NanumSquareR',
        fontSize: 12,
    },
    input: {
        fontFamily: 'BMJUA_ttf',
        fontSize: 18,
        color:'#262626',
        borderColor: '#E6E6E6',
        borderWidth: 1.5,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    day_button: {
        width: 90,
        borderColor: '#E6E6E6',
        borderWidth: 1.5,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginTop: 5,
        alignItems: 'center',
    },
    circle: {
        backgroundColor: '#F2F2F2', 
        width: 105,
        height: 105,
        borderRadius: 100,
    },
    colorchip: {
        width: 30,
        height: 30,
        borderRadius: 8,
    },
    button: {
        backgroundColor: '#93B4F5',
        width: 85,
        borderRadius: 20,
        alignItems: 'center',
    },
    button_text: {
        fontFamily: 'BMJUA_ttf',
        color: 'white', 
        lineHeight: 40, 
        fontSize: 22
    }
})

export default CreateChallenge;