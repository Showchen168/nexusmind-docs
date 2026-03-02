import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">
          NexusMind
        </h1>
        <p className="text-xl text-fd-muted-foreground mb-2">
          AI 驅動的全棧知識管理與技能執行平台
        </p>
        <p className="text-fd-muted-foreground mb-8">
          整合 Adaptive RAG、GraphRAG 知識圖譜、多引擎研究、容器化技能執行與 Telegram 機器人
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/docs"
            className="rounded-lg bg-fd-primary px-6 py-3 text-fd-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            開始閱讀
          </Link>
          <Link
            href="https://github.com/Showchen168/nexusmind"
            className="rounded-lg border border-fd-border px-6 py-3 font-medium hover:bg-fd-accent transition-colors"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}
