export class TextUtil {
    static getLowerCaseCoinName(name: string): string {
        return name
            .split("")
            .map((item) => item.toLowerCase())
            .join("");
    }
}
