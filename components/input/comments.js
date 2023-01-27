import {useContext, useEffect, useState} from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import notificationContext from "../../store/notificationContext";

function Comments({eventId}) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false)
  const {showNotification} = useContext(notificationContext)

  useEffect(() => {
    if(showComments){
      setIsFetchingComments(true)
        fetch('/api/comments')
            .then(reponse => reponse.json())
            .then(data => {
              setComments(data.comments)
            })
            .finally(() => setIsFetchingComments(false))
    }
  }, [showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    showNotification({title: 'Pending', message: 'Adding comment...', status: 'pending'})
    fetch('/api/comments/' + eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
        .then(response => {
          if(response.ok){
            return response.json()
          }
          return  response.json().then(data => {
            throw new Error(data.message || 'Something went wrong')
          })
        })
        .then(() => {
          showNotification({title: 'Success', message: "Comment is added", status: "success"})
        })
        .catch(error => {
          showNotification({title: 'Error', message: error.message || 'Error occurred', status: 'error'})
        })
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}

      {isFetchingComments ?  <p>Loading...</p> : showComments && <CommentList items={comments} /> }
    </section>
  );
}

export default Comments;
