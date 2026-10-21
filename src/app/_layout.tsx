import { globalStyles } from '@/constants/global-style';
import { NativeTabs } from 'expo-router/native-tabs';

export default function RootNativeTabsLayout() {
  return (
    <NativeTabs
      tintColor={globalStyles.colors.light}
      backgroundColor={globalStyles.colors.accent}
      iconColor={{
        default: globalStyles.colors.light,
        selected: globalStyles.colors.accent,
      }}
      rippleColor={globalStyles.colors.light}
      indicatorColor={globalStyles.colors.light}
      labelStyle={{
        default: { color: globalStyles.colors.light },
        selected: { color: globalStyles.colors.light },
      }}
    >
      <NativeTabs.Trigger name="(home)">
        <NativeTabs.Trigger.Label>Rifas</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="ticket" md="confirmation_number" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="new">
        <NativeTabs.Trigger.Label>Crear</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="plus" md="add" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Perfil</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person" md="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
