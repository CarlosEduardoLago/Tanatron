"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

interface EmbedErrorBoundaryProps {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackMessage?: string;
  fallbackHref?: string;
  fallbackLinkText?: string;
}

interface EmbedErrorBoundaryState {
  hasError: boolean;
}

/** Captura erros em embeds (YouTube, Spotify, Instagram) e exibe fallback com link direto */
export class EmbedErrorBoundary extends Component<
  EmbedErrorBoundaryProps,
  EmbedErrorBoundaryState
> {
  constructor(props: EmbedErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): EmbedErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("[EmbedErrorBoundary]", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const {
        fallbackTitle = "Conteúdo indisponível",
        fallbackMessage = "Não foi possível carregar este conteúdo.",
        fallbackHref,
        fallbackLinkText = "Acessar diretamente",
      } = this.props;

      return (
        <div
          className="flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-lg border border-page-border bg-page-surface/50 px-6 py-8 text-center"
          role="alert"
        >
          <p className="text-sm font-medium text-zinc-400">{fallbackTitle}</p>
          <p className="text-sm text-zinc-500">{fallbackMessage}</p>
          {fallbackHref && (
            <a
              href={fallbackHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-amber-500 underline hover:text-amber-400"
            >
              {fallbackLinkText}
            </a>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
