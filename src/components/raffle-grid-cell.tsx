import { globalStyles } from '@/constants/global-style';
import { Raffle } from '@/core/domain';
import { StyleSheet, Text, View } from 'react-native';

export default function RaffleGridCell(raffle: Raffle, ticketId: string) {
  const found = raffle.ticketsRegistry[ticketId];

  return (
    <View style={styles.ticketContainer}>
      <Text style={styles.text}>{ticketId}</Text>
      {found ? (
        <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
          {found.buyerName}
        </Text>
      ) : (
        <Text>Libre</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ticketContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    padding: 8,
    overflow: 'hidden',
    borderRadius: globalStyles.borderRadius,
    boxShadow: globalStyles.boxShadow,
    backgroundColor: globalStyles.colors.background,
  },
  text: {
    color: globalStyles.colors.dark,
  },
});
