import {
  pgTable,
  serial,
  text,
  boolean,
  integer,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", [
  "student",
  "teacher",
]);

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),

  email: text("email").notNull().unique(),
  name: text("name"),
  image: text("image"),

  phone: text("phone"),
  grade: integer("grade"),

  role: roleEnum("role").default("student").notNull(),

  isSetupDone: boolean("is_setup_done").default(false).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});