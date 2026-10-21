import { Stack } from 'expo-router';
import { stackScreenOptions } from '@/constants/navigation';

export default function HomeStackLayout() {
  return (
    <Stack screenOptions={stackScreenOptions}>
      <Stack.Screen name="index" options={{ title: 'RiFAST' }} />
      <Stack.Screen name="raffles/[id]" />
    </Stack>
  );
}
