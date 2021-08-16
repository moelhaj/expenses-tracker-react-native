import React, { useContext } from 'react';
import { TransactionContext } from '../../../contexts/TransactionContext';
import { Pressable, FlatList, TouchableOpacity, Modal, StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { layout, text } from '../../../components/Styles';


export default function Category() {

    const context = useContext(TransactionContext);

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={context.modalVisible}
                onRequestClose={() => context.setModalVisible(false)}
            >
                <View style={[layout.box, styles.categoriesModal]}>

                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => context.setModalVisible(false)}>
                            <MaterialCommunityIcons name="close" size={30} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={[layout.flex, styles.container]}>
                        <FlatList
                            data={context.categoryList}
                            renderItem={({ item, index }) => (
                                <View>
                                    <TouchableOpacity style={[layout.flexRow, styles.item]} onPress={() => {
                                        context.setModalVisible(false);
                                        context.setCategory(item.name);
                                        context.setCategoryIcon(index)
                                    }}>
                                        <View style={[layout.center, styles.icon]}>{item.icon}</View>
                                        <Text style={{ fontSize: 20 }}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            keyExtractor={item => item.name}
                        />
                    </View>

                </View>
            </Modal>

            <Pressable
                style={[layout.flexRow, layout.box, { alignItems: 'center', padding: 20, marginVertical: 10, }]}
                onPress={() => context.setModalVisible(true)}>
                <Text style={[context.category === 'Category' ? text.grayText : '', { flex: 1, fontSize: 20, }]}>
                    {context.category}
                </Text>
                <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    categoriesModal: {
        marginVertical: '10%',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        height: '80%',
        padding: 20,
    },
    item: {
        marginVertical: 10,
        alignItems: 'center',
        marginVertical: 5,
        paddingVertical: 7
    },
    icon: {
        marginRight: 10,
        width: 40,
        height: 40,
    },
})