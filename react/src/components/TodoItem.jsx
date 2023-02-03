import { useState } from 'react';
import useInput from '@/hooks/useInput';
import BaseInput from '@/components/BaseInput';
import useTodoList from '@/hooks/useTodoList';

export default function TodoItem({ index, title }) {
  const { updateTodo, removeTodo } = useTodoList();
  const [isUpdate, setIsUpdate] = useState(false);
  const updateInput = useInput(title);
  
  function updateState() {
    setIsUpdate(true);
  }

  function cancelUpdate() {
    setIsUpdate(false);
    updateInput.reset(title);
  }
  
  function updateItem() {
    const updateTitle = updateInput.value;

    if (!updateInput.value) {
      alert('값을 입력해주세요.');
      return;
    }
    
    updateTodo({
      index,
      title: updateTitle,
    });

    setIsUpdate(false);
  }
  
  function removeItem() {
    removeTodo(index);
  }

  return (
    <article key={index}>
      {isUpdate ? (
        <>
          <BaseInput {...updateInput} />
          <button type="button" onClick={updateItem}>수정</button>
        </>
      ) : (
        <>
          {title}
          <button type="button" onClick={updateState}>수정</button>
        </>
      )}
      {isUpdate ? (
        <button type="button" onClick={cancelUpdate}>취소</button>
      ) : (
        <button type="button" onClick={removeItem}>삭제</button>)
      }
    </article>
  );
}