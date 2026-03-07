import z from "zod";

export const usersDto = {
	list: {
		output: z.array(
			z.object({
				id: z.string(),
				name: z.string(),
				email: z.string(),
				image: z.string().nullable(),
				emailVerified: z.boolean(),
				createdAt: z.date(),
				resumeCount: z.number(),
			}),
		),
	},
};
