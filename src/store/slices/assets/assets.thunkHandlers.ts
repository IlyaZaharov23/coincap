interface ThunkHandlersOptions<T> {
    stateField: keyof T;
}

export const createThunkHandlers = <T, P = unknown>(options: ThunkHandlersOptions<T>) => ({
    pending: (state: T & { loading: boolean; error: string | null }) => {
        state.loading = true;
        state.error = null;
    },
    fulfilled: (state: T & { loading: boolean }, action: { payload: P }) => {
        (state as T)[options.stateField] = action.payload as T[keyof T];
        state.loading = false;
    },
    rejected: (state: T & { loading: boolean; error: string | null }, action: { payload: unknown }) => {
        state.error = typeof action.payload === "string" ? action.payload : "Unknown error";
        state.loading = false;
    },
});
