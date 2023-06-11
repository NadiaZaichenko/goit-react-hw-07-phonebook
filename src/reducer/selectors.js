import { createSelector } from "@reduxjs/toolkit";

export const selectFilterValue = state => state.filter.value;
export const selectContactsItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContactsItems, selectFilterValue], (contactsItems, filter) => {
      return contactsItems.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase().trim())
)});
