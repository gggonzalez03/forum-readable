const initialState = {
  categories: {
    categories: [],
    selectedCategory: '',
  },
  posts: {
    showingPosts: [],
    editingPost: {},
    sortBy: "timestamp",
    sortOrder: "ascending",
  },
  comments: {
  },
  forms: {
    isEditPostFormOpen: false,
    isEditCommentFormOpen: false,
    isDeleteConfirmationOpen: false,
    isDeleteCommentConfirmationOpen: false,
    editPostForm: {
      editPostTitle: "",
      editPostBody: "",
      editPostUsername: "",
      editPostCategory: "",
    },
    editCommentForm: {
      editCommentId: "",
      editCommentBody: "",
    },
  },
  general: {
    isSideBarMenuOpen: false,
    isSortSelectionOpen: false,
  }
}

export default initialState