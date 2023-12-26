import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import IconA from 'react-native-vector-icons/AntDesign'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import style from './style'
import { example } from 'assets'
import { CustomButton } from 'components'
import { ChannelCard } from 'components/cards'

export const StatusScreen = () => {
    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <Text style={style.headerText}>
                    Durum
                </Text>
                <Icon
                    name={"dots-three-vertical"}
                    size={20}
                />
            </View>
            <View style={style.statusSection}>
                <View style={style.userImageContainer}>
                    <Image
                        source={example}
                        style={style.userImage}
                    />
                    <IconA
                        name={"pluscircle"}
                        style={style.plusIcon}
                    />
                </View>
                <View>
                    <Text style={style.statusTitle}>
                        Durumum
                    </Text>
                    <Text style={style.statusDescription}>
                        Durum güncellemesi eklemek için dokunun
                    </Text>
                </View>
            </View>
            <View style={style.dividerLine} />
            <View style={style.headerContainer}>
                <Text style={style.headerText}>
                    Kanallar
                </Text>
                <Icon
                    name={"plus"}
                    size={24}
                />
            </View>
            <Text style={style.informationText}>
                İlginizi çeken konulardaki son gelişmelerden haberdar olun.
                Takip edebileceğiniz kanalları aşağıda bulabilirsiniz.
            </Text>
            <View style={style.addButtonContainer}>
                <CustomButton iconName='camera-alt' />
            </View>
            <View style={style.channelCardsContainer}>
                <ChannelCard />
                <ChannelCard />
            </View>
            <TouchableOpacity>
                <Text style={style.exploreButtonText}>
                    Daha fazlasını keşfet
                </Text>
            </TouchableOpacity>
            <IconM
                name={"pencil"}
                style={style.editIcon}
            />
        </View>
    )
}