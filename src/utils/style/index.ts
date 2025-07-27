import { IStyle } from "./types";

export class StyleUtil {
    static getRequirementStyle(key: string, passwordErrors: string[] | undefined, styles: IStyle) {
        const hasError = passwordErrors?.includes(key);
        return hasError ? { ...styles.requirement, ...styles.requirementError } : styles.requirement;
    }
}
