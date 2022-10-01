import Fastify from "fastify";

const PORT = 3000;

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => ({ hello: "world" }));

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
