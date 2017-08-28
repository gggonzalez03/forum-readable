const initialState = {
  categories: {
    categories: [],
    selectedCategory: undefined,
  },
  posts: {
    posts: undefined,
  },
  forms: {
    isAddPostFormOpen: false,
    isEditPostFormOpen: false,
    isDeleteConfirmationOpen: false,

    editPostTitle: "",
    editPostBody: "",
    editPostUsername: "",
    editPostCategory: "",
  },
  general: {
    isSideBarMenuOpen: false,
  }
}

export default initialState