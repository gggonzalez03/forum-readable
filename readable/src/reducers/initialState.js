const initialState = {
  categories: {
    categories: [],
    selectedCategory: '',
  },
  posts: {
    showingPosts: [],
    openedPost: {},
    editingPost: {},
    sortBy: "timestamp",
    sortOrder: "ascending",
  },
  comments: {
    openedPostComments: [],
  },
  forms: {
    isEditPostFormOpen: false,
    isEditCommentFormOpen: false,
    isDeleteConfirmationOpen: false,
    editPostForm: {
      editPostTitle: "",
      editPostBody: "",
      editPostUsername: "",
      editPostCategory: "",
    },
    editCommentForm: {
      editCommentBody: "",
      editCommentOwner: "",
    },
    editingPost: {},
  },
  general: {
    isSideBarMenuOpen: false,
    isSortSelectionOpen: false,
  }
}

export default initialState