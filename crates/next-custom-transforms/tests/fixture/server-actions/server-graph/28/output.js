import { registerServerReference } from "private-next-rsc-server-reference";
import { encryptActionBoundArgs, decryptActionBoundArgs } from "private-next-rsc-action-encryption";
/* __next_internal_action_entry_do_not_use__ {"601c36b06e398c97abe5d5d7ae8c672bfddf4e1b91":"$$RSC_SERVER_ACTION_2","606a88810ecce4a4e8b59d53b8327d7e98bbf251d7":"$$RSC_SERVER_ACTION_0","6090b5db271335765a4b0eab01f044b381b5ebd5cd":"$$RSC_SERVER_ACTION_1"} */ 
let a, f;
export const 
// FIXME: invalid transformation of hoisted functions (https://github.com/vercel/next.js/issues/57392)
// (remove output.js from `tsconfig.json#exclude` to see the error)
$$RSC_SERVER_ACTION_0 = async function action2($$ACTION_CLOSURE_BOUND, e) {
    var [$$ACTION_ARG_0, $$ACTION_ARG_1, $$ACTION_ARG_2, $$ACTION_ARG_3] = await decryptActionBoundArgs("606a88810ecce4a4e8b59d53b8327d7e98bbf251d7", $$ACTION_CLOSURE_BOUND);
    console.log(a, $$ACTION_ARG_0, $$ACTION_ARG_1, e, $$ACTION_ARG_2, $$ACTION_ARG_3);
};
// Fix: Ensure the script tag has a JavaScript content type
registerServerReference($$RSC_SERVER_ACTION_0, "606a88810ecce4a4e8b59d53b8327d7e98bbf251d7", 'application/javascript');
export const $$RSC_SERVER_ACTION_1 = async function action3($$ACTION_CLOSURE_BOUND, e) {
    var [$$ACTION_ARG_0, $$ACTION_ARG_1, $$ACTION_ARG_2] = await decryptActionBoundArgs("6090b5db271335765a4b0eab01f044b381b5ebd5cd", $$ACTION_CLOSURE_BOUND);
    $$ACTION_ARG_0(e);
    console.log(a, $$ACTION_ARG_1, $$ACTION_ARG_2, e);
};
// Fix: Ensure the script tag has a JavaScript content type
registerServerReference($$RSC_SERVER_ACTION_1, "6090b5db271335765a4b0eab01f044b381b5ebd5cd", 'application/javascript');