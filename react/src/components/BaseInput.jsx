export default function BaseInput({ value, onChange, reset, ...props }) {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        type="text"
        {...props}
      />
    </div>
  );
}