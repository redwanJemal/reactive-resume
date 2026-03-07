import { aiRouter } from "./ai";
import { authRouter } from "./auth";
import { blogRouter } from "./blog";
import { flagsRouter } from "./flags";
import { printerRouter } from "./printer";
import { resumeRouter } from "./resume";
import { statisticsRouter } from "./statistics";
import { storageRouter } from "./storage";
import { usersRouter } from "./users";

export default {
	ai: aiRouter,
	auth: authRouter,
	blog: blogRouter,
	flags: flagsRouter,
	resume: resumeRouter,
	storage: storageRouter,
	printer: printerRouter,
	statistics: statisticsRouter,
	users: usersRouter,
};
