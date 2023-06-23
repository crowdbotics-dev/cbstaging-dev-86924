import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_tiwari_list = createAsyncThunk(
  "tiwaris/api_v1_tiwari_list",
  async payload => {
    const response = await apiService.api_v1_tiwari_list(payload)
    return response.data
  }
)
export const api_v1_tiwari_create = createAsyncThunk(
  "tiwaris/api_v1_tiwari_create",
  async payload => {
    const response = await apiService.api_v1_tiwari_create(payload)
    return response.data
  }
)
export const api_v1_tiwari_retrieve = createAsyncThunk(
  "tiwaris/api_v1_tiwari_retrieve",
  async payload => {
    const response = await apiService.api_v1_tiwari_retrieve(payload)
    return response.data
  }
)
export const api_v1_tiwari_update = createAsyncThunk(
  "tiwaris/api_v1_tiwari_update",
  async payload => {
    const response = await apiService.api_v1_tiwari_update(payload)
    return response.data
  }
)
export const api_v1_tiwari_partial_update = createAsyncThunk(
  "tiwaris/api_v1_tiwari_partial_update",
  async payload => {
    const response = await apiService.api_v1_tiwari_partial_update(payload)
    return response.data
  }
)
export const api_v1_tiwari_destroy = createAsyncThunk(
  "tiwaris/api_v1_tiwari_destroy",
  async payload => {
    const response = await apiService.api_v1_tiwari_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const tiwarisSlice = createSlice({
  name: "tiwaris",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_tiwari_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tiwari_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_tiwari_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tiwari_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tiwari_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_tiwari_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tiwari_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tiwari_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_tiwari_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tiwari_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tiwari_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_tiwari_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tiwari_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tiwari_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_tiwari_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tiwari_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tiwari_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_tiwari_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_tiwari_list,
  api_v1_tiwari_create,
  api_v1_tiwari_retrieve,
  api_v1_tiwari_update,
  api_v1_tiwari_partial_update,
  api_v1_tiwari_destroy,
  slice: tiwarisSlice
}
