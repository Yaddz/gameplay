import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";
import { useState } from 'react';

const CATEGORIES = [
    { id: '1', title: 'Ranqueada', icon: require('../../assets/images/Icon.png') },
    { id: '2', title: 'Duelo 1x1', icon: require('../../assets/images/Icon(1).png') },
    { id: '3', title: 'Diversão', icon: require('../../assets/images/Group.png') },
    { id: '4', title: 'Treino', icon: require('../../assets/images/Discord-Logo-White 1.png'), isDiscord: true },
];

const GUILDS = [
    { id: '1', name: 'Lendários', role: 'Administrador', icon: require('../../assets/images/Rectangle.png') },
    { id: '2', name: 'Yeah, boy', role: 'Administrador', icon: require('../../assets/images/Rectangle(1).png') },
    { id: '3', name: 'Rumo ao topo', role: 'Administrador', icon: require('../../assets/images/Rectangle(2).png') },
    { id: '4', name: 'Bora queimar tudo', role: 'Convidado', icon: require('../../assets/images/Rectangle(4).png') },
    { id: '5', name: 'Valoroso', role: 'Administrador', icon: require('../../assets/images/Rectangle(3).png') },
    { id: '6', name: 'Diversão Geral', role: 'Convidado', icon: require('../../assets/images/Rectangle.png') },
];

