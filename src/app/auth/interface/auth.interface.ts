
export interface AuthResponse {
    ok: boolean;
    user: string;
    message: string;
    token: string;
}

export interface User {
    user: string;
    password: string;
    uid: string;
}
