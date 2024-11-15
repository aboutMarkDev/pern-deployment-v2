-- CreateTable
CREATE TABLE "MyNewUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "MyNewUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MyNewUser_username_key" ON "MyNewUser"("username");
