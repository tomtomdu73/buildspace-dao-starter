import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x737E55e18A22D0F036452d572F4A549C11a03b53");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Power Ring",
        description: "This NFT will give you access to TotoDAO!",
        image: readFileSync("scripts/assets/ticket.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();