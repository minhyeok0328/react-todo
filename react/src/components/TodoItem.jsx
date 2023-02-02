export default function TodoItem({ index, title }) {
  return (
    <article key={index}>
      {title}
      <button type="button">수정</button>
      <button type="button">삭제</button>
    </article>
  );
}