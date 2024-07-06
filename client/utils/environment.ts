type Server = 'LOCAL' | undefined

const SERVER = process.env.NEXT_PUBLIC_ENV as Server

const urlConfig = {
    LOCAL: {
        GATEWAY_URL: 'http://localhost:8080/api/auth',
    },
}

function getUrlConfig(server: Server) {
    if (!server) {
        return urlConfig
    }
    return urlConfig[server] || ''
}
export const env = getUrlConfig(SERVER)
