import web3 from 'Embark/web3';
import EmbarkJS from 'Embark/EmbarkJS';
let ClassFactoryJSONConfig = {
  "contract_name": "ClassFactory",
  "address": "0xd260e77b5bE2bf27477A55D6f6584EDABBdF26d2",
  "code": "6080604052348015600f57600080fd5b50603580601d6000396000f3006080604052600080fd00a165627a7a723058203fd9f719cbfc9d41dc2d67269a7408d3e57367e5f1da3f02b4783cf688efff340029",
  "runtime_bytecode": "6080604052600080fd00a165627a7a723058203fd9f719cbfc9d41dc2d67269a7408d3e57367e5f1da3f02b4783cf688efff340029",
  "real_runtime_bytecode": "6080604052600080fd00a165627a7a723058209c4c77a8f80bffd40eb7a325d7cfe1a356a6e23ef3d0931bb76425694f0f8e960029",
  "swarm_hash": "3fd9f719cbfc9d41dc2d67269a7408d3e57367e5f1da3f02b4783cf688efff34",
  "gas_estimates": {
    "creation": {
      "codeDepositCost": "10600",
      "executionCost": "66",
      "totalCost": "10666"
    }
  },
  "function_hashes": {},
  "abi": []
}
;
let ClassFactory = new EmbarkJS.Contract(ClassFactoryJSONConfig);

__embarkContext.execWhenReady(function() {

ClassFactory.setProvider(web3.currentProvider);

ClassFactory.options.from = web3.eth.defaultAccount;

});
export default ClassFactory;
