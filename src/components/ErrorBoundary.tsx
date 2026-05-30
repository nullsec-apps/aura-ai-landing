import { Component, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props { children: ReactNode }
interface State { hasError: boolean }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#070708] px-6 text-center">
          <h1 className="font-display text-4xl font-700 tracking-tighter text-[#F4F5F7]">Something dimmed.</h1>
          <p className="mt-3 max-w-sm text-sm text-[#7C7F86]">The halo flickered. Refresh to restore presence.</p>
          <Button onClick={() => window.location.reload()} className="mt-8 h-11 rounded-full bg-[#F4F5F7] px-7 text-sm font-500 text-[#070708] hover:bg-white">
            Reload
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}
