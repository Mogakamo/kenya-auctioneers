import { createClient } from 'redis';

const redisUrl = `redis://redis-18663.c273.us-east-1-2.ec2.cloud.redislabs.com:18663`;
const redisClient = createClient({
  url: redisUrl,
  password: 'DgUGaYiGaBf6haT8arZgpaBvhYsaV0wA',
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('🚀 Redis client connected...');
    redisClient.set(
      'tRPC',
      'Welcome to Salems System',
    );
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

connectRedis();

redisClient.on('error', (err: any) => console.log(err));

export default redisClient;