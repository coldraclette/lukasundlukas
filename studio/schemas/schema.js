// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import frontpage from "./fontpage";
import about_amgwerd from "./about_amgwerd";
import about_frischknecht from "./about_frischknecht";
import experience_amgwerd from "./experience_amgwerd";
import experience_frischknecht from "./experience_frischknecht";
import project from "./project";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    frontpage,
    about_amgwerd,
    about_frischknecht,
    experience_amgwerd,
    experience_frischknecht,
    project,
  ]),
});
