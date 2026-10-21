import RaffleGrid from '@/components/raffle-grid';
import { globalStyles } from '@/constants/global-style';
import { findRaffleByID } from '@/mocks';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

export default function RaffleDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState<string>();

  const raffle = findRaffleByID(id);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: raffle?.name,
          headerSearchBarOptions: {
            allowToolbarIntegration: true,
            textColor: globalStyles.colors.light,
            tintColor: globalStyles.colors.light,
            hintTextColor: globalStyles.colors.light,
            headerIconColor: globalStyles.colors.light,
            onChangeText(e) {
              setSearchQuery(e.nativeEvent.text.toLocaleLowerCase('es-CO'));
            },
            onCancelButtonPress() {
              setSearchQuery(undefined);
            },
          },
        }}
      />

      {raffle && <RaffleGrid raffle={raffle} searchQuery={searchQuery} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  grid: {
    padding: globalStyles.padding,
  },
});
