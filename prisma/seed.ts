diff --git a/prisma.config.ts b/prisma.config.ts
new file mode 100644
index 0000000..b1f3abc
--- /dev/null
+++ b/prisma.config.ts
@@ -0,0 +1,15 @@
+import { defineConfig } from '@prisma/config';
+
+export default defineConfig({
+  migrations: {
+    seed: 'ts-node ./prisma/seed.ts',
+  },
+  datasource: {
+    url: process.env.DATABASE_URL!,
+  },
+});
+
diff --git a/prisma/seed.ts b/prisma/seed.ts
new file mode 100644
index 0000000..c3d9ef1
--- /dev/null
+++ b/prisma/seed.ts
@@ -0,0 +1,32 @@
+import { PrismaClient } from '@prisma/client';
+const prisma = new PrismaClient();
+
+async function main() {
+  const validators = [
+    { address: "YourValidatorAddress1" },
+    { address: "YourValidatorAddress2" },
+    { address: "YourValidatorAddress3" },
+    // Add more if needed
+  ];
+
+  for (const v of validators) {
+    await prisma.validator.upsert({
+      where: { address: v.address },
+      update: {},
+      create: { address: v.address },
+    });
+  }
+}
+
+main()
+  .then(() => prisma.$disconnect())
+  .catch(e => {
+    console.error(e);
+    prisma.$disconnect();
+  });