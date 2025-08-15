// This file is for shared types, enums, and validation schemas between the web and api packages.

// Example of a shared type
export type UserProfile = {
  id: string;
  email: string;
  name: string;
};

// Example of Socket.IO event enums
export enum SocketEvents {
  // Client to Server
  CLIENT_READY = 'client:ready',
  JOIN_ROOM = 'client:join_room',

  // Server to Client
  SERVER_UPDATE = 'server:update',
  LOBBY_STATE = 'server:lobby_state',
  ERROR = 'server:error',
}
