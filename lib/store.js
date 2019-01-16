export const getComments = () => {
  const storedComments = localStorage.comments
  let comments = []

  if (storedComments) {
    comments = JSON.parse(storedComments)
  }

  return comments
}

export const saveComments = comments => localStorage.setItem('comments', JSON.stringify(comments))