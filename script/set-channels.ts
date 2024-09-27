import { config } from "dotenv";
import { HookdeckPubSub } from "@hookdeck/pubsub";

config();

if (!process.env.EDA_PUBLISH_KEY) {
  console.error("Error: Please set the EDA_PUBLISH_KEY environment variable");
  process.exit(1);
}

if (!process.env.HOOKDECK_API_KEY) {
  console.error("Error: Please set the HOOKDECK_API_KEY environment variable");
  process.exit(1);
}

const pubsub = new HookdeckPubSub({
  apiKey: process.env.HOOKDECK_API_KEY,
  publishAuth: {
    type: "api_key",
    configs: {
      apiKey: process.env.EDA_PUBLISH_KEY,
      headerKey: "x-eda-publish-key",
    },
  },
});

const main = async () => {
  const channelNames = ["orders", "inventory", "payments", "logistics"];

  // Ensure channel exist
  for (const channelName of channelNames) {
    await pubsub.channel({ name: channelName });
    console.log(`Created channel: ${channelName}`);
  }
};

main()
  .then(() => {
    console.log("Channels created successfully");
  })
  .catch((error) => {
    console.error("Error creating channels", error);
  });
