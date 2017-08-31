const initialState = {
  categories: {
    categories: [],
    selectedCategory: '',
  },
  posts: {
    showingPosts: [],
    openedPost: {},
    editingPost: {},
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
  }
}

export default initialState