import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(_error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8 font-sans">
                    <div className="max-w-2xl w-full bg-zinc-900 border border-red-500/30 rounded-2xl p-8 shadow-2xl">
                        <h1 className="text-3xl font-bold text-red-500 mb-4">Something went wrong.</h1>
                        <p className="text-zinc-400 mb-6">The application crashed. Here is the error details:</p>

                        <div className="bg-black/50 p-4 rounded-lg overflow-auto max-h-96 border border-white/10 font-mono text-sm">
                            <p className="text-red-400 font-bold mb-2">{this.state.error && this.state.error.toString()}</p>
                            <pre className="text-zinc-500 whitespace-pre-wrap">
                                {this.state.errorInfo && this.state.errorInfo.componentStack}
                            </pre>
                        </div>

                        <button
                            onClick={() => window.location.reload()}
                            className="mt-8 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors"
                        >
                            Reload Application
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
