import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const padding = windowWidth * 0.01;
const margin = windowWidth * 0.01;

const styles = {
    oneContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',

        padding: padding,
    },
    oneImage: {
        width: windowWidth / 2,
        height: windowWidth / 2,
        margin: margin,
    },
    twoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        padding: padding
    },
    twoImage: {
        width: (windowWidth / 2) - padding,
        height: (windowWidth / 2) - padding,
        margin: margin,
    },
    threeContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',

        padding: padding,
    },
    threeImage: {
        width: (windowWidth / 3) - padding,
        height: (windowWidth / 3) - padding,
        margin: margin,
    },
    fourContainer: {
        flex: 1,
        flexDirection: "column",
        paddingTop: 30,

        padding: padding,
    },
    fourContainerUp: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    fourContainerDown: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    fourImage: {
        width: (windowWidth / 2) - padding,
        height: (windowWidth / 2) - padding,
        margin: margin
    },
    fiveContainer: {
        flex: 1,
        flexDirection: "column",
        paddingTop: 30,
    },
    fiveContainerBig: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',

        padding: padding,
    },
    fiveImageBig: {
        width: (windowWidth / 2) - padding,
        height: (windowWidth / 2) - padding,
        flexDirection: "column",
        flex: 1,
        margin: margin,
    },
    fiveContainerSmall: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        
        padding: padding,
    },
    fiveImageSmall: {
        width: (windowWidth / 3) - padding,
        height: (windowWidth / 3) - padding,
        margin: margin,
    },
};

function ImagesGrid({ data }) {

    if (data.length == 1) {
        return (
            <View style={styles.oneContainer}>
                <Image
                    style={styles.oneImage}
                    source={{
                        uri: data[0],
                    }}
                />
            </View>
        )
    }
    else if (data.length == 2) {
        return (
            <View style={styles.twoContainer}>
                {
                    data instanceof Array && data.map((image, index) =>
                        <Image
                            key={'image' + index}
                            style={styles.twoImage}
                            source={{
                                uri: image,
                            }}
                        />
                    )
                }
            </View>
        )
    }
    else if (data.length == 3) {
        return (
            <View style={styles.threeContainer}>
                {
                    data instanceof Array && data.map((image, index) =>
                        <Image
                            key={'image' + index}
                            style={styles.threeImage}
                            source={{
                                uri: image,
                            }}
                        />
                    )
                }
            </View>
        )
    }
    else if (data.length == 4) {
        return (
            <View style={styles.fourContainer}>
                <View style={styles.fourContainerUp}>
                    {
                        data instanceof Array && data.slice(0, 2).map((image, index) =>
                            <Image
                                key={'image' + index}
                                style={styles.fourImage}
                                source={{
                                    uri: image,
                                }}
                            />
                        )
                    }
                </View>
                <View style={styles.fourContainerDown}>
                    {
                        data instanceof Array && data.slice(2, 4).map((image, index) =>
                            <Image
                                key={'image' + index}
                                style={styles.fourImage}
                                source={{
                                    uri: image,
                                }}
                            />
                        )
                    }
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={styles.fiveContainer}>
                <View style={styles.fiveContainerBig}>
                    {
                        data instanceof Array && data.slice(0, 2).map((image, index) =>
                            <Image
                                key={'image' + index}
                                style={styles.fiveImageBig}
                                source={{
                                    uri: image,
                                }}
                            />
                        )
                    }
                </View>
                <View style={styles.fiveContainerSmall}>
                    {
                        data instanceof Array && data.slice(2, 5).map((image, index) =>
                            <Image
                                key={'image' + index}
                                style={styles.fiveImageSmall}
                                source={{
                                    uri: image,
                                }}
                            />
                        )
                    }
                </View>
            </View>
        )
    }
}

export default ImagesGrid
