import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Log to console so it's visible in preview console
    console.error('UI ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
          <div className="max-w-xl w-full border border-white/10 rounded-xl p-6 bg-[#0A0A0A]">
            <h1 className="text-xl font-semibold">Something went wrong</h1>
            <p className="mt-2 text-sm text-white/70 break-words">
              {String(this.state.error)}
            </p>
            <p className="mt-4 text-xs text-white/50">Check the browser console for details.</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
