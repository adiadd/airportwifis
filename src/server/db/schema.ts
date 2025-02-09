import {
  bigint,
  decimal,
  int,
  singlestoreTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/singlestore-core";

export const airports = singlestoreTable("airports", {
  id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  code: varchar("code", { length: 3 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  averageRating: decimal("average_rating", { precision: 3, scale: 2 }).default(
    "0.00",
  ),
  submissionCount: int("submission_count").default(0),
  latitude: decimal("latitude", { precision: 10, scale: 8 }),
  longitude: decimal("longitude", { precision: 11, scale: 8 }),
  timezone: varchar("timezone", { length: 50 }),
  country: varchar("country", { length: 2 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});

export const submissions = singlestoreTable("submissions", {
  id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
  airportId: bigint("airport_id", { mode: "bigint" }).notNull(),
  userId: bigint("user_id", { mode: "bigint" }),
  downloadSpeed: decimal("download_speed", {
    precision: 10,
    scale: 2,
  }).notNull(),
  uploadSpeed: decimal("upload_speed", { precision: 10, scale: 2 }).notNull(),
  rating: int("rating").notNull(),
  comment: text("comment"),
  imageUrl: varchar("image_url", { length: 1024 }),
  ipAddress: varchar("ip_address", { length: 45 }),
  userAgent: text("user_agent"),
  networkType: varchar("network_type", { length: 10 })
    .notNull()
    .default("unknown"),
  status: varchar("status", { length: 10 }).notNull().default("approved"),
  upvotes: int("upvotes").default(0),
  downvotes: int("downvotes").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});
