import {
  getActionFromState,
  getStateFromPath,
  LinkingOptions,
} from '@react-navigation/native';
import { Linking } from 'react-native';
import Navigation from './Navigation';

export const linkingPrefix = 'itisapp://';

export class DeepLinking {
  static linking: LinkingOptions<object> = {
    prefixes: [linkingPrefix],
    config: {
      screens: {
        Tab: {
          screens: {
            Anime: {
              path: 'anime',
            },
            LastAnime: {
              path: 'lastanime',
            },
            AnimeDetails: {
              path: 'anime/details/:animeId',
            },
          },
        },
      },
    },
  };

  static getPathWithoutPrefix = (url: string) => {
    let path = '';
    DeepLinking.linking.prefixes.forEach((prefix) => {
      if (url.startsWith(prefix)) {
        path = url.replace(prefix, '');
      }
    });
    return path;
  };

  static getActionFromState = (config: any, url: string) => {
    const path = DeepLinking.getPathWithoutPrefix(url);
    const state = getStateFromPath(path, config);
    if (!state) {
      return undefined;
    }
    return getActionFromState(state, config);
  };

  static handleNavigate = async (url: string, isInitialNavigate = false) => {
    const action = DeepLinking.getActionFromState(
      DeepLinking.linking.config,
      url,
    );

    if (action?.type === 'NAVIGATE') {
      const { name, params } = action.payload;
      if (isInitialNavigate) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        Navigation.replace(name, params);
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        Navigation.navigate(name, params);
      }
    }
  };

  static handleInitialNavigate = async (initialUrl: string | null) => {
    if (!initialUrl) {
      return;
    }
    await DeepLinking.handleNavigate(initialUrl, true);
  };

  static subscribe = (listener: (url: string) => void) => {
    const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
      if (url) {
        listener(url);
        DeepLinking.handleNavigate(url);
      }
    });

    return () => {
      linkingSubscription.remove();
    };
  };
}
