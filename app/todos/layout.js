import TodosList from "./TodosList";

function RootLayout({ children }) {
  return (
    <main className="flex">
      <div>
        <TodosList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}

export default RootLayout;
