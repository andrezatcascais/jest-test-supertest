"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor({ name, username, email }) {
        return Object.assign(this, {
            name,
            username,
            email,
        });
    }
    static create({ name, username, email }) {
        const user = new User({ username, name, email });
        return user;
    }
}
exports.User = User;
