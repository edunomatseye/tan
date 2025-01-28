/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as AboutImport } from './routes/about'
import { Route as LayoverImport } from './routes/_layover'
import { Route as IndexImport } from './routes/index'
import { Route as GameIndexImport } from './routes/game/index'
import { Route as DeepseekIndexImport } from './routes/deepseek/index'
import { Route as AiIndexImport } from './routes/ai/index'
import { Route as SettingsProfileImport } from './routes/settings/profile'
import { Route as SettingsNotificationsImport } from './routes/settings/notifications'
import { Route as SettingsSettingsIdImport } from './routes/settings/$settingsId'
import { Route as LayoverContactImport } from './routes/_layover.contact'
import { Route as BlogPostIndexImport } from './routes/blog/post/index'

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const LayoverRoute = LayoverImport.update({
  id: '/_layover',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const GameIndexRoute = GameIndexImport.update({
  id: '/game/',
  path: '/game/',
  getParentRoute: () => rootRoute,
} as any)

const DeepseekIndexRoute = DeepseekIndexImport.update({
  id: '/deepseek/',
  path: '/deepseek/',
  getParentRoute: () => rootRoute,
} as any)

const AiIndexRoute = AiIndexImport.update({
  id: '/ai/',
  path: '/ai/',
  getParentRoute: () => rootRoute,
} as any)

const SettingsProfileRoute = SettingsProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsNotificationsRoute = SettingsNotificationsImport.update({
  id: '/notifications',
  path: '/notifications',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsSettingsIdRoute = SettingsSettingsIdImport.update({
  id: '/$settingsId',
  path: '/$settingsId',
  getParentRoute: () => SettingsRoute,
} as any)

const LayoverContactRoute = LayoverContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => LayoverRoute,
} as any)

const BlogPostIndexRoute = BlogPostIndexImport.update({
  id: '/blog/post/',
  path: '/blog/post/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layover': {
      id: '/_layover'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoverImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/_layover/contact': {
      id: '/_layover/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof LayoverContactImport
      parentRoute: typeof LayoverImport
    }
    '/settings/$settingsId': {
      id: '/settings/$settingsId'
      path: '/$settingsId'
      fullPath: '/settings/$settingsId'
      preLoaderRoute: typeof SettingsSettingsIdImport
      parentRoute: typeof SettingsImport
    }
    '/settings/notifications': {
      id: '/settings/notifications'
      path: '/notifications'
      fullPath: '/settings/notifications'
      preLoaderRoute: typeof SettingsNotificationsImport
      parentRoute: typeof SettingsImport
    }
    '/settings/profile': {
      id: '/settings/profile'
      path: '/profile'
      fullPath: '/settings/profile'
      preLoaderRoute: typeof SettingsProfileImport
      parentRoute: typeof SettingsImport
    }
    '/ai/': {
      id: '/ai/'
      path: '/ai'
      fullPath: '/ai'
      preLoaderRoute: typeof AiIndexImport
      parentRoute: typeof rootRoute
    }
    '/deepseek/': {
      id: '/deepseek/'
      path: '/deepseek'
      fullPath: '/deepseek'
      preLoaderRoute: typeof DeepseekIndexImport
      parentRoute: typeof rootRoute
    }
    '/game/': {
      id: '/game/'
      path: '/game'
      fullPath: '/game'
      preLoaderRoute: typeof GameIndexImport
      parentRoute: typeof rootRoute
    }
    '/blog/post/': {
      id: '/blog/post/'
      path: '/blog/post'
      fullPath: '/blog/post'
      preLoaderRoute: typeof BlogPostIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface LayoverRouteChildren {
  LayoverContactRoute: typeof LayoverContactRoute
}

const LayoverRouteChildren: LayoverRouteChildren = {
  LayoverContactRoute: LayoverContactRoute,
}

const LayoverRouteWithChildren =
  LayoverRoute._addFileChildren(LayoverRouteChildren)

interface SettingsRouteChildren {
  SettingsSettingsIdRoute: typeof SettingsSettingsIdRoute
  SettingsNotificationsRoute: typeof SettingsNotificationsRoute
  SettingsProfileRoute: typeof SettingsProfileRoute
}

const SettingsRouteChildren: SettingsRouteChildren = {
  SettingsSettingsIdRoute: SettingsSettingsIdRoute,
  SettingsNotificationsRoute: SettingsNotificationsRoute,
  SettingsProfileRoute: SettingsProfileRoute,
}

const SettingsRouteWithChildren = SettingsRoute._addFileChildren(
  SettingsRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof LayoverRouteWithChildren
  '/about': typeof AboutRoute
  '/settings': typeof SettingsRouteWithChildren
  '/contact': typeof LayoverContactRoute
  '/settings/$settingsId': typeof SettingsSettingsIdRoute
  '/settings/notifications': typeof SettingsNotificationsRoute
  '/settings/profile': typeof SettingsProfileRoute
  '/ai': typeof AiIndexRoute
  '/deepseek': typeof DeepseekIndexRoute
  '/game': typeof GameIndexRoute
  '/blog/post': typeof BlogPostIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof LayoverRouteWithChildren
  '/about': typeof AboutRoute
  '/settings': typeof SettingsRouteWithChildren
  '/contact': typeof LayoverContactRoute
  '/settings/$settingsId': typeof SettingsSettingsIdRoute
  '/settings/notifications': typeof SettingsNotificationsRoute
  '/settings/profile': typeof SettingsProfileRoute
  '/ai': typeof AiIndexRoute
  '/deepseek': typeof DeepseekIndexRoute
  '/game': typeof GameIndexRoute
  '/blog/post': typeof BlogPostIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_layover': typeof LayoverRouteWithChildren
  '/about': typeof AboutRoute
  '/settings': typeof SettingsRouteWithChildren
  '/_layover/contact': typeof LayoverContactRoute
  '/settings/$settingsId': typeof SettingsSettingsIdRoute
  '/settings/notifications': typeof SettingsNotificationsRoute
  '/settings/profile': typeof SettingsProfileRoute
  '/ai/': typeof AiIndexRoute
  '/deepseek/': typeof DeepseekIndexRoute
  '/game/': typeof GameIndexRoute
  '/blog/post/': typeof BlogPostIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/about'
    | '/settings'
    | '/contact'
    | '/settings/$settingsId'
    | '/settings/notifications'
    | '/settings/profile'
    | '/ai'
    | '/deepseek'
    | '/game'
    | '/blog/post'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/about'
    | '/settings'
    | '/contact'
    | '/settings/$settingsId'
    | '/settings/notifications'
    | '/settings/profile'
    | '/ai'
    | '/deepseek'
    | '/game'
    | '/blog/post'
  id:
    | '__root__'
    | '/'
    | '/_layover'
    | '/about'
    | '/settings'
    | '/_layover/contact'
    | '/settings/$settingsId'
    | '/settings/notifications'
    | '/settings/profile'
    | '/ai/'
    | '/deepseek/'
    | '/game/'
    | '/blog/post/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoverRoute: typeof LayoverRouteWithChildren
  AboutRoute: typeof AboutRoute
  SettingsRoute: typeof SettingsRouteWithChildren
  AiIndexRoute: typeof AiIndexRoute
  DeepseekIndexRoute: typeof DeepseekIndexRoute
  GameIndexRoute: typeof GameIndexRoute
  BlogPostIndexRoute: typeof BlogPostIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoverRoute: LayoverRouteWithChildren,
  AboutRoute: AboutRoute,
  SettingsRoute: SettingsRouteWithChildren,
  AiIndexRoute: AiIndexRoute,
  DeepseekIndexRoute: DeepseekIndexRoute,
  GameIndexRoute: GameIndexRoute,
  BlogPostIndexRoute: BlogPostIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layover",
        "/about",
        "/settings",
        "/ai/",
        "/deepseek/",
        "/game/",
        "/blog/post/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layover": {
      "filePath": "_layover.tsx",
      "children": [
        "/_layover/contact"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx",
      "children": [
        "/settings/$settingsId",
        "/settings/notifications",
        "/settings/profile"
      ]
    },
    "/_layover/contact": {
      "filePath": "_layover.contact.tsx",
      "parent": "/_layover"
    },
    "/settings/$settingsId": {
      "filePath": "settings/$settingsId.tsx",
      "parent": "/settings"
    },
    "/settings/notifications": {
      "filePath": "settings/notifications.tsx",
      "parent": "/settings"
    },
    "/settings/profile": {
      "filePath": "settings/profile.tsx",
      "parent": "/settings"
    },
    "/ai/": {
      "filePath": "ai/index.tsx"
    },
    "/deepseek/": {
      "filePath": "deepseek/index.tsx"
    },
    "/game/": {
      "filePath": "game/index.tsx"
    },
    "/blog/post/": {
      "filePath": "blog/post/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
