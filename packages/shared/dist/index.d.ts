export type UserProfile = {
    id: string;
    email: string;
    name: string;
};
export declare enum SocketEvents {
    CLIENT_READY = "client:ready",
    JOIN_ROOM = "client:join_room",
    SERVER_UPDATE = "server:update",
    LOBBY_STATE = "server:lobby_state",
    ERROR = "server:error"
}
//# sourceMappingURL=index.d.ts.map
