"use client";

export default function TestPage() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("It works!");
      }}
    >
      <button type="submit">
        Click Me
      </button>
    </form>
  );
}