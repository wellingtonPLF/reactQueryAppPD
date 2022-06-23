
class SessionStorageUtil {

    getToken(tokenName: string) {
        const result =  sessionStorage.getItem(tokenName)
        if(result){
            return result
        }
        return undefined;
    }
    
    setToken(tokenName: string, token: number) {
        sessionStorage.setItem(tokenName, token.toString());
        console.log("Token Add");
    }

    removeToken(token: number) {
        sessionStorage.removeItem(token.toString());
        sessionStorage.clear();
    }
}

export default new SessionStorageUtil();