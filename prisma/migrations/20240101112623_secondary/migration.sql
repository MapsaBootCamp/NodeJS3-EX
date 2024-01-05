-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "Employee"("email") ON DELETE CASCADE ON UPDATE CASCADE;
