import type { ComponentProps } from 'react';
import { Stack } from 'expo-router';
import { globalStyles } from './global-style';

export const stackScreenOptions: ComponentProps<typeof Stack>['screenOptions'] =
  {
    contentStyle: {
      backgroundColor: globalStyles.colors.secondary,
    },
    headerTitleAlign: 'center',
    headerShadowVisible: true,
    headerBackButtonDisplayMode: 'minimal',
    headerStyle: {
      backgroundColor: globalStyles.colors.accent,
    },
    headerTintColor: globalStyles.colors.light,
    statusBarStyle: 'light',
  };
