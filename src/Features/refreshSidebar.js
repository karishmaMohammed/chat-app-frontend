import { createSlice } from "@reduxjs/toolkit";

export const refreshSidebar = createSlice({
    name: "refreshSidebar",
    initialState: true,
    reducers: {
        refreshSidebarFunny : (state) => {
            console.log("Refreshing from Redux");
            return (state = !state);
        },
    },
});

export const { refreshSidebarFunny } = refreshSidebar.actions;
export default refreshSidebar.reducer;