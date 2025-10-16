export const BackendApiRoutes = {
  auth: {
    signIn: {
      methods: ['post'] as const,
      path: '/core/auth/sign-in',
    },
    refresh: {
      methods: ['post'] as const,
      path: '/core/auth/refresh',
    },
    signOut: {
      methods: ['post'] as const,
      path: '/core/auth/sign-out',
    },
    switchRole: {
      methods: ['post'] as const,
      path: '/core/auth/switch-role',
    },
  },

  user: {
    getMe: {
      methods: ['get'] as const,
      path: '/core/user/me',
    },
    getAll: {
      methods: ['get'] as const,
      path: '/core/user',
    },
    getById: {
      methods: ['get'] as const,
      path: '/core/user/:userId',
    },
    create: {
      methods: ['post'] as const,
      path: '/core/user',
    },
    checkEmail: {
      methods: ['get'] as const,
      path: '/core/user/check-email',
    },
    checkPhone: {
      methods: ['get'] as const,
      path: '/core/user/check-phone',
    },
  },
} as const;

export type BackendApiRoutes = typeof BackendApiRoutes;
