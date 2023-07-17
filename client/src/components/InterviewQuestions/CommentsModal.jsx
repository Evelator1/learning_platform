import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PostCommentsList from './CommentsList'; // Correct letter casing

function CommentsModal({ selectedPost, isOpen, onClose }) {
  if (!selectedPost) return null;

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedPost.author.username}'s Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{selectedPost.content}</p>
        <PostCommentsList post={selectedPost} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CommentsModal;
