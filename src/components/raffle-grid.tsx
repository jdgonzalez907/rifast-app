import { globalStyles } from '@/constants/global-style';
import { getDigits, Raffle } from '@/core/domain';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RaffleGridCell from './raffle-grid-cell';
import { useCallback, useMemo } from 'react';

export interface RaffleGridProps {
  raffle: Raffle;
  searchQuery: string | undefined;
}

export default function RaffleGrid(props: RaffleGridProps) {
  const day = props.raffle.drawDate.toLocaleString('es-CO', {
    day: '2-digit',
  });
  const month = props.raffle.drawDate.toLocaleString('es-CO', {
    month: 'long',
  });
  const year = props.raffle.drawDate.toLocaleString('es-CO', {
    year: 'numeric',
  });

  const price = props.raffle.ticketPrice.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
  });

  const totalTickets = useMemo(() => {
    const quantity = Math.pow(10, props.raffle.digitCount);
    return Array.from({ length: quantity }, (_, index) =>
      String(index).padStart(props.raffle.digitCount, '0'),
    );
  }, [props.raffle.digitCount]);

  const filteredTickets = useMemo(() => {
    if (!props.searchQuery) return totalTickets;

    return totalTickets.filter((ticketId) => {
      return props.searchQuery ? ticketId.includes(props.searchQuery) : false;
    });
  }, [props.searchQuery, totalTickets]);

  const renderItem = useCallback(
    ({ item }: { item: string }) => RaffleGridCell(props.raffle, item),
    [props.raffle],
  );

  return (
    <FlatList
      data={filteredTickets}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      numColumns={5}
      contentContainerStyle={styles.container}
      ListHeaderComponent={() => (
        <>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{props.raffle.description}</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.digitCount}>
                {getDigits(props.raffle.digitCount)}
              </Text>
              <Text style={styles.ticketPrice}>{price}</Text>
            </View>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.month}>{month}</Text>
            <Text style={styles.day}>{day}</Text>
            <Text style={styles.year}>{year}</Text>
          </View>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    boxShadow: globalStyles.boxShadow,
    borderRadius: globalStyles.borderRadius,
    padding: globalStyles.padding,
  },
  descriptionContainer: {
    padding: globalStyles.padding,
    boxShadow: globalStyles.boxShadow,
    backgroundColor: globalStyles.colors.background,
    borderRadius: globalStyles.borderRadius,
    marginBottom: globalStyles.margin,
  },
  description: {
    fontSize: 14,
    marginBottom: globalStyles.margin,
    color: globalStyles.colors.dark,
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  digitCount: {
    color: globalStyles.colors.light,
    backgroundColor: globalStyles.colors.accent,
    fontSize: 12,
    height: 36,
    width: 36,
    borderRadius: 18,
    boxShadow: globalStyles.boxShadow,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  ticketPrice: {
    fontSize: 16,
    color: globalStyles.colors.dark,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dateContainer: {
    padding: globalStyles.padding,
    boxShadow: globalStyles.boxShadow,
    backgroundColor: globalStyles.colors.background,
    borderRadius: globalStyles.borderRadius,
    marginBottom: globalStyles.margin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  month: {
    textTransform: 'uppercase',
    fontSize: 18,
  },
  day: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 14,
  },
});
