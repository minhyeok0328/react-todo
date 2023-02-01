export default function TodoItem({ index, title }) {
  return `
    <li data-index="${index}">
      <input type="checkbox" name="done">
      <input type="text" name="update" class="hide" />
      ${title}
      <button type="button" class="update">수정</button>
      <button type="button" class="delete">삭제</button>
    </li>
  `;
}