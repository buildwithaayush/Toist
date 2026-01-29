import Todoinput from "./components/todoinput";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Todos</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p>Todo app will go here</p>
          <Todoinput/>
        </div>
      </div>
    </main>
  )
}