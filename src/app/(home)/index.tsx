import { Pressable, Text, View, StyleSheet, FlatList } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import RaffleCard from '@/components/raffle-card';
import { raffleSummaries } from '@/mocks';
import { globalStyles } from '@/constants/global-style';
import { useState } from 'react';
import { RaffleSummary } from '@/core/domain';

export default function Home() {
  const [data, setData] = useState<RaffleSummary[]>(raffleSummaries);

  const router = useRouter();

  const renderItem = ({ item }: { item: RaffleSummary }) => (
    <Pressable onPress={() => router.push(`/(home)/raffles/${item.id}`)}>
      <RaffleCard key={item.id} {...item} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerSearchBarOptions: {
            allowToolbarIntegration: true,
            textColor: globalStyles.colors.light,
            tintColor: globalStyles.colors.light,
            hintTextColor: globalStyles.colors.light,
            headerIconColor: globalStyles.colors.light,
            onChangeText(e) {
              setData(
                raffleSummaries.filter((item) =>
                  item.name
                    .toLocaleLowerCase('es-CO')
                    .includes(e.nativeEvent.text.toLocaleLowerCase('es-CO')),
                ),
              );
            },
            onCancelButtonPress() {
              setData(raffleSummaries);
            },
          },
        }}
      />

      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <Text>
              Ups, no tenemos rifas para mostrar, pero... Y si creas una?
            </Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: globalStyles.padding,
  },
});
