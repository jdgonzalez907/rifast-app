import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';

type Props = {
  children: ReactNode;
  edges?: readonly Edge[];
};

export function Screen({ children, edges = ['top'] }: Props) {
  return (
    <SafeAreaView edges={edges} style={styles.root}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
