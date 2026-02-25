import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">AI Receptionist</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link href="/signup" className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            Your AI-Powered
            <span className="block text-indigo-600">Business Receptionist</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Never miss a call again. Our AI receptionist answers calls, schedules appointments, and handles customer inquiries 24/7.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/signup" className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-lg text-lg font-medium shadow-lg transition">
              Start Free Trial
            </Link>
            <Link href="#features" className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-medium shadow-lg transition border-2 border-indigo-600">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Everything You Need</h2>
            <p className="mt-4 text-xl text-gray-600">Powerful features for modern businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-indigo-600 text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">AI Phone System</h3>
              <p className="text-gray-600">Get your own phone number with intelligent call handling powered by advanced AI</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-indigo-600 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">Custom AI Assistant</h3>
              <p className="text-gray-600">Train your AI to understand your business and respond to customers naturally</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-indigo-600 text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-2">Appointment Scheduling</h3>
              <p className="text-gray-600">Automatically book appointments and sync with your calendar</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-indigo-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">Track calls, conversations, and customer interactions in real-time</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-indigo-600 text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
              <p className="text-gray-600">Connect with your existing tools and workflows seamlessly</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-indigo-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Setup</h3>
              <p className="text-gray-600">Get started in minutes with our simple setup wizard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Simple Pricing</h2>
            <p className="mt-4 text-xl text-gray-600">Choose the plan that fits your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-4">£29<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">✓ 1 Phone Number</li>
                <li className="flex items-center">✓ 500 Minutes/mo</li>
                <li className="flex items-center">✓ Basic AI Training</li>
                <li className="flex items-center">✓ Email Support</li>
              </ul>
              <Link href="/signup" className="block text-center bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium">
                Get Started
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-indigo-600 transform scale-105">
              <div className="text-center mb-4">
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-4">£79<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">✓ 3 Phone Numbers</li>
                <li className="flex items-center">✓ 2000 Minutes/mo</li>
                <li className="flex items-center">✓ Advanced AI Training</li>
                <li className="flex items-center">✓ Priority Support</li>
                <li className="flex items-center">✓ Analytics Dashboard</li>
              </ul>
              <Link href="/signup" className="block text-center bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium">
                Get Started
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-4">£199<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">✓ Unlimited Numbers</li>
                <li className="flex items-center">✓ Unlimited Minutes</li>
                <li className="flex items-center">✓ Custom AI Training</li>
                <li className="flex items-center">✓ 24/7 Phone Support</li>
                <li className="flex items-center">✓ Custom Integrations</li>
              </ul>
              <Link href="/signup" className="block text-center bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">AI Receptionist</h4>
              <p className="text-gray-400">Your 24/7 AI-powered business phone system</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Receptionist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
