export const BackendApiRoutes = {
  user: {
    me: {
      methods: ['get'],
      path: '/user/me',
    },
    root: {
      methods: ['get', 'post'],
      path: '/user',
    },
    accessibilityFeatures: {
      methods: ['get'],
      path: '/user/{userId}/accessibility-features',
    },
    byUserId: {
      methods: ['get'],
      path: '/user/{userId}',
    },
    checkEmail: {
      methods: ['get'],
      path: '/user/check-email',
    },
    checkPhone: {
      methods: ['get'],
      path: '/user/check-phone',
    },
  },
  customerProfile: {
    root: {
      methods: ['get', 'post'],
      path: '/customer-profile',
    },
    byCustomerId: {
      methods: ['get'],
      path: '/customer-profile/{customerId}',
    },
  },
  driverProfile: {
    root: {
      methods: ['get', 'post'],
      path: '/driver-profile',
    },
    byDriverId: {
      methods: ['get'],
      path: '/driver-profile/{driverId}',
    },
    activeVehicle: {
      methods: ['patch'],
      path: '/driver-profile/{driverId}/active-vehicle',
    },
  },
  auth: {
    signIn: {
      methods: ['post'],
      path: '/auth/sign-in',
    },
    refresh: {
      methods: ['post'],
      path: '/auth/refresh',
    },
    signOut: {
      methods: ['post'],
      path: '/auth/sign-out',
    },
    switchRole: {
      methods: ['post'],
      path: '/auth/switch-role',
    },
  },
  driverDocument: {
    root: {
      methods: ['post'],
      path: '/driver-document',
    },
    byDocumentId: {
      methods: ['patch', 'patch', 'get', 'patch'],
      path: '/driver-document/approve/{documentId}',
    },
    byDriverId: {
      methods: ['get'],
      path: '/driver-document/driver-profile/{driverId}',
    },
  },
  vehicleCategory: {
    root: {
      methods: ['get', 'post'],
      path: '/vehicle-category',
    },
    byVehicleCategoryId: {
      methods: ['get'],
      path: '/vehicle-category/{vehicleCategoryId}',
    },
  },
  vehicle: {
    root: {
      methods: ['get', 'post'],
      path: '/vehicle',
    },
    accessibilityFeatures: {
      methods: ['get'],
      path: '/vehicle/{vehicleId}/accessibility-features',
    },
    byVehicleId: {
      methods: ['get'],
      path: '/vehicle/{vehicleId}',
    },
  },
  accessibilityFeature: {
    root: {
      methods: ['get', 'post'],
      path: '/accessibility-feature',
    },
    byId: {
      methods: ['get', 'put'],
      path: '/accessibility-feature/{id}',
    },
  },
  userAccessibility: {
    byFeatureId: {
      methods: ['post', 'delete'],
      path: '/user-accessibility/user/{userId}/feature/{featureId}',
    },
  },
  vehicleAccessibility: {
    byFeatureId: {
      methods: ['post', 'delete'],
      path: '/vehicle-accessibility/vehicle/{vehicleId}/feature/{featureId}',
    },
  },
  driverCommission: {
    commission: {
      methods: ['post', 'get'],
      path: '/driver/{driverId}/commission',
    },
    byId: {
      methods: ['put'],
      path: '/driver/{driverId}/commission/{id}',
    },
    active: {
      methods: ['get'],
      path: '/driver/{driverId}/commission/active',
    },
  },
  reservation: {
    root: {
      methods: ['post', 'get'],
      path: '/reservation',
    },
    byId: {
      methods: ['patch', 'get'],
      path: '/reservation/{id}',
    },
    cancel: {
      methods: ['patch'],
      path: '/reservation/{id}/cancel',
    },
    assignDriver: {
      methods: ['patch'],
      path: '/reservation/{id}/assign-driver',
    },
    unassignDriver: {
      methods: ['patch'],
      path: '/reservation/{id}/unassign-driver',
    },
    reschedule: {
      methods: ['patch'],
      path: '/reservation/{id}/reschedule',
    },
    inProgress: {
      methods: ['patch'],
      path: '/reservation/{id}/in-progress',
    },
    completed: {
      methods: ['patch'],
      path: '/reservation/{id}/completed',
    },
    active: {
      methods: ['get', 'get'],
      path: '/reservation/customer/{customerId}/active',
    },
    history: {
      methods: ['get', 'get'],
      path: '/reservation/customer/{customerId}/history',
    },
    arrived: {
      methods: ['patch'],
      path: '/reservation/{id}/arrived',
    },
    passengerOnboard: {
      methods: ['patch'],
      path: '/reservation/{id}/passenger-onboard',
    },
    start: {
      methods: ['patch'],
      path: '/reservation/{id}/start',
    },
    complete: {
      methods: ['patch'],
      path: '/reservation/{id}/complete',
    },
    packagePickedUp: {
      methods: ['patch'],
      path: '/reservation/{id}/package-picked-up',
    },
    packageDelivered: {
      methods: ['patch'],
      path: '/reservation/{id}/package-delivered',
    },
    eta: {
      methods: ['patch'],
      path: '/reservation/{id}/eta',
    },
    events: {
      methods: ['get'],
      path: '/reservation/{id}/events',
    },
    byDriverId: {
      methods: ['get'],
      path: '/reservation/available/driver/{driverId}',
    },
  },
  driverLocation: {
    byDriverId: {
      methods: ['post'],
      path: '/driver-location/driver/{driverId}',
    },
    latest: {
      methods: ['get'],
      path: '/driver-location/driver/{driverId}/latest',
    },
  },
} as const;
