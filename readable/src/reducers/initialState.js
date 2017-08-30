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
    editPostMode: false,
    editCommentMode: false,
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
    isEditPostFormOpen: false,
    isEditCommentFormOpen: false,
    isDeleteConfirmationOpen: false,
  }
}

export default initialState