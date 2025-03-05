import { configureStore } from '@reduxjs/toolkit'
import cartSystem from './slice.js'
import roosterSlice from './rooster.js'
import eggslice from './eggslice.js'
import chickSlice from './chickslice.js'
import homeSlice from './homeslice.js'
import poultrySlice from './poultrySlice.js';

 const store = configureStore({
  reducer: {
    cart : cartSystem,
    rooster : roosterSlice,
    eggs  : eggslice,
    chick : chickSlice,
    home : homeSlice,
    poultry : poultrySlice
  },
})

export default store
