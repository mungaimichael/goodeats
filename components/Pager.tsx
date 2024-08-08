import mealPrepCollection from '@/app/data';
import React from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import PagerView from 'react-native-pager-view';
import Animated, { useHandler, useEvent, FadeOutLeft, FadeInRight, FadeIn } from 'react-native-reanimated';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const AnimatedPager = Animated.createAnimatedComponent(PagerView);

export function usePagerScrollHandler(handlers: any, dependencies?: any) {
    const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);
    const subscribeForEvents = ['onPageScroll'];

    return useEvent<any>(
        (event) => {
            'worklet';
            const { onPageScroll } = handlers;
            if (onPageScroll && event.eventName.endsWith('onPageScroll')) {
                onPageScroll(event, context);
            }
        },
        subscribeForEvents,
        doDependenciesDiffer
    );
}

export default () => {


    const { title, recipes } = mealPrepCollection

    const { name, ingredients, instructions } = recipes[0]

    const handler = usePagerScrollHandler({
        onPageScroll: (e: any) => {
            'worklet';
            // console.log(e.offset, e.position);
        },
    });

    const AnimatedSv = Animated.createAnimatedComponent(ScrollView)


    // share recipe

    const htmlRecipe = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      ${name}
    </h1>
    <ul>
        ${ingredients.map((item) => <li>{item}</li>)}
    </ul>
  </body>
</html>
`;


    // generate pdf recipe

    const generaeRecipePdf = async () => {
        try {
            const file = await Print.printToFileAsync({
                html: htmlRecipe,
                base64: false
            })
            await shareAsync(file.uri)
        } catch (error) {

        }
    }



    return (
        <AnimatedPager
            testID={'pager-view'}
            style={styles.pagerView}
            initialPage={0}
            onPageScroll={handler}
            exiting={FadeOutLeft}
            entering={FadeIn}

        >
            <AnimatedSv
                showsVerticalScrollIndicator={false}
                testID={'1'} key="1">
                {
                    ingredients.map((item, index) => <SIngleItem key={index} item={item} index={index} />)
                }
            </AnimatedSv>
            <View testID={'2'} key="2">
                <Text>Second page</Text>
            </View>
            <View testID={'3'} key="3">
                <Pressable
                    onPress={generaeRecipePdf}
                ><Text>Generate</Text></Pressable>
            </View>
        </AnimatedPager>
    );
};

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
        marginLeft: 5
    },
});

interface args {
    item: string,
    index: number
}
export function SIngleItem({ item, index }: args) {

    return (
        <View
            style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                height: 'auto',
                borderBottomWidth: 3, padding: 5, borderColor: "#FCF5EC"
            }}
        >
            <View
                style={{ width: 30, height: 30, backgroundColor: "#f1e1cb", borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}
            ><Text
                style={{ fontFamily: 'loraRegular', color: 'black', fontSize: 15 }}
            >{index + 1}</Text></View>
            <Text
                style={{ width: '90%', fontFamily: 'loraRegular', fontSize: 15, marginLeft: 5 }}
            >{item}</Text>
        </View>
    )
}