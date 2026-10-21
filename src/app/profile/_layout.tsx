import { Stack } from 'expo-router';
import { stackScreenOptions } from '@/constants/navigation';

export default function ProfileStackLayout() {
  return (
    <Stack screenOptions={stackScreenOptions}>
      <Stack.Screen name="index" options={{ title: 'Perfil' }} />
    </Stack>
  );
}
