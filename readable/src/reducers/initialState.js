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
    editingComment: {}
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
      editCommentBody: "",
      editCommentAuthor: "",
    },
    editingPost: {},
  },
  general: {
    isSideBarMenuOpen: false,
    isSortSelectionOpen: false,
  }
}

export default initialState