// This file is for shared types, enums, and validation schemas between the web and api packages.
// Example of Socket.IO event enums
export var SocketEvents;
(function (SocketEvents) {
    // Client to Server
    SocketEvents["CLIENT_READY"] = "client:ready";
    SocketEvents["JOIN_ROOM"] = "client:join_room";
    // Server to Client
    SocketEvents["SERVER_UPDATE"] = "server:update";
    SocketEvents["LOBBY_STATE"] = "server:lobby_state";
    SocketEvents["ERROR"] = "server:error";
})(SocketEvents || (SocketEvents = {}));
//# sourceMappingURL=index.js.map
