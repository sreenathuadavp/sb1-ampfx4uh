import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Home Services', icon: '🏠' },
  { id: 2, name: 'Electronics', icon: '📱' },
  { id: 3, name: 'Vehicle Services', icon: '🚗' },
  { id: 4, name: 'Professional Services', icon: '👔' },
];

export default function Home() {
  return (
    <div>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Local Services in Chittoor</h1>
        <p className="text-gray-600">Find and book trusted services at your doorstep</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/services?category=${category.name}`}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="font-medium">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">1️⃣</div>
            <h3 className="font-medium mb-2">Choose a Service</h3>
            <p className="text-gray-600">Browse through our wide range of services</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">2️⃣</div>
            <h3 className="font-medium mb-2">Book Appointment</h3>
            <p className="text-gray-600">Select your preferred time and date</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">3️⃣</div>
            <h3 className="font-medium mb-2">Get Service</h3>
            <p className="text-gray-600">Our professionals will reach you</p>
          </div>
        </div>
      </section>
    </div>
  );
}