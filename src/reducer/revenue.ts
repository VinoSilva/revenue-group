// Import libraries
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Import types
import RevenueGroup from "@/types/revenue-group";

// Import data
import fields from "@/data/fields";
import operators from "@/data/operators";

// Import store type
import { TStore } from "@/store";
import { generateUniqueId } from "@/functions/id";

export interface revenueState {
    operators: string[];
    fields: string[];
    revenueGroups: RevenueGroup[];
}

const initialState: revenueState = {
    fields,
    operators,
    revenueGroups: []
}

// Make type for action payloads
type TAddRevenueGroup = {
    newRevenueGroup: RevenueGroup
}

type TRemoveRevenueGroup = {
    groupRemoveIndex: number
}

type TRemoveRule = {
    ruleRemoveIndex: number,
    groupIndex: number
}

const revenueSlice = createSlice({
    name: "revenueGroup",
    initialState,
    reducers: {
        addRevenueGroup: (state: revenueState, { payload }: PayloadAction<TAddRevenueGroup>) => {
            const { newRevenueGroup } = payload;

            // Assign unique id for key 
            newRevenueGroup.id = generateUniqueId();

            state.revenueGroups.push(newRevenueGroup);
        },
        removeRevenueGroup: (state: revenueState, { payload }: PayloadAction<TRemoveRevenueGroup>) => {
            const { groupRemoveIndex } = payload;

            state.revenueGroups.splice(groupRemoveIndex, 1);
        },
        removeRule: (state: revenueState, { payload }: PayloadAction<TRemoveRule>) => {
            const {
                groupIndex,
                ruleRemoveIndex
            } = payload;

            const revenueGroup = state.revenueGroups[groupIndex];

            if (revenueGroup) {
                revenueGroup.rules.splice(ruleRemoveIndex, 1);
            }
        }
    }
})

export const selectAllOperators = (state: TStore) => state.revenues.operators;
export const selectAllFields = (state: TStore) => state.revenues.fields;
export const selectAllRevenues = (state: TStore) => state.revenues.revenueGroups;

export default revenueSlice.reducer;