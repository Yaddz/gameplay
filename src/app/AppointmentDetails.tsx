import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking, Share, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";

const MEMBERS = [
    { id: '1', name: 'Rodrigo', status: 'Disponível', isOnline: true },
    { id: '2', name: 'Paulo', status: 'Ocupado', isOnline: false },
    { id: '3', name: 'Diego', status: 'Ocupado', isOnline: false },
];

const AppointmentDetails = () => {
    const router = useRouter();

    function handleJoinDiscord() {
        Linking.openURL('https://discord.com').catch(() => {
            alert('Entrando na sala do Discord...');
        });
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
                        style={{ height: 32, width: 32 }}
                    />
                </TouchableOpacity>

                <Text style={{ fontFamily: 'Rajdhani_700Bold', fontSize: 24, color: '#DDE3F0' }}>
                    Detalhes
                </Text>

                <TouchableOpacity
                    style={styles.share}
                    activeOpacity={0.8}
                >
                    <Image
                        source={require('../../assets/images/Vector(2).png')}
                        style={{ height: 16, width: 12, transform: [{ rotate: '-90deg' }] }}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>

                <ImageBackground
                    source={require('../../assets/images/Rectangle.png')}
                    style={styles.banner}
                    resizeMode="cover"
                >
                    <LinearGradient
                        colors={['rgba(12, 18, 59, 0.2)', '#0C123B']}
                        style={styles.gradient}
                    />

                    <View style={styles.bannerContent}>
                        <Text style={{ fontFamily: 'Rajdhani_700Bold', fontSize: 28, color: '#DDE3F0', marginBottom: 8 }}>
                            Lendários
                        </Text>

                        <Text style={{ fontFamily: 'Rajdhani_500Medium', fontSize: 13, color: '#DDE3F0', lineHeight: 21 }}>
                            É hoje que vamos chegar ao challenger sem perder uma partida da md10
                        </Text>
                    </View>
                </ImageBackground>

                <View style={styles.sectionHeader}>
                    <Text style={{ fontFamily: 'Rajdhani_700Bold', fontSize: 18, color: '#DDE3F0' }}>
                        Jogadores
                    </Text>

                    <Text style={{ fontFamily: 'Rajdhani_500Medium', fontSize: 13, color: '#ABB1CC' }}>
                        Total 3
                    </Text>
                </View>

                <View style={styles.membersList}>
                    {MEMBERS.map((member) => (
                        <View key={member.id} style={styles.memberItem}>
                            <View style={styles.avatar}>
                                <Image
                                    source={require('../../assets/images/pngegg.png')}
                                    style={{ height: 42, width: 38 }}
                                />
                            </View>

                            <View style={{ flex: 1, marginLeft: 20 }}>
                                <Text style={{ fontFamily: 'Rajdhani_700Bold', fontSize: 18, color: '#DDE3F0' }}>
                                    {member.name}
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                    <View
                                        style={[
                                            styles.statusBullet,
                                            { backgroundColor: member.isOnline ? '#32BD50' : '#E51C44' }
                                        ]}
                                    />
                                    <Text style={{ fontFamily: 'Rajdhani_500Medium', fontSize: 13, color: '#ABB1CC', marginLeft: 8 }}>
                                        {member.status}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={handleJoinDiscord}
                >
                    <Image
                        source={require('../../assets/images/Discord-Logo-White 1.png')}
                        style={styles.discordIcon}
                    />

                    <View style={styles.divider} />

                    <Text style={{ fontSize: 18, color: '#FFF', fontFamily: 'Rajdhani_700Bold', marginLeft: 30 }}>
                        Entrar na partida
                    </Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C123B',
    },
    header: {
        backgroundColor: '#1D2766',
        width: '100%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    back: {
        position: 'absolute',
        left: 24,
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    share: {
        position: 'absolute',
        right: 24,
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner: {
        width: '100%',
        height: 234,
        justifyContent: 'flex-end',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
    },
    bannerContent: {
        paddingHorizontal: 24,
        paddingBottom: 24,
    },
    sectionHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginTop: 24,
        marginBottom: 16,
    },
    membersList: {
        paddingHorizontal: 24,
    },
    memberItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#171F52',
    },
    avatar: {
        width: 48,
        height: 48,
        backgroundColor: '#E51C44',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    statusBullet: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#E51C44',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 24,
        marginTop: 40,
        marginBottom: 32,
    },
    discordIcon: {
        height: 18,
        width: 24,
    },
    divider: {
        backgroundColor: '#0c123b71',
        width: 1,
        height: '75%',
        marginLeft: 30,
    },
});

export default AppointmentDetails;
