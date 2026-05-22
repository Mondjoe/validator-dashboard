import { NextResponse } from "next/server";
import { spawn } from "child_process";

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const child = spawn("tail", ["-f", "/var/log/syslog"]);

      child.stdout.on("data", (chunk) => {
        controller.enqueue(encoder.encode(`data: ${chunk}\n\n`));
      });

      child.stderr.on("data", (chunk) => {
        controller.enqueue(encoder.encode(`data: ERROR: ${chunk}\n\n`));
      });

      child.on("close", () => controller.close());
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
