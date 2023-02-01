import { addEvent } from '@/core/Render';
import useTodoList from '@/hooks/useTodoList';
import { selector } from '@/utils';

export default function TodoItem({ index, title }) {
  const { patchTodoList } = useTodoList();
  function openUpdatePopup() {
    const $input = selector(`[data-index="${index}"] [name="todo-update"]`);
    const updateText = $input.value;

    if (!updateText.length) {
      alert('값을 입력하세요.');
      return;
    }

    patchTodoList({
      index,
      title: updateText,
    });
  }

  addEvent('click', `[data-index='${index}'] .update`, openUpdatePopup);

  return `
    <li data-index="${index}">
      <input type="checkbox" name="done">
      <input type="text" name="todo-update" value="${title}" />
      <button type="button" class="update">수정</button>
      <button type="button" class="delete">삭제</button>
    </li>
  `;
}