const Schedule = () => {
    const router = useRouter();

    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedGuild, setSelectedGuild] = useState<typeof GUILDS[0] | null>(null);
    const [isGuildsModalOpen, setIsGuildsModalOpen] = useState(false);

    function handleSelectCategory(categoryId: string) {
        setSelectedCategory(prev => prev === categoryId ? '' : categoryId);
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity
                    style={styles.back}
                    activeOpacity={0.8}
                    onPress={() => router.push('/Home')}
                >
                    <Image
                        source={require('../../assets/images/Frame(3).png')}
                        style={{ height: 32, width: 32, }}
                    />
                </TouchableOpacity>

                <Text style={{ fontFamily: 'Rajdhani_700Bold', fontSize: 24, color: '#DDE3F0' }}>
                    Agendar partida
                </Text>

            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>

                <Text style={{ fontFamily: 'Rajdhani_700Bold', fontSize: 24, color: '#DDE3F0', marginTop: 32 }}>
                    Categoria
                </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.categories}
                    contentContainerStyle={{ gap: 8 }}
                >
                    {CATEGORIES.map((item) => {
                        const isSelected = selectedCategory === item.id;

                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={[
                                    styles.card,
                                    { opacity: isSelected ? 1 : 0.4 },
                                ]}
                                activeOpacity={0.7}
                                onPress={() => handleSelectCategory(item.id)}
                            >
                                <Image
                                    source={item.icon}
                                    style={{ height: 48, width: 48 }}
                                    resizeMode="contain"
                                />
                                <Text style={{ fontSize: 15, color: '#DDE3F0', fontFamily: 'Rajdhani_500Medium' }}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>

                <View style={styles.content}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            {
                                height: 68,
                                borderWidth: 1,
                                borderColor: '#243189',
                                backgroundColor: '#ffffff00',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingRight: 24,
                                overflow: 'hidden',
                            }
                        ]}
                        activeOpacity={0.8}
                        onPress={() => setIsGuildsModalOpen(true)}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                            <Image
                                source={selectedGuild ? selectedGuild.icon : require('../../assets/images/Rectangle(5).png')}
                                style={styles.logo}
                            />

                            {selectedGuild ? (
                                <View>
                                    <Text style={{ fontSize: 18, color: '#FFF', fontFamily: 'Rajdhani_700Bold' }}>
                                        {selectedGuild.name}
                                    </Text>
                                    <Text style={{ fontSize: 13, color: '#ABB1CC', fontFamily: 'Rajdhani_500Medium' }}>
                                        {selectedGuild.role}
                                    </Text>
                                </View>
                            ) : (
                                <Text style={{ fontSize: 18, color: '#FFF', fontFamily: 'Rajdhani_700Bold' }}>
                                    Selecione um servidor
                                </Text>
                            )}
                        </View>

                        <Image
                            source={require('../../assets/images/Vector(2).png')}
                            style={{ width: 7, height: 10 }}
                        />
                    </TouchableOpacity>

                    <View style={styles.data}>
                        <View style={styles.field}>
                            <Text style={{ fontSize: 18, color: '#DDE3F0', fontFamily: 'Rajdhani_700Bold', marginBottom: 12 }}>
                                Dia e mês
                            </Text>

                            <View style={styles.inputRow}>
                                <TextInput
                                    style={[styles.input, { color: '#DDE3F0', fontFamily: 'Rajdhani_700Bold', fontSize: 16, textAlign: 'center' }]}
                                    keyboardType="numeric"
                                    maxLength={2}
                                />
                                <Text style={{ fontSize: 18, color: '#ABB1CC', fontFamily: 'Rajdhani_700Bold', marginHorizontal: 4 }}>
                                    /
                                </Text>
                                <TextInput
                                    style={[styles.input, { color: '#DDE3F0', fontFamily: 'Rajdhani_700Bold', fontSize: 16, textAlign: 'center' }]}
                                    keyboardType="numeric"
                                    maxLength={2}
                                />
                            </View>
                        </View>

                        <View style={styles.field}>
                            <Text style={{ fontSize: 18, color: '#DDE3F0', fontFamily: 'Rajdhani_700Bold', marginBottom: 12 }}>
                                Hora e minuto
                            </Text>

                            <View style={styles.inputRow}>
                                <TextInput
                                    style={[styles.input, { color: '#DDE3F0', fontFamily: 'Rajdhani_700Bold', fontSize: 16, textAlign: 'center' }]}
                                    keyboardType="numeric"
                                    maxLength={2}
                                />
                                <Text style={{ fontSize: 18, color: '#ABB1CC', fontFamily: 'Rajdhani_700Bold', marginHorizontal: 4 }}>
                                    :
                                </Text>
                                <TextInput
                                    style={[styles.input, { color: '#DDE3F0', fontFamily: 'Rajdhani_700Bold', fontSize: 16, textAlign: 'center' }]}
                                    keyboardType="numeric"
                                    maxLength={2}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.descriptionGroup}>
                        <View style={styles.descriptionHeader}>
                            <Text style={{ fontSize: 18, color: '#DDE3F0', fontFamily: 'Rajdhani_700Bold' }}>
                                Descrição
                            </Text>
                            <Text style={{ fontSize: 13, color: '#ABB1CC', fontFamily: 'Rajdhani_500Medium' }}>
                                Max 100 caracteres
                            </Text>
                        </View>

                        <TextInput
                            style={[
                                styles.textArea,
                                { color: '#DDE3F0', fontFamily: 'Rajdhani_500Medium', fontSize: 13 }
                            ]}
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            textAlignVertical="top"
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.button, { marginTop: 40, marginBottom: 32 }]}
                    activeOpacity={0.8}
                    onPress={() => {
                        alert('Partida agendada com sucesso!');
                        router.push('/Home');
                    }}
                >
                    <Text style={{ fontSize: 18, color: '#FFF', fontFamily: 'Rajdhani_700Bold' }}>
                        Agendar
                    </Text>
                </TouchableOpacity>

            </ScrollView>

            {/* Modal de seleção de servidores */}
            <Modal
                transparent
                visible={isGuildsModalOpen}
                animationType="slide"
                onRequestClose={() => setIsGuildsModalOpen(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHandle} />

                        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
                            {GUILDS.map((guild) => (
                                <TouchableOpacity
                                    key={guild.id}
                                    style={styles.guildItem}
                                    activeOpacity={0.7}
                                    onPress={() => {
                                        setSelectedGuild(guild);
                                        setIsGuildsModalOpen(false);
                                    }}
                                >
                                    <Image source={guild.icon} style={styles.guildIcon} />

                                    <View style={{ flex: 1, marginLeft: 20 }}>
                                        <Text style={{ fontSize: 18, color: '#DDE3F0', fontFamily: 'Rajdhani_700Bold' }}>
                                            {guild.name}
                                        </Text>
                                        <Text style={{ fontSize: 13, color: '#ABB1CC', fontFamily: 'Rajdhani_500Medium' }}>
                                            {guild.role}
                                        </Text>
                                    </View>

                                    <Image
                                        source={require('../../assets/images/Vector(2).png')}
                                        style={{ width: 7, height: 10 }}
                                    />
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>

        </SafeAreaView >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C123B',
        padding: 24,
    },
    header: {
        backgroundColor: '#1D2766',
        width: '100%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        position: 'absolute',
        left: 0,
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categories: {
        marginTop: 12,
        maxHeight: 120,
    },
    card: {
        gap: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1D2766',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
        width: 104,
        height: 120,
    },
    content: {
        marginTop: 32,
        gap: 32,
    },
    logo: {
        height: 68,
        width: 64,
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#E51C44',
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    data: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    field: {
        alignItems: 'flex-start',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        width: 48,
        height: 48,
        backgroundColor: '#1D2766',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
    },
    descriptionGroup: {
        width: '100%',
        gap: 12,
    },
    descriptionHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    textArea: {
        width: '100%',
        height: 95,
        backgroundColor: '#1D2766',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: '#0C123B',
        height: '70%',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 24,
        paddingTop: 16,
        alignItems: 'center',
    },
    modalHandle: {
        width: 39,
        height: 2,
        backgroundColor: '#243189',
        borderRadius: 2,
        marginBottom: 24,
    },
    guildItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#171F52',
    },
    guildIcon: {
        width: 64,
        height: 68,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
    },
});

export default Schedule;