import merge from "lodash.merge";
import conversationResolvers from "./conversations";
import messageResolvers from "./messages.mjs";
import userResolvers from "./users.mjs";
import scalarResolvers from "./scalars.mjs";

const resolvers = merge(
  {},
  userResolvers,
  scalarResolvers,
  conversationResolvers,
  messageResolvers
);

export default resolvers;
