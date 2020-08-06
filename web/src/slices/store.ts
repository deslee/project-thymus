import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { userReducer } from "./userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const rootReducer = combineReducers({
    user: userReducer
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;