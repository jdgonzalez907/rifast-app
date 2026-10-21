import { Stack } from 'expo-router';
import { stackScreenOptions } from '@/constants/navigation';

export default function NewStackLayout() {
  return (
    <Stack screenOptions={stackScreenOptions}>
      <Stack.Screen name="index" options={{ title: 'Crear' }} />
    </Stack>
  );
}
