import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST(req: Request) {
  const { command } = await req.json();

  return new Promise((resolve) => {
    exec(command, (err, stdout, stderr) => {
      resolve(
        NextResponse.json({
          output: stdout || stderr || err?.message,
        })
      );
    });
  });
}