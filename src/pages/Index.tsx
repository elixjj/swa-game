const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to Your App
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This is a modern React application built with Vite, TypeScript, and Tailwind CSS.
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Deploy
          </h2>
          <p className="text-gray-600">
            Your application is configured and ready for deployment with all the modern tools and best practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;