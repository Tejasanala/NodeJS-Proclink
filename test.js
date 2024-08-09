import AWS from "aws-sdk";
import { Entity } from "electrodb";

AWS.config.update({
  accessKeyId: "AKIAW3MED4IIBLDGIJW4",
  secretAccessKey: "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",
  region: "ap-south-1",
});

const client = new AWS.DynamoDB.DocumentClient();
const Movies = new Entity(
  {
    model: {
      entity: "Movies",
      version: "1",
      service: "MovieService",
    },
    attributes: {
      movieId: {
        type: "string",
      },
      name: {
        type: "string",
      },
      trailer: {
        type: "string",
      },
      price: {
        type: "number",
        required: true,
      },
      poster: {
        type: "string",
      },
      summary: {
        type: "string",
      },
      condition: {
        type: ["EXCELLENT", "GOOD", "FAIR", "POOR"],
        required: true,
      },
      genre: {
        type: "set",
        items: "string",
      },
      published: {
        type: "string",
      },
    },
    indexes: {
      byLocation: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["movieId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client: client, table: "movies" }
);

await Movies.create({
  name: "Vikram",
  poster:
    "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
  rating: 8.4,
  summary:
    "Members of a black ops team must track and eliminate a gang of masked murderers.",
  trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
}).go;
