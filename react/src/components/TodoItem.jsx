import { useState } from 'react';
import useInput from '@/hooks/useInput';
import BaseInput from "@/components/BaseInput.jsx";
import { updateTodoList } from '@/store/todoSlice';
import { useDispatch } from 'react-redux';

export default function TodoItem({ index, title }) {
  const dispatch = useDispatch();
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
    if (!updateInput.value) {
      alert('값을 입력해주세요.');
      return;
    }

    dispatch(
      updateTodoList({
        index,
        title: updateInput.value,
      })
    );

    setIsUpdate(false);
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
        <button type="button">삭제</button>)
      }
    </article>
  );
}