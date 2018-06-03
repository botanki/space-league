import web3 from 'Embark/web3';
import EmbarkJS from 'Embark/EmbarkJS';
let CharacterFactoryJSONConfig = {
  "contract_name": "CharacterFactory",
  "address": "0x94F72e677821A728cCA652F7564799117174BC96",
  "code": "608060405234801561001057600080fd5b50610731806100206000396000f3006080604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166319e7ce8b81146100665780634810bc59146100a7578063b57da3b1146100f3578063dabb053114610110575b600080fd5b34801561007257600080fd5b5061007e600435610185565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100b357600080fd5b506100bf6004356101ad565b6040805195865260ff909416602086015261ffff928316858501529082166060850152166080830152519081900360a00190f35b3480156100ff57600080fd5b5061010e60ff60043516610244565b005b34801561011c57600080fd5b506101286004356104be565b6040805160ff9a8b16815261ffff998a16602082015297891688820152958816606088015293871660808701529190961660a085015294841660c084015293831660e0830152929091166101008201529051908190036101200190f35b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60008054829081106101bb57fe5b60009182526020918290206040805160a0810182526002909302909101805460ff808216855261ffff61010080840482169787019790975263010000008084048216958701959095526501000000000080840482166060880152670100000000000000909304811660808701526001909301549496508416948404821693928304821692041685565b61024c6106a0565b600060a06040519081016040528060a0604051908101604052808660ff168152602001600561ffff168152602001600661ffff168152602001600761ffff168152602001600861ffff168152508152602001600160ff168152602001600061ffff168152602001600061ffff168152602001600061ffff16815250915061044e60016000849080600181540180825580915050906001820390600052602060002090600202016000909192909190915060008201518160000160008201518160000160006101000a81548160ff021916908360ff16021790555060208201518160000160016101000a81548161ffff021916908361ffff16021790555060408201518160000160036101000a81548161ffff021916908361ffff16021790555060608201518160000160056101000a81548161ffff021916908361ffff16021790555060808201518160000160076101000a81548161ffff021916908361ffff160217905550505060208201518160010160006101000a81548160ff021916908360ff16021790555060408201518160010160016101000a81548161ffff021916908361ffff16021790555060608201518160010160036101000a81548161ffff021916908361ffff16021790555060808201518160010160056101000a81548161ffff021916908361ffff160217905550505061068e90919063ffffffff16565b600081815260016020908152604091829020805473ffffffffffffffffffffffffffffffffffffffff19163390811790915582518481529182015281519293507f2149e230a9ad47e1b1208488004cb1e3aca990644351f569362737a7065146ab929081900390910190a1505050565b60008060008060008060008060006104d46106a0565b600080548c9081106104e257fe5b906000526020600020906002020160a060405190810160405290816000820160a060405190810160405290816000820160009054906101000a900460ff1660ff1660ff1681526020016000820160019054906101000a900461ffff1661ffff1661ffff1681526020016000820160039054906101000a900461ffff1661ffff1661ffff1681526020016000820160059054906101000a900461ffff1661ffff1661ffff1681526020016000820160079054906101000a900461ffff1661ffff1661ffff168152505081526020016001820160009054906101000a900460ff1660ff1660ff1681526020016001820160019054906101000a900461ffff1661ffff1661ffff1681526020016001820160039054906101000a900461ffff1661ffff1661ffff1681526020016001820160059054906101000a900461ffff1661ffff1661ffff168152505090508060000151600001518160000151602001518260000151604001518360000151606001518460000151608001518560200151866040015187606001518860800151995099509950995099509950995099509950509193959799909294969850565b60008282111561069a57fe5b50900390565b610120604051908101604052806106b56106d7565b8152600060208201819052604082018190526060820181905260809091015290565b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152905600a165627a7a72305820c23dad224bbafff6e983ba4031fc1fe961c2389bfe55afe4b4d612f611c8626d0029",
  "runtime_bytecode": "6080604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166319e7ce8b81146100665780634810bc59146100a7578063b57da3b1146100f3578063dabb053114610110575b600080fd5b34801561007257600080fd5b5061007e600435610185565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100b357600080fd5b506100bf6004356101ad565b6040805195865260ff909416602086015261ffff928316858501529082166060850152166080830152519081900360a00190f35b3480156100ff57600080fd5b5061010e60ff60043516610244565b005b34801561011c57600080fd5b506101286004356104be565b6040805160ff9a8b16815261ffff998a16602082015297891688820152958816606088015293871660808701529190961660a085015294841660c084015293831660e0830152929091166101008201529051908190036101200190f35b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60008054829081106101bb57fe5b60009182526020918290206040805160a0810182526002909302909101805460ff808216855261ffff61010080840482169787019790975263010000008084048216958701959095526501000000000080840482166060880152670100000000000000909304811660808701526001909301549496508416948404821693928304821692041685565b61024c6106a0565b600060a06040519081016040528060a0604051908101604052808660ff168152602001600561ffff168152602001600661ffff168152602001600761ffff168152602001600861ffff168152508152602001600160ff168152602001600061ffff168152602001600061ffff168152602001600061ffff16815250915061044e60016000849080600181540180825580915050906001820390600052602060002090600202016000909192909190915060008201518160000160008201518160000160006101000a81548160ff021916908360ff16021790555060208201518160000160016101000a81548161ffff021916908361ffff16021790555060408201518160000160036101000a81548161ffff021916908361ffff16021790555060608201518160000160056101000a81548161ffff021916908361ffff16021790555060808201518160000160076101000a81548161ffff021916908361ffff160217905550505060208201518160010160006101000a81548160ff021916908360ff16021790555060408201518160010160016101000a81548161ffff021916908361ffff16021790555060608201518160010160036101000a81548161ffff021916908361ffff16021790555060808201518160010160056101000a81548161ffff021916908361ffff160217905550505061068e90919063ffffffff16565b600081815260016020908152604091829020805473ffffffffffffffffffffffffffffffffffffffff19163390811790915582518481529182015281519293507f2149e230a9ad47e1b1208488004cb1e3aca990644351f569362737a7065146ab929081900390910190a1505050565b60008060008060008060008060006104d46106a0565b600080548c9081106104e257fe5b906000526020600020906002020160a060405190810160405290816000820160a060405190810160405290816000820160009054906101000a900460ff1660ff1660ff1681526020016000820160019054906101000a900461ffff1661ffff1661ffff1681526020016000820160039054906101000a900461ffff1661ffff1661ffff1681526020016000820160059054906101000a900461ffff1661ffff1661ffff1681526020016000820160079054906101000a900461ffff1661ffff1661ffff168152505081526020016001820160009054906101000a900460ff1660ff1660ff1681526020016001820160019054906101000a900461ffff1661ffff1661ffff1681526020016001820160039054906101000a900461ffff1661ffff1661ffff1681526020016001820160059054906101000a900461ffff1661ffff1661ffff168152505090508060000151600001518160000151602001518260000151604001518360000151606001518460000151608001518560200151866040015187606001518860800151995099509950995099509950995099509950509193959799909294969850565b60008282111561069a57fe5b50900390565b610120604051908101604052806106b56106d7565b8152600060208201819052604082018190526060820181905260809091015290565b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152905600a165627a7a72305820c23dad224bbafff6e983ba4031fc1fe961c2389bfe55afe4b4d612f611c8626d0029",
  "real_runtime_bytecode": "6080604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166319e7ce8b81146100665780634810bc59146100a7578063b57da3b1146100f3578063dabb053114610110575b600080fd5b34801561007257600080fd5b5061007e600435610185565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100b357600080fd5b506100bf6004356101ad565b6040805195865260ff909416602086015261ffff928316858501529082166060850152166080830152519081900360a00190f35b3480156100ff57600080fd5b5061010e60ff60043516610244565b005b34801561011c57600080fd5b506101286004356104be565b6040805160ff9a8b16815261ffff998a16602082015297891688820152958816606088015293871660808701529190961660a085015294841660c084015293831660e0830152929091166101008201529051908190036101200190f35b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60008054829081106101bb57fe5b60009182526020918290206040805160a0810182526002909302909101805460ff808216855261ffff61010080840482169787019790975263010000008084048216958701959095526501000000000080840482166060880152670100000000000000909304811660808701526001909301549496508416948404821693928304821692041685565b61024c6106a0565b600060a06040519081016040528060a0604051908101604052808660ff168152602001600561ffff168152602001600661ffff168152602001600761ffff168152602001600861ffff168152508152602001600160ff168152602001600061ffff168152602001600061ffff168152602001600061ffff16815250915061044e60016000849080600181540180825580915050906001820390600052602060002090600202016000909192909190915060008201518160000160008201518160000160006101000a81548160ff021916908360ff16021790555060208201518160000160016101000a81548161ffff021916908361ffff16021790555060408201518160000160036101000a81548161ffff021916908361ffff16021790555060608201518160000160056101000a81548161ffff021916908361ffff16021790555060808201518160000160076101000a81548161ffff021916908361ffff160217905550505060208201518160010160006101000a81548160ff021916908360ff16021790555060408201518160010160016101000a81548161ffff021916908361ffff16021790555060608201518160010160036101000a81548161ffff021916908361ffff16021790555060808201518160010160056101000a81548161ffff021916908361ffff160217905550505061068e90919063ffffffff16565b600081815260016020908152604091829020805473ffffffffffffffffffffffffffffffffffffffff19163390811790915582518481529182015281519293507f2149e230a9ad47e1b1208488004cb1e3aca990644351f569362737a7065146ab929081900390910190a1505050565b60008060008060008060008060006104d46106a0565b600080548c9081106104e257fe5b906000526020600020906002020160a060405190810160405290816000820160a060405190810160405290816000820160009054906101000a900460ff1660ff1660ff1681526020016000820160019054906101000a900461ffff1661ffff1661ffff1681526020016000820160039054906101000a900461ffff1661ffff1661ffff1681526020016000820160059054906101000a900461ffff1661ffff1661ffff1681526020016000820160079054906101000a900461ffff1661ffff1661ffff168152505081526020016001820160009054906101000a900460ff1660ff1660ff1681526020016001820160019054906101000a900461ffff1661ffff1661ffff1681526020016001820160039054906101000a900461ffff1661ffff1661ffff1681526020016001820160059054906101000a900461ffff1661ffff1661ffff168152505090508060000151600001518160000151602001518260000151604001518360000151606001518460000151608001518560200151866040015187606001518860800151995099509950995099509950995099509950509193959799909294969850565b60008282111561069a57fe5b50900390565b610120604051908101604052806106b56106d7565b8152600060208201819052604082018190526060820181905260809091015290565b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152905600a165627a7a723058206a52e47182967cf2ae72ee94d2b8715627df75163d569eb3674179e8fa2389c20029",
  "swarm_hash": "c23dad224bbafff6e983ba4031fc1fe961c2389bfe55afe4b4d612f611c8626d",
  "gas_estimates": {
    "creation": {
      "codeDepositCost": "368200",
      "executionCost": "405",
      "totalCost": "368605"
    },
    "external": {
      "characterToOwner(uint256)": "471",
      "characters(uint256)": "1303",
      "createCharacter(uint8)": "infinite",
      "getCharacter(uint256)": "4216"
    }
  },
  "function_hashes": {
    "characterToOwner(uint256)": "19e7ce8b",
    "characters(uint256)": "4810bc59",
    "createCharacter(uint8)": "b57da3b1",
    "getCharacter(uint256)": "dabb0531"
  },
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "characterToOwner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "characters",
      "outputs": [
        {
          "components": [
            {
              "name": "role",
              "type": "uint8"
            },
            {
              "name": "attack",
              "type": "uint16"
            },
            {
              "name": "defense",
              "type": "uint16"
            },
            {
              "name": "energy",
              "type": "uint16"
            },
            {
              "name": "health",
              "type": "uint16"
            }
          ],
          "name": "class",
          "type": "tuple"
        },
        {
          "name": "level",
          "type": "uint8"
        },
        {
          "name": "experience",
          "type": "uint16"
        },
        {
          "name": "lossCount",
          "type": "uint16"
        },
        {
          "name": "winCount",
          "type": "uint16"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_role",
          "type": "uint8"
        }
      ],
      "name": "createCharacter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getCharacter",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        },
        {
          "name": "",
          "type": "uint16"
        },
        {
          "name": "",
          "type": "uint16"
        },
        {
          "name": "",
          "type": "uint16"
        },
        {
          "name": "",
          "type": "uint16"
        },
        {
          "name": "",
          "type": "uint8"
        },
        {
          "name": "",
          "type": "uint16"
        },
        {
          "name": "",
          "type": "uint16"
        },
        {
          "name": "",
          "type": "uint16"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_characterId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "OnCreateCharacter",
      "type": "event"
    }
  ]
}
;
let CharacterFactory = new EmbarkJS.Contract(CharacterFactoryJSONConfig);

__embarkContext.execWhenReady(function() {

CharacterFactory.setProvider(web3.currentProvider);

CharacterFactory.options.from = web3.eth.defaultAccount;

});
export default CharacterFactory;