export const TOGGLE_SIDE_BAR_MENU = 'TOGGLE_SIDE_BAR_MENU'
export const TOGGLE_SORT_SELECTION = 'TOGGLE_SORT_SELECTION'

export function toggleSideBarMenu() {
  return {
    type: TOGGLE_SIDE_BAR_MENU
  }
}

export function toggleSortSelection() {
  return {
    type: TOGGLE_SORT_SELECTION
  }
}