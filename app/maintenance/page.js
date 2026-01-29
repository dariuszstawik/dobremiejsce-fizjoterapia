export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-10 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <span className="text-6xl">🛠️</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Strona w budowie
        </h1>
        <p className="text-gray-600">Zapraszamy wkrótce! Tel. 577611464</p>
        <div className="pt-4">
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-orange  w-2/3 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
