'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
      } else {
        setUser(session.user)
        setLoading(false)
      }
    }
    getUser()
  }, [router, supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">AI Receptionist</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">{user?.email}</span>
              <button
                onClick={handleSignOut}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
          <p className="mt-2 text-gray-600">Manage your AI receptionist and phone numbers</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-1">Phone Numbers</div>
            <div className="text-3xl font-bold text-gray-900">0</div>
            <div className="text-sm text-green-600 mt-1">↑ Set up your first number</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-1">Total Calls</div>
            <div className="text-3xl font-bold text-gray-900">0</div>
            <div className="text-sm text-gray-500 mt-1">This month</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-1">Minutes Used</div>
            <div className="text-3xl font-bold text-gray-900">0</div>
            <div className="text-sm text-gray-500 mt-1">of 500 available</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm text-gray-600 mb-1">AI Assistants</div>
            <div className="text-3xl font-bold text-gray-900">0</div>
            <div className="text-sm text-indigo-600 mt-1">→ Create your first AI</div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-8">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">📞</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Get Your Phone Number</h3>
                <p className="text-gray-600">Choose a local or toll-free number</p>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 font-medium transition">
              Browse Numbers
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-8">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">🤖</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Setup Your AI</h3>
                <p className="text-gray-600">Train your AI receptionist</p>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 font-medium transition">
              Create AI Assistant
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="text-center py-12">
              <div className="text-gray-400 text-5xl mb-4">📊</div>
              <p className="text-gray-600">No activity yet</p>
              <p className="text-sm text-gray-500 mt-2">Set up your first phone number to get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
