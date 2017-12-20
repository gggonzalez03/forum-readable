const initialState = {
  categories: {
    categories: [],
    selectedCategory: '',
  },
  posts: {
    showingPosts: [],
    sortBy: "timestamp",
    sortOrder: "ascending",
  },
  comments: {
    comments:{}
  },
  forms: {
    isEditPostFormOpen: false,
    isEditCommentFormOpen: true,
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
      editCommentAuthor: "",
    },
  },
  general: {
    isSideBarMenuOpen: false,
    isSortSelectionOpen: false,
  }
}

export default initialState