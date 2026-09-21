import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";

const CATEGORIES = [
    { id: '1', title: 'Ranqueada', icon: require('../../assets/images/Icon.png') },
    { id: '2', title: 'Duelo 1x1', icon: require('../../assets/images/Icon(1).png') },
    { id: '3', title: 'Diversão', icon: require('../../assets/images/Group.png') },
    { id: '4', title: 'Treino', icon: require('../../assets/images/Discord-Logo-White 1.png'), isDiscord: true },
];

const Home = () => {
    const router = useRouter();
    const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    function handleSelectCategory(categoryId: string) {
        setSelectedCategory(prev => prev === categoryId ? '' : categoryId);
    }
    
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        style={styles.profile}
                        activeOpacity={0.8}
                        onPress={() => setIsSignOutModalOpen(true)}
                    >
                        <Image
                            source={require('../../assets/images/pngegg.png')}
                            style={{ height: 46, width: 42, }}
                        />
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.greeting}>

                            Olá, <Text style={{ fontFamily: 'Rajdhani_700Bold' }}>
                                Molusco
                            </Text>

                        </Text>
                        <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                            Hoje é dia de vitória
                        </Text>
                    </View>

                </View>

                <TouchableOpacity
                    style={styles.newBtn}
                    activeOpacity={0.8}
                    onPress={() => router.push('/Schedule')}

                >
                    <Image
                        source={require('../../assets/images/Vector.png')}
                        style={{ height: 20, width: 20, }}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categories}
                contentContainerStyle={{ gap: 8, }}
            >
                {CATEGORIES.map((item) => {
                    const isSelected = selectedCategory === item.id;

                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={[
                                styles.card,
                                { opacity: isSelected ? 1 : 0.4 }
                            ]}
                            activeOpacity={0.7}
                            onPress={() => handleSelectCategory(item.id)}
                        >
                            <Image
                                source={item.icon}
                                style={{ height: 48, width: item.isDiscord ? 48 : 48 }}
                                resizeMode="contain"
                            />

                            <Text style={{ fontSize: 15, color: '#DDE3F0', fontFamily: 'Rajdhani_500Medium', }}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            <View style={styles.shedule}>

                <View style={styles.sheduleTitle}>
                    <Text style={{ fontSize: 18, color: '#DDE3F0', fontFamily: 'Rajdhani_700Bold', }}>
                        Partidas agendadas
                    </Text>
                    <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                        Total 6
                    </Text>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    contentContainerStyle={{ gap: 33, }}
                >
                    <TouchableOpacity style={styles.item} activeOpacity={0.9} onPress={() => router.push('/AppointmentDetails')}>
                        <Image
                            source={require('../../assets/images/Rectangle.png')}
                            style={{ height: 68, width: 64, }}
                        />

                        <View style={styles.appointment}>
                            <View style={styles.id}>
                                <Text style={{ fontSize: 15, color: '#DDE3F0', fontFamily: 'Rajdhani_500Medium', }}>
                                    Lendário
                                </Text>
                                <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                                    Ranqueada
                                </Text>
                            </View>

                            <View style={styles.metadata}>
                                <View style={styles.data}>
                                    <Image
                                        source={require('../../assets/images/Frame.png')}
                                        style={{ height: 16, width: 16, }}
                                    />
                                    <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                                        18/06 às 21:00h
                                    </Text>
                                </View>
                                <View style={styles.data}>
                                    <Image
                                        source={require('../../assets/images/Frame(1).png')}
                                        style={{ height: 16, width: 16, }}
                                    />
                                    <Text style={{ fontSize: 13, color: '#E51C44', lineHeight: 17, }}>
                                        Anfitrião
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item} activeOpacity={0.9} onPress={() => router.push('/AppointmentDetails')}>
                        <Image
                            source={require('../../assets/images/Rectangle(1).png')}
                            style={{ height: 68, width: 64, }}
                        />

                        <View style={styles.appointment}>
                            <View style={styles.id}>
                                <Text style={{ fontSize: 15, color: '#DDE3F0', fontFamily: 'Rajdhani_500Medium', }}>
                                    Yeah, boy
                                </Text>
                                <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                                    Diversão
                                </Text>
                            </View>

                            <View style={styles.metadata}>
                                <View style={styles.data}>
                                    <Image
                                        source={require('../../assets/images/Frame.png')}
                                        style={{ height: 16, width: 16, }}
                                    />
                                    <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                                        23/06 às 19:00h
                                    </Text>
                                </View>
                                <View style={styles.data}>
                                    <Image
                                        source={require('../../assets/images/Frame(2).png')}
                                        style={{ height: 16, width: 16, }}
                                    />
                                    <Text style={{ fontSize: 13, color: '#32BD50', lineHeight: 17, }}>
                                        Visitante
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item} activeOpacity={0.9} onPress={() => router.push('/AppointmentDetails')}>
                        <Image
                            source={require('../../assets/images/Rectangle(2).png')}
                            style={{ height: 68, width: 64, }}
                        />

                        <View style={styles.appointment}>
                            <View style={styles.id}>
                                <Text style={{ fontSize: 15, color: '#DDE3F0', fontFamily: 'Rajdhani_500Medium', }}>
                                    Rumo ao topo
                                </Text>
                                <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                                    1x1
                                </Text>
                            </View>

                            <View style={styles.metadata}>
                                <View style={styles.data}>
                                    <Image
                                        source={require('../../assets/images/Frame.png')}
                                        style={{ height: 16, width: 16, }}
                                    />
                                    <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                                        20/06 às 09:00h
                                    </Text>
                                </View>
                                <View style={styles.data}>
                                    <Image
                                        source={require('../../assets/images/Frame(1).png')}
                                        style={{ height: 16, width: 16, }}
                                    />
                                    <Text style={{ fontSize: 13, color: '#E51C44', lineHeight: 17, }}>
                                        Anfitrião
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item} activeOpacity={0.9} onPress={() => router.push('/AppointmentDetails')}>
                        <Image
                            source={require('../../assets/images/Rectangle(4).png')}
                            style={{ height: 68, width: 64, }}
                        />

                        <View style={styles.appointment}>
                            <View style={styles.id}>
                                <Text style={{ fontSize: 15, color: '#DDE3F0', fontFamily: 'Rajdhani_500Medium', }}>
                                    Bora queimar tudo
                                </Text>
                                <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                                    Ranqueada
                                </Text>
                            </View>

                            <View style={styles.metadata}>
                                <View style={styles.data}>
                                    <Image
                                        source={require('../../assets/images/Frame.png')}
                                        style={{ height: 16, width: 16, }}
                                    />
                                    <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                                        20/06 às 14:20h
                                    </Text>
                                </View>
                                <View style={styles.data}>
                                    <Image
                                        source={require('../../assets/images/Frame(1).png')}
                                        style={{ height: 16, width: 16, }}
                                    />
                                    <Text style={{ fontSize: 13, color: '#E51C44', lineHeight: 17, }}>
                                        Anfitrião
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item} activeOpacity={0.9} onPress={() => router.push('/AppointmentDetails')}>
                        <Image
                            source={require('../../assets/images/Rectangle(3).png')}
                            style={{ height: 68, width: 64, }}
                        />

                        <View style={styles.appointment}>
                            <View style={styles.id}>
                                <Text style={{ fontSize: 15, color: '#DDE3F0', fontFamily: 'Rajdhani_500Medium', }}>
                                    Valoroso
                                </Text>
                                <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                                    Dor e sofrimento
                                </Text>
                            </View>

                            <View style={styles.metadata}>
                                <View style={styles.data}>
                                    <Image
                                        source={require('../../assets/images/Frame.png')}
                                        style={{ height: 16, width: 16, }}
                                    />
                                    <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                                        18/06 às 21:00h
                                    </Text>
                                </View>
                                <View style={styles.data}>
                                    <Image
                                        source={require('../../assets/images/Frame(1).png')}
                                        style={{ height: 16, width: 16, }}
                                    />
                                    <Text style={{ fontSize: 13, color: '#E51C44', lineHeight: 17, }}>
                                        Anfitrião
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item} activeOpacity={0.9} onPress={() => router.push('/AppointmentDetails')}>
                        <Image
                            source={require('../../assets/images/Rectangle.png')}
                            style={{ height: 68, width: 64, }}
                        />

                        <View style={styles.appointment}>
                            <View style={styles.id}>
                                <Text style={{ fontSize: 15, color: '#DDE3F0', fontFamily: 'Rajdhani_500Medium', }}>
                                    Republica do gays
                                </Text>
                                <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                                    1x1
                                </Text>
                            </View>

                            <View style={styles.metadata}>
                                <View style={styles.data}>
                                    <Image
                                        source={require('../../assets/images/Frame.png')}
                                        style={{ height: 16, width: 16, }}
                                    />
                                    <Text style={{ fontSize: 13, color: '#ABB1CC', lineHeight: 17, }}>
                                        23/06 às 19:00h
                                    </Text>
                                </View>
                                <View style={styles.data}>
                                    <Image
                                        source={require('../../assets/images/Frame(1).png')}
                                        style={{ height: 16, width: 16, }}
                                    />
                                    <Text style={{ fontSize: 13, color: '#E51C44', lineHeight: 17, }}>
                                        Anfitrião
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {/* Modal de confirmação de Logout */}
            <Modal
                transparent
                visible={isSignOutModalOpen}
                animationType="fade"
                onRequestClose={() => setIsSignOutModalOpen(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                            Deseja sair do <Text style={{ color: '#E51C44', fontFamily: 'Rajdhani_700Bold' }}>GamePlay</Text>?
                        </Text>

                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={styles.btnSecondary}
                                activeOpacity={0.8}
                                onPress={() => setIsSignOutModalOpen(false)}
                            >
                                <Text style={{ fontSize: 16, color: '#DDE3F0', fontFamily: 'Rajdhani_500Medium' }}>
                                    Não
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.btnPrimary}
                                activeOpacity={0.8}
                                onPress={() => {
                                    setIsSignOutModalOpen(false);
                                    router.push('/Index');
                                }}
                            >
                                <Text style={{ fontSize: 16, color: '#FFF', fontFamily: 'Rajdhani_700Bold' }}>
                                    Sim
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0C123B',
        paddingHorizontal: 24,
        gap: 40,
    },
    header: {
        marginTop: 25,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profile: {
        width: 48,
        height: 48,
        backgroundColor: '#E51C44',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    greeting: {
        fontSize: 24,
        fontFamily: 'Rajdhani_500Medium',
        color: '#DDE3F0',
        alignItems: 'baseline',
    },
    newBtn: {
        width: 48,
        height: 48,
        backgroundColor: '#E51C44',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categories: {
        flexDirection: 'row',
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
    shedule: {
        width: '100%',
        flex: 1,
        gap: 24,
    },
    sheduleTitle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    list: {
        width: '100%',
    },
    item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#171F52',
    },
    appointment: {
        flex: 1,
        flexDirection: 'column',
        gap: 12,
    },
    id: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    metadata: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    data: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#1D2766',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        gap: 24,
    },
    modalTitle: {
        fontSize: 24,
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        width: '100%',
        gap: 8,
    },
    btnSecondary: {
        flex: 1,
        height: 56,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnPrimary: {
        flex: 1,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#E51C44',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;