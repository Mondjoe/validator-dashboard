import { ALLOWED_COMMANDS } from "@/lib/allowedCommands";
import { exec } from "child_process";

export async function POST(req: Request) {
  const { chain, command } = await req.json();

  const allowed = ALLOWED_COMMANDS[chain]?.[command];

  if (!allowed) {
    return Response.json({
      ok: false,
      error: "Command not allowed",
    });
  }

  return new Promise((resolve) => {
    exec(allowed, (err, stdout, stderr) => {
      resolve(
        Response.json({
          ok: true,
          output: stdout || stderr || err?.message,
        })
      );
    });
  });
}