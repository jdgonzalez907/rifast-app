import { globalStyles } from '@/constants/global-style';
import { getDigits, RaffleStatus, RaffleSummary } from '@/core/domain';
import { Text, View, StyleSheet } from 'react-native';

export default function RaffleCard(raffle: RaffleSummary) {
  const day: string = raffle.drawDate.toLocaleString('es-CO', {
    day: '2-digit',
  });
  const month: string = raffle.drawDate.toLocaleString('es-CO', {
    month: 'long',
  });
  const year: string = raffle.drawDate.toLocaleString('es-CO', {
    year: 'numeric',
  });

  const price = raffle.ticketPrice.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
  });

  const styles = createStyles(raffle.status);

  const isFinished = raffle.status === 'finished';

  return (
    <View
      style={[styles.enabledContainer, isFinished && styles.disabledContainer]}
    >
      <View style={styles.dateContainer}>
        <Text style={styles.month}>{month}</Text>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{raffle.name}</Text>
          <Text style={styles.digitCount}>{getDigits(raffle.digitCount)}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.ticketDescription}>Precio por ticket:</Text>
          <Text style={styles.ticketPrice}>{price}</Text>
        </View>
      </View>
    </View>
  );
}

const createStyles = (status: RaffleStatus) => {
  return StyleSheet.create({
    disabledContainer: {
      opacity: 0.65,
    },
    enabledContainer: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: globalStyles.margin,
      overflow: 'hidden',
      borderRadius: globalStyles.borderRadius,
      boxShadow: globalStyles.boxShadow,
      backgroundColor: globalStyles.colors.background,
    },
    dateContainer: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      padding: globalStyles.padding,
    },
    descriptionContainer: {
      flex: 4,
      justifyContent: 'center',
    },
    day: {
      color: globalStyles.colors.dark,
      fontSize: 36,
      fontWeight: 'bold',
    },
    month: {
      color: globalStyles.colors.dark,
      textTransform: 'uppercase',
    },
    year: {
      color: globalStyles.colors.dark,
    },
    titleContainer: {
      flex: 1,
      flexDirection: 'row',
      borderBottomLeftRadius: globalStyles.borderRadius,
      backgroundColor: globalStyles.colors.accent,
      padding: globalStyles.padding,
    },
    name: {
      flex: 4,
      textAlignVertical: 'center',
      color: globalStyles.colors.light,
      fontSize: 14,
      fontWeight: 'bold',
    },
    digitCount: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: globalStyles.colors.dark,
      backgroundColor: globalStyles.colors.background,
      fontSize: 12,
      height: 36,
      width: 36,
      borderRadius: 18,
      boxShadow: globalStyles.boxShadow,
    },
    valueContainer: {
      flex: 1,
      padding: globalStyles.padding,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ticketDescription: {
      fontSize: 10,
    },
    ticketPrice: {
      color: globalStyles.colors.dark,
      fontSize: 12,
    },
  });
};
