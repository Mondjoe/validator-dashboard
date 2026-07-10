diff --git a/prisma.config.ts b/prisma.config.ts
deleted file mode 100644
index b1f3abc..0000000
--- a/prisma.config.ts
+++ /dev/null
@@ -1,15 +0,0 @@
-import { defineConfig } from '@prisma/config';
-
-export default defineConfig({
-  migrations: {
-    seed: 'ts-node ./prisma/seed.ts',
-  },
-  datasource: {
-    url: process.env.DATABASE_URL!,
-  },
-});
-
diff --git a/prisma.config.js b/prisma.config.js
new file mode 100644
index 0000000..d4f8abc
--- /dev/null
+++ b/prisma.config.js
@@ -0,0 +1,15 @@
+const { defineConfig } = require('@prisma/config');
+
+module.exports = defineConfig({
+  migrations: {
+    seed: 'ts-node ./prisma/seed.ts',
+  },
+  datasource: {
+    url: process.env.DATABASE_URL,
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