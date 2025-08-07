export class TextUtil {
    static getLowerCaseCoinName(name: string): string {
        return name
            .split("")
            .map((item) => item.toLowerCase())
            .join("");
    }
    static getUserId(email: string) {
        return email.split("@")[0];
    }
    static pathToTitle(pathname: string) {
        return pathname
            .replace(/^\/+/, "")
            .replace(/([A-Z])/g, " $1")
            .replace(/-/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }
}
