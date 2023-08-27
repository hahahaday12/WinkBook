import React from 'react';

interface DeleteButtonProps {
  onDelete: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
 
return (
    <button onClick={onDelete}>
      삭제
    </button>
  );
};

export default DeleteButton;