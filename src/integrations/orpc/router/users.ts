import { count, desc, eq } from "drizzle-orm";
import { schema } from "@/integrations/drizzle";
import { db } from "@/integrations/drizzle/client";
import { adminProcedure } from "../context";
import { usersDto } from "../dto/users";

export const usersRouter = {
	list: adminProcedure.output(usersDto.list.output).handler(async () => {
		const users = await db
			.select({
				id: schema.user.id,
				name: schema.user.name,
				email: schema.user.email,
				image: schema.user.image,
				emailVerified: schema.user.emailVerified,
				createdAt: schema.user.createdAt,
				resumeCount: count(schema.resume.id),
			})
			.from(schema.user)
			.leftJoin(schema.resume, eq(schema.user.id, schema.resume.userId))
			.groupBy(schema.user.id)
			.orderBy(desc(schema.user.createdAt));

		return users;
	}),
};
