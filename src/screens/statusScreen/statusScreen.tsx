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
            <View style={style.headerView}>
                <Text style={style.headerViewText}>
                    Durum
                </Text>
                <Icon
                    name={"dots-three-vertical"}
                    size={20}
                />
            </View>
            <View style={style.statusView}>
                <View style={style.imageView}>
                    <Image
                        source={example}
                        style={style.image}
                    />
                    <IconA
                        name={"pluscircle"}
                        style={style.imageIcon}
                    />
                </View>
                <View>
                    <Text style={style.statusViewTitle}>
                        Durumum
                    </Text>
                    <Text style={style.statusViewText}>
                        Durum güncellemesi eklemek için dokunun
                    </Text>
                </View>
            </View>
            <View style={style.divider} />
            <View style={style.headerView}>
                <Text style={style.headerViewText}>
                    Kanallar
                </Text>
                <Icon
                    name={"plus"}
                    size={24}
                />
            </View>
            <Text style={style.text}>
                İlginizi çeken konulardaki son gelişmelerden haberdar olun.
                Takip edebileceğiniz kanalları aşağıda bulabilirsiniz.
            </Text>
            <View style={style.buttonView}>
                <CustomButton iconName='camera-alt' />
            </View>
            {/* Güncelle ileride - gecici denemelik */}
            <View style={{ flexDirection: "row", marginHorizontal: 20, marginVertical: 10 }}>
                <ChannelCard />
                <ChannelCard />
            </View>
            <TouchableOpacity>
                <Text style={style.buttonText}>
                    Daha fazlasını keşfet
                </Text>
            </TouchableOpacity>
            <IconM
                name={"pencil"}
                style={style.icon}
            />
        </View>
    )
}