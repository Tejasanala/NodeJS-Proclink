import { Entity } from "electrodb"; // ORM - object relational mapping
import { client } from "../util/dbconnection.js";

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
      poster: {
        type: "string",
      },
      summary: {
        type: "string",
      },
      rating: {
        type: "number",
      },
    },
    indexes: {
      primary: {
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
  { client, table: "movies" }
);

export { Movies };